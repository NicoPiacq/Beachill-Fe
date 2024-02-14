import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../model/dtos/user';

@Component({
  selector: 'app-users-found-list',
  templateUrl: './users-found-list.component.html',
  styleUrl: './users-found-list.component.css'
})
export class UsersFoundListComponent {

  @Input("usersFoundProp") usersFound: User[] = [];
  @Output("userSelectedEvent") userSelectedEvent = new EventEmitter<number>();  

  selectUser(id: number) {
    this.userSelectedEvent.emit(id);
  }
}
