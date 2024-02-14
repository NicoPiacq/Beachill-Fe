import { Component, Input } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../../model/dtos/reservations-place';

@Component({
  selector: 'app-structure-single-details',
  templateUrl: './structure-single-details.component.html',
  styleUrl: './structure-single-details.component.css'
})
export class StructureSingleDetailsComponent {
  @Input('structureProp') structure!: ReservationPlaceDto;
}
