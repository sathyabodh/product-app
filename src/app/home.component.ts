import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/filter";

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    @Input()
    title : string = "Home";

    @Input()
    branches : string[] = [];

    source: Subject<number> = new Subject<number>();
    
    constructor(private elementRef : ElementRef) { }

    ngOnInit() { 
        this.source
        .filter((n:number)=> n > 0.5)
        .subscribe((n:number) =>{
            console.log("Subs", n);
        },
        (error:any)=>{
            console.log("got error", error);
        }
        );

        // $("p").text("jquery");

        console.log(this.elementRef);
        $(this.elementRef.nativeElement).find("p").text("jquery changes it");
    }

    generate(){
        this.source.next(Math.random());
    }

    complete(){
        this.source.complete();
        console.log("subject is completed");
    }
    error(){
        this.source.error("crashed error");
    }


}