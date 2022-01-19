import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  public users: User[]
  public currentUser: User = new User

  constructor(
    private userService: UserService
  ) {
    this.users = userService.list
  }

  onUserSelect(user: User) {
    this.currentUser = user
  }

  onUserUpdate(user: User) {
    this.userService.updateUser(user)
  }

  onUserDelete(user: User) {
    this.userService.removeUser(user)
  }

}
