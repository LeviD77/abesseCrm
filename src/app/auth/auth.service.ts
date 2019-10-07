import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../user.service';
import { map, catchError } from 'rxjs/operators';
import { LOCAL_STORAGE } from '../enums/local-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<IUser[]>;

  constructor(private userService: UserService) {}

  login(email: string, password: string): Observable<IUser[]> {
    this.user$ = this.userService.index();

    return this.user$.pipe(
      map((users: IUser[]) =>
        users.filter(u => u.email === email && u.password === password)
      ),
      catchError(() => of([]))
    );
  }

  logout(): void {
    localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
  }
}
