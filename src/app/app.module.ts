import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgMultiSelectDropDownModule } from '../../projects/multi-select/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
