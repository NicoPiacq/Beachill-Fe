import { Component, Input, OnInit } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../../../model/dtos/reservations-place';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationPlacesService } from '../../../../../../../services/reservation-places.service';

@Component({
  selector: 'app-edit-structure-info-form',
  templateUrl: './edit-structure-info-form.component.html',
  styleUrl: './edit-structure-info-form.component.css'
})
export class EditStructureInfoFormComponent implements OnInit{

  @Input("structureData") structureData!: ReservationPlaceDto;

  editStructureForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private reservationPlaceService: ReservationPlacesService) {}

  ngOnInit() {
    this.editStructureForm = this.formBuilder.group({
      structureName: [this.structureData.name],
      address: [this.structureData.address],
      city: [this.structureData.city],
      province: [this.structureData.province],
      region: [this.structureData.region],
      managerId: [this.structureData.managerId],
      id: [this.structureData.id]
    });
  }

  successMessage: string = '';
  errorMessage: string = '';

  editStructure() {
    let structureDataTemp = {...this.editStructureForm.value};
    this.reservationPlaceService.updateReservationPlace(structureDataTemp).subscribe({
      next: () => {
        this.showSuccessMessage('Struttura modificata correttamente');
      },
      error: (error) => {this.showErrorMessage('Errore durante la modifica della struttura!\n'+error);}
    });
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => { this.errorMessage = ''; }, 5000)
  }

  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => { this.successMessage = ''; }, 5000);
  }
}
