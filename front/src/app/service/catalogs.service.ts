import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Token: localStorage.getItem('token') || ''
    })
  };
  
  constructor(private http: HttpClient ) { }

  public getSupplier(name: any) : Observable<any>{
    return this.http.post<any>('/api/supplier/list', name, this.httpOptions);
  }
  

}