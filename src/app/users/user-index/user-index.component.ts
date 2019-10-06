import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit, OnDestroy {

  users: object[];

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.userService.index().subscribe(response => {
        this.users = response;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subsctiption => subsctiption.unsubscribe());
  }
}
