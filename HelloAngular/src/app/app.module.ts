import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
