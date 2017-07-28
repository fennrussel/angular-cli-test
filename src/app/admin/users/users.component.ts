import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[];
  per = true;

  constructor() { }

  ngOnInit() {
    if (this.per) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }
  async getUsers() {
    return [
      { name: 'john1', email: 'john1@a.com' },
      { name: 'john2', email: 'john2@a.com' }
    ]
  }

}
