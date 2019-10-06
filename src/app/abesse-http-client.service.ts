import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface IHttpRequest {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AbesseHttpClientService {
  public constructor(
    public http: HttpClient
  ) { }

  private api = 'http://localhost:3000';

  public get<T>(endPoint: string, options?: IHttpRequest): Observable<T> {
    return this.http.get<T>(this.api + endPoint, options);
  }
}
