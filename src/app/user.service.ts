import { Injectable } from '@angular/core';
import { AbesseHttpClientService } from './abesse-http-client.service';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { IUser } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private service: AbesseHttpClientService) {}

  index(): Observable<IUser[]> {
    return this.service.get<IUser[]>('users').pipe(catchError(() => of(null)));
  }

  show(id: number): Observable<IUser | Error> {
    // @note We handle the not found error on the show component file
    return this.service.get<IUser>(`users/${id}`);
  }
}
