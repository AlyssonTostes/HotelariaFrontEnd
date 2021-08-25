  import { Component, OnInit } from '@angular/core';
  import { CheckinService } from 'src/app/shared/service/checkin.service';
  import { CheckinsModel } from 'src/app/shared/model/checkins.model';


  @Component({
    selector: 'app-list-guest',
    templateUrl: './list-checkin.component.html',
    styleUrls: ['./list-checkin.component.css']
  })
  export class ListCheckinComponent implements OnInit {

  checkin: CheckinsModel = new CheckinsModel();
    checkins: Array<any> = new Array();

    constructor(private checkinService: CheckinService) { }

    ngOnInit(): void {
      this.getCheckins();
    }

    getCheckins(){
      this.checkinService.getCheckins().subscribe(checkin =>{
        console.log(checkin);
        this.checkins = checkin;
      }, err =>{
        console.log('Erro ao carregar os diárias', err);
      });
    }

    save(){
    this.checkinService.save(this.checkin).subscribe(checkin =>{
        this.checkin = new CheckinsModel();           //Limpa os campos.
        this.getCheckins();                         //Peenche a grade novamente.
      }, err =>{
        console.log('Erro ao salvar o hóspede', err);
      });
    }

    delete(checkin: CheckinsModel){
      this.checkinService.delete(checkin).subscribe(checkin =>{
        this.checkin = new CheckinsModel();           //Limpa os campos.
        this.getCheckins();                         //Peenche a grade novamente.
      }, err =>{
        console.log('Erro ao salvar o hóspede', err);
      });
    }
  }
