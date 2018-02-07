import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-safe-nav',
  templateUrl: './test-safe-nav.component.html'
})
export class TestSafeNavComponent implements OnInit {
  public currentRace:any=null;//{name:'神族'};

  constructor() { }

  ngOnInit() {
  }

}
