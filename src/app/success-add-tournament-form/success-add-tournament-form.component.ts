import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-add-tournament-form',
  templateUrl: './success-add-tournament-form.component.html',
  styleUrl: './success-add-tournament-form.component.css'
})
export class SuccessAddTournamentFormComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/admin']); 
    }, 2000);
  }

}
