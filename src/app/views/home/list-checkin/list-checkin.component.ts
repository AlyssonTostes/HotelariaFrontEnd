import { Component, OnInit } from '@angular/core';
import { CheckinModel } from 'src/app/shared/model/checkin.model';
import { ChenkinService } from 'src/app/shared/service/chenkin.service';

@Component({
  selector: 'app-list-checkin',
  templateUrl: './list-checkin.component.html',
  styleUrls: ['./list-checkin.component.css']
})
export class ListCheckinComponent implements OnInit {

  checkin: CheckinModel = new CheckinModel();
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

  save(){
    this.checkinService.save(this.checkin).subscribe(checkin =>{
        console.log(checkin);
        this.checkin = new CheckinModel();           //Limpa os campos.
        this.getCheckins();                         //Peenche a grade novamente.
      }, err =>{
        console.log('Erro ao salvar o hóspede', err);
      });
    }

    delete(checkin: CheckinModel){
      this.checkinService.delete(checkin).subscribe(checkin =>{
        this.checkin = new CheckinModel();           //Limpa os campos.
        this.getCheckins();                         //Peenche a grade novamente.
      }, err =>{
        console.log('Erro ao salvar o hóspede', err);
      });
    }
}
