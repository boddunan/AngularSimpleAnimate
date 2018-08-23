import {Directive, ElementRef, Renderer2, HostListener, Input, AfterViewInit} from '@angular/core';

@Directive({
	selector: '[simpleAnimate]'
})
export class AnimateDirective implements AfterViewInit {
	
	@Input('simpleAnimate') animate: string;
	expanded: boolean = true;
  	target: any;
  	initialHeight: Number;

	constructor(private el: ElementRef, private renderer: Renderer2){}

  	ngAfterViewInit(): void {
		
    		this.target = document.querySelector('#'+this.el.nativeElement.getAttribute('target'));
    		this.initialHeight = this.target.clientHeight + 20;
    		this.expanded = false;

		this.renderer.setStyle(this.target, 'overflow', 'hidden');
    		this.renderer.setStyle(this.target, 'height', '0px');
		this.renderer.setStyle(this.target, 'transitionProperty', 'height');
		this.renderer.setStyle(this.target, 'transitionDuration', '1s');
		this.renderer.setStyle(this.target, 'transitionTimingFunction', this.animate || 'ease-in-out');
  	}
	
	@HostListener('click', ['$event.target']) onClick() {
		
		if( !this.expanded ) {
			this.renderer.setStyle(this.target, 'height', this.initialHeight+'px');
		} else {
			this.renderer.setStyle(this.target, 'height', '0px');
		}
		
		this.expanded = !this.expanded;
	}
}
