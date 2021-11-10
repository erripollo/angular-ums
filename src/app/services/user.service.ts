import { UserInterface } from './../interfaces/user';
import { Injectable } from "@angular/core";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Roberto',
      lastname: 'Rossi',
      email: 'rossi@example.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '3345665423',
      age: 30
    },
    {
      id: 2,
      name: 'Federico',
      lastname: 'Ferrari',
      email: 'ferrari@example.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '3374885923',
      age: 34
    },
    {
      id: 3,
      name: 'Andrea',
      lastname: 'Bianchi',
      email: 'bianchi@example.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '3249884651',
      age: 29
    },
    {
      id: 4,
      name: 'Giovanni',
      lastname: 'Russo',
      email: 'russo@example.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '3350992875',
      age: 40
    }
  ];

  getUsers() {
    return this.users;
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if(index > -1){
      this.users.splice(index, 1)
    }
  }

  updateUser(user: UserInterface){
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx >= 0) {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInterface){
    this.users.splice(0,0,user)
  }
}