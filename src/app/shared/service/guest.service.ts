import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuestsModel } from '../model/guests.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  getGuests() : Observable<any>{
    return this.http.get("http://localhost:8080/api/hospedes/");
  }

  save(guest: GuestsModel) : Observable<any>{
    return this.http.post("http://localhost:8080/api/hospede/", guest);
  }

  delete(guest: GuestsModel) : Observable<any>{
    return this.http.delete("http://localhost:8080/api/hospede/" + guest);
  }
}
