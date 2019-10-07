import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Subscription, Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.index();
  }
}
