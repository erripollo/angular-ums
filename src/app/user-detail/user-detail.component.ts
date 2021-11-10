import { User } from './../classes/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user!: User
  constructor() { }

  ngOnInit(): void {
  }

  saveUser(){
    alert(this.user.id)
  }

}
