import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

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
  private api: string = environment.apiUrl;

  public constructor(public http: HttpClient) {}

  public get<T>(endPoint: string, options?: IHttpRequest): Observable<T> {
    return this.http.get<T>(this.api + endPoint, options);
  }
}
