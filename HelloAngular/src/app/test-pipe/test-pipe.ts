import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'test-pipe',
    templateUrl: './test-pipe.html',
    styleUrls: ['./test-pipe.css']
})
export class TestPipeComponent implements OnInit{
    public currentTime: Date = new Date();

    constructor(){}

    ngOnInit(){
        window.setInterval(function(){
            () => {this.currentTime=new Date()}
        }, 1000);
    }
}