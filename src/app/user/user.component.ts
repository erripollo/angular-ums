import { User } from './../classes/user';
import { UserService } from '../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDelete = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private userServise: UserService) { }
  
  ngOnInit(): void {
  }

  deleteUser() {
    this.userDelete.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user)
  }
}
