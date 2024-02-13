import { Component, Input } from '@angular/core';
import { User } from '../../../../../../model/dtos/user';

@Component({
  selector: 'app-user-single-details',
  templateUrl: './user-single-details.component.html',
  styleUrl: './user-single-details.component.css'
})
export class UserSingleDetailsComponent {
  
  @Input("userProp") user!: User;
  

}
