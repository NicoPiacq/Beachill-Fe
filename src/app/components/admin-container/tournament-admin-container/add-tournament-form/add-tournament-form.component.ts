import { Component, OnInit } from '@angular/core';
import { PlaceDto } from '../../../../../model/dtos/place';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AdminService } from '../../../../../services/admin.service';
import { Router } from '@angular/router';
import { TournamentTypeDto } from '../../../../../model/dtos/tournament-type';
import { TournamentsTypesService } from '../../../../../services/tournaments-types.service';
import { PlacesService } from '../../../../../services/places.service';
import { TournamentAdminDto } from '../../../../../model/dtos/tournament-admin';
import { TournamentLevel } from '../../../../../model/dtos/tournament-level';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-add-tournament-form',
  templateUrl: './add-tournament-form.component.html',
  styleUrl: './add-tournament-form.component.css'
})
export class AddTournamentFormComponent implements OnInit{
  tournamentForm!: FormGroup;
  tournamentTypes: TournamentTypeDto[] = [];
  tournamentLevel: TournamentLevel[] = [];
  places: PlaceDto[] = [];

  errorMessage: string = "";
  successMessage: string = "";
  tournamentData: TournamentAdminDto = {
    tournamentName: '',
    startDate: new Date,
    endDate: new Date,
    tournamentTypeName: '',
    place: '',
    status: -1,
    levelName: '',
    userDto: undefined
  };

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, 
              private router: Router, private tournamentsTypesService: TournamentsTypesService,
              private placesService: PlacesService, private authService: AuthService){}


  ngOnInit(): void {
    this.buildFullForm();
  }

  buildFullForm(){
    this.getAllTournamentTypes();
    this.getAllTournamentLevels();
    this.getAllPlaces();
    this.tournamentForm = this.formBuilder.group({
      tournamentName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      tournamentTypeName: [''],
      levelName: ['', Validators.required],
      place: ['', Validators.required],
    });
  }

  getAllTournamentTypes(){
    this.tournamentsTypesService.getAllTournamentsTypes().subscribe({
         next: t => this.tournamentTypes = t
       })
  }

  getAllTournamentLevels(){
    this.tournamentsTypesService.getAllTournamentsLevels().subscribe({
      next: t => this.tournamentLevel = t
    });
  }

  getAllPlaces(){
    this.placesService.getAllPlaces().subscribe({
      next: places => this.places = places
    })
  }

  createNewTournament(){
    if(this.tournamentForm.valid){
      this.tournamentData = {...this.tournamentForm.value};
      this.tournamentData.userDto = this.authService.authenticatedUser.value?.user;
      this.tournamentData.status = 1;
      console.log(this.tournamentData);
      this.adminService.createTournament(this.tournamentData).subscribe({
        next: ed => {
          this.showSuccessMessage('Torneo creato correttamente');
          setTimeout(() => {
            this.tournamentForm.reset();
          });
        },
        error: error => {
          this.showErrorMessage('Errore durante la creazione del torneo: '+error);
        }
      })
    }
    else {
      this.showErrorMessage('Errore: Form non valido.');
    }
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => { this.errorMessage = ''; }, 5000);
  }

  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => { this.successMessage = ''; }, 5000);
  }

}
