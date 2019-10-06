import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit, OnDestroy {

  user: object;
  userId: number;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.subscriptions.push(
      this.userService.show(this.userId).subscribe(response => {
        this.user = response;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subsctiption => subsctiption.unsubscribe());
  }
}
