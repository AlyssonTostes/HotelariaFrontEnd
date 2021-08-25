import { Component, OnInit } from '@angular/core';
import { ChenkinService } from 'src/app/shared/service/chenkin.service';

@Component({
  selector: 'app-list-checkin',
  templateUrl: './list-checkin.component.html',
  styleUrls: ['./list-checkin.component.css']
})
export class ListCheckinComponent implements OnInit {

  checkins: Array<any> = new Array();

  constructor(private checkinService: ChenkinService) { }

  ngOnInit(): void {
    this.getCheckins();
  }

  getCheckins(){
    this.checkinService.getCheckins().subscribe(checkin =>{
      this.checkins = checkin;
    }, err =>{
      console.log("Erro ao carregar checkins", err)
    })
  }
}
