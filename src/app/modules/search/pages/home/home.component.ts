import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  searchInput: string = '';

  handleSubmit(): void {
    this.router.navigate(['/resultados'], {
      queryParams: { search: this.searchInput },
    });
  }
}
