import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  searchInput: string = '';
  repos: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.searchInput = this.route.snapshot.queryParams['search'] || '';

    this.fetchRepos();
  }

  fetchRepos(): void {
    if (this.searchInput === '') return;

    this.http
      .get(`https://api.github.com/users/${this.searchInput}/repos`)
      .subscribe({
        next: (repos) => {
          this.repos = repos as any[];
        },
        error: () => {
          this.repos = [];
        },
      });
  }

  handleSubmit(): void {
    this.router.navigate([], {
      queryParams: { search: this.searchInput },
      queryParamsHandling: 'merge'
    });
    this.fetchRepos();
  }
}
