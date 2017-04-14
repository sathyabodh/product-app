import { Directive, Input, ElementRef, Renderer, OnInit, HostListener } from "@angular/core";

@Directive({
    selector : "[highlight]"
})

export class HighlightDirective implements OnInit {
 
    @Input("highlight")
    color: string = "greenyellow";

    constructor(private elementRef : ElementRef, private renderer: Renderer){
        console.log("Directive");
    }

    ngOnInit(): void {
        this.setColor("green");
    }

    setColor(color: string){
        this.renderer.setElementStyle(
            this.elementRef.nativeElement, 
            "background", color);
    }

    @HostListener("mouseenter")
    mouseEnter(){
        this.setColor(this.color);
    }

    @HostListener("mouseleave")
    mouseLeave(){
        this.setColor("");
    }

}