import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckinModel } from '../model/checkin.model';

@Injectable({
  providedIn: 'root'
})
export class ChenkinService {

  constructor(private http: HttpClient) { }

  getCheckins() : Observable<any>{
    return this.http.get("http://localhost:8080/api/checkins/");
  }

  save(checkin: CheckinModel) : Observable<any>{
    return this.http.post("http://localhost:8080/api/checkin/", checkin);
  }

  delete(checkin: CheckinModel) : Observable<any>{
    return this.http.delete("http://localhost:8080/api/checkin/" + checkin);
  }
}
