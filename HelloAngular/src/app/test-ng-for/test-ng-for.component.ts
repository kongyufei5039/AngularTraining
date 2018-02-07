import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test-ng-for',
    templateUrl: './test-ng-for.component.html',
    styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit{
    public fruits:Array<any>=[
        {name:"苹果"},
        {name:"橙子"},
        {name:"芒果"},
        {name:"樱桃"}
    ]

    constructor(){}

    ngOnInit(){}
}