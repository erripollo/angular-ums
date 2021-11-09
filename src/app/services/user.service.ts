import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      name: 'Roberto',
      lastname: 'Rossi',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      name: 'Federico',
      lastname: 'Ferrari',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      name: 'Andrea',
      lastname: 'Bianchi',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      name: 'Giovanni',
      lastname: 'Russo',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
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
}