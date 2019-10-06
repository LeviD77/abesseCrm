import { Injectable } from '@angular/core';
import { AbesseHttpClientService } from './abesse-http-client.service';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private service: AbesseHttpClientService) { }

  index(): Observable<object[]> {
    return this.service.get<object[]>('/users').pipe(
      map(response => {
        return response;
      })
    );
  }
}
