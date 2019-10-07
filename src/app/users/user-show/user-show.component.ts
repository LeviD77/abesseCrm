import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import {
  map,
  distinctUntilChanged,
  switchMap,
  switchMapTo,
  shareReplay,
  catchError
} from 'rxjs/operators';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  public userId$: Observable<number>;
  public user$: Observable<IUser | boolean | Error>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId$ = this.activatedRoute.params.pipe(
      map(({ id }) => id),
      distinctUntilChanged()
    );

    this.user$ = this.userId$.pipe(
      switchMap(userId => this.userService.show(userId)),
      shareReplay(1),
      catchError(() => this.router.navigateByUrl('users'))
    );
  }
}
