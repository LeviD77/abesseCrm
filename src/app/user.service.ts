import { Injectable } from '@angular/core';
import { AbesseHttpClientService } from './abesse-http-client.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private service: AbesseHttpClientService) { }

  index(): Observable<object[]> {
    return this.service.get<object[]>('/users').pipe(
      map(response => response),
      tap(console.log)
    );
  }

  show(id: number): Observable<object[]> {
    return this.service.get<object[]>(`/users/${id}`).pipe(
      map(response => response),
      tap(console.log)
    );
  }
}
