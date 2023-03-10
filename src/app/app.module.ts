import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainpokemonsComponent } from './mainpokemons/mainpokemons.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpokemonsComponent,
    MainnavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
