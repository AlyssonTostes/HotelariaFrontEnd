  import { Component, OnInit } from '@angular/core';
  import { GuestService } from 'src/app/shared/service/guest.service';
  import { GuestsModel } from 'src/app/shared/model/guests.model';


  @Component({
    selector: 'app-list-guest',
    templateUrl: './list-guest.component.html',
    styleUrls: ['./list-guest.component.css']
  })
  export class ListGuestComponent implements OnInit {

  guest: GuestsModel = new GuestsModel();
    guests: Array<any> = new Array();

    constructor(private guestService: GuestService) { }

    ngOnInit(): void {
      this.getGuests();
    }

    getGuests(){
      this.guestService.getGuests().subscribe(guest =>{
        this.guests = guest;
      }, err =>{
        console.log('Erro ao carregar os hóspedes', err);
      });
    }

    save(){
    this.guestService.save(this.guest).subscribe(guest =>{
        this.guest = new GuestsModel();           //Limpa os campos.
        this.getGuests();                         //Peenche a grade novamente.
      }, err =>{
        console.log('Erro ao salvar o hóspede', err);
      });
    }

    delete(guest: GuestsModel){
      this.guestService.delete(guest).subscribe(guest =>{
        this.guest = new GuestsModel();           //Limpa os campos.
        this.getGuests();                         //Peenche a grade novamente.
      }, err =>{
        console.log('Erro ao salvar o hóspede', err);
      });
    }
  }
