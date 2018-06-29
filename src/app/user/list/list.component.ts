import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Users } from '../../../models/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    receivedUser: Users[];
  constructor(private userSevice: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
      this
          .userSevice
          .getUsers()
          .subscribe((data: Users[]) => {
              this.receivedUser = data;
          });
  }
}
