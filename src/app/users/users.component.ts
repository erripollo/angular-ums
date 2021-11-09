import { UserService } from '../services/user.service';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from '../interfaces/user';

@Component({
    selector: 'app-users',
    providers: [UserService],
    templateUrl: './users.component.html',
    styleUrls: [
        './users.component.css' 
    ]
})
export class UsersComponent implements OnInit{

    title = 'Users'
    public users: User[] = []
    @Output('updateUser') updateUser = new EventEmitter<User>();
    constructor(private service: UserService) {
        this.users = service.getUsers();
    }

    ngOnInit() {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: User){
        this.service.deleteUser(user)
    }

    onSelectUser(user: User){
        this.updateUser.emit(user);
    }
}