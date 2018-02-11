import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child1',
  templateUrl: './local-child1.component.html'
})
export class LocalChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public writeData():void{
    window.localStorage.setItem("json",JSON.stringify({name:'小菜鸟',age:25}));
    
  }
}
