import { Component, Input } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';

@Component({
  selector: 'app-structure-list-admin',
  templateUrl: './structure-list-admin.component.html',
  styleUrl: './structure-list-admin.component.css'
})
export class StructureListAdminComponent {
  @Input('structuresProp') structures: ReservationPlaceDto[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
}
