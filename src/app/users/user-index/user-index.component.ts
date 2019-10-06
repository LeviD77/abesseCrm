import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  users: object[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'Levente',
        password: 'secret',
        email: 'szekely.levi01@gmail.com'
      },
      {
        id: 2,
        username: 'Tamás',
        password: 'oldTown',
        email: 'thomas@gmail.com'
      },
      {
        id: 3,
        username: 'Emília',
        password: 'emily34',
        email: 'emily@gmail.com'
      }
    ];
  }

  ngOnInit() {
  }

}
