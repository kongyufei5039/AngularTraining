import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LocalChild1Component } from './local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './local-storage/local-child2/local-child2.componen';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child-1/child-1.component';
import { Child2Component } from './brother/child-2/child-2.component';
import { EventBusService } from './brother/service/event-bus.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    ChildComponent,
    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component,
    BrotherComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
