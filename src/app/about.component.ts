import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    @Input("title2")
    title : string = "About";

    members : string[] = ['M1', 'M2', 'M3'];
    pincode : number = 560040;
    likes : number = 0;
    address : any ;

    constructor() { }

    ngOnInit() { }

    showMembers : boolean = true;

    toggleMembers() : void{
        this.showMembers = !this.showMembers;
    }

    like(){
        this.likes ++ ;
    }

    addMembers(name : string){
        this.members.push(name);
    }
}