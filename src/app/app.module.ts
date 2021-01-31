import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HazmatComponent } from './components/hazmat/hazmat.component';
import { SoapComponent } from './components/soap/soap.component';
import { PaperComponent } from './components/paper/paper.component';
import { DesinfectantComponent } from './components/desinfectant/desinfectant.component';


@NgModule({
  declarations: [
    AppComponent,
    HazmatComponent,
    SoapComponent,
    PaperComponent,
    DesinfectantComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
