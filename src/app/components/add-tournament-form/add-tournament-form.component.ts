import { Component, OnInit } from '@angular/core';
import { TournamentDto } from '../../../model/dtos/tournament';
import { PlaceDto } from '../../../model/dtos/place';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { TournamentTypeDto } from '../../../model/dtos/tournament-type';
import { TournamentsTypesService } from '../../../services/tournaments-types.service';
import { PlacesService } from '../../../services/places.service';

@Component({
  selector: 'app-add-tournament-form',
  templateUrl: './add-tournament-form.component.html',
  styleUrl: './add-tournament-form.component.css'
})
export class AddTournamentFormComponent implements OnInit{
  tournamentForm!: FormGroup;
  tournamentTypes: TournamentTypeDto[] = [];
  places: PlaceDto[] = [];

  tournamentData: TournamentDto = {
    tournamentName: '',
    startDate: new Date,
    endDate: new Date,
    tournamentTypeName: '',
    place: ''
  };

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, 
              private router: Router, private tournamentsTypesService: TournamentsTypesService,
              private placesService: PlacesService){}


  ngOnInit(): void {
    this.buildFullForm();
  }

  buildFullForm(){
    this.getAllTournamentTypes();
    this.getAllPlaces();
    this.tournamentForm = this.formBuilder.group({
      tournamentName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      tournamentTypeName: ['', Validators.required],
      place: ['', Validators.required],
    });
  }

  getAllTournamentTypes(){
    this.tournamentsTypesService.getAllTournamentsTypes().subscribe({
         next: t => this.tournamentTypes = t
       })
  }
  getAllPlaces(){
    this.placesService.getAllPlaces().subscribe({
      next: places => this.places = places
    })
  }

  createNewTournament(){
    if(this.tournamentForm.valid){
      console.log("sono dentro createNewTournament");
      this.tournamentData = {...this.tournamentForm.value};
      this.adminService.createTournament(this.tournamentData).subscribe({
        next: ed => {
          this.router.navigate(["success-add-tournament-form"]);
        },
        error: error => {
          console.error('Errore durante la creazione del torneo:', error);
        }
      })
    }
    else {
      console.error('Form non valido.');
    }
  }

}
