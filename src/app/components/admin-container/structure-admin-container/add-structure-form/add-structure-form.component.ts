import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';
import { ReservationPlacesService } from '../../../../../services/reservation-places.service';
import { User } from '../../../../../model/dtos/user';

@Component({
  selector: 'app-add-structure-form',
  templateUrl: './add-structure-form.component.html',
  styleUrl: './add-structure-form.component.css'
})
export class AddStructureFormComponent implements OnInit {

  errorMessage: string = "";
  successMessage: string = "";
  createStructureForm!: FormGroup;
  createStructureData: ReservationPlaceDto = {
    id: -1,
    name: '',
    address: '',
    city: '',
    province: '',
    region: '',
    managerId: 0
  }

  @Input('managerDataProp') managerData!: User;
  constructor(private formBuilder: FormBuilder, private reservationService: ReservationPlacesService) { }

  ngOnInit(): void {
    this.createStructureForm = this.formBuilder.group({
      structureName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      region: ['', Validators.required],
    });
  }

  createNewStructure() {
    if(!this.createStructureForm.valid) {
      this.showErrorMessage('Errore: Form non valido!');
      return;
    }
    this.createStructureData = {...this.createStructureForm.value};
    this.createStructureData.managerId = this.managerData.id;
    this.reservationService.addReservationPlace(this.createStructureData).subscribe({
      next: () => {
        this.showSuccessMessage('Struttura registrata correttamente');
      },
      error: (error) => {this.showErrorMessage('Errore durante la registrazione della struttura!\n'+error);}
    });
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
