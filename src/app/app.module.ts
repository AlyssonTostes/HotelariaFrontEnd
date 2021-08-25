import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ListGuestComponent } from './views/home/list-guest/list-guest.component';
import { MatTableModule } from '@angular/material/table';
import { GuestService } from './shared/service/guest.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { ListCheckinComponent } from './views/home/list-checkin/list-checkin.component';
import { ChenkinService } from './shared/service/chenkin.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListGuestComponent,
    ListCheckinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatTabsModule, 
    MatTableModule, 
    HttpClientModule, 
    FormsModule, 
    MatInputModule
  ],
  providers: [HttpClientModule, GuestService, ChenkinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
