import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckinsModel } from '../model/checkins.model';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private http: HttpClient) { }

  getCheckins() : Observable<any>{
    return this.http.get("http://localhost:8080/api/checkins/");
  }

  save(checkin: CheckinsModel) : Observable<any>{
    return this.http.post("http://localhost:8080/api/checkin/", checkin);
  }

  delete(checkin: CheckinsModel) : Observable<any>{
    return this.http.delete("http://localhost:8080/api/checkin/" + checkin);
  }
}
