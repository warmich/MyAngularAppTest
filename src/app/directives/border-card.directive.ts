import { Directive, ElementRef, HostListener, Input } from "@angular/core";

 
@Directive({
  selector: '[devBorderCard]'
})
export class BorderCardDirective {

	initialColor: string = '#f5f5f5'
	defaultColor: string = '#009688'
	defaultHeight: number = 180

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor)
        this.setHeight(this.defaultHeight)
    }

	@Input('devBorderCard') borderColor!: string

	@HostListener('mouseenter') onMouseEnter(){
		this.setBorder(this.borderColor || this.defaultColor)
	}

	@HostListener('mouseleave') onMouseLeave(){
		this.setBorder(this.initialColor)
	}
 
    private setBorder(color: string) {
        let border = 'solid 4px ' + color
        this.el.nativeElement.style.border = border
    }
 
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px'
    }
}