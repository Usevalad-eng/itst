import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwitComponent } from './twit/twit.component';
import { Twit2Component } from './twit2/twit2.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitComponent,
    Twit2Component
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
