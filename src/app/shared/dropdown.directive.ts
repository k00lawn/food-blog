import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @HostBinding('class.open') isOpen = false;

  // constructor(private elRef: ElementRef) { }

  // // @HostListener('click') toggleDown () {
  // //   this.isOpen = false;
  // // }
  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  // } 

  constructor(private _el: ElementRef) { }

  @HostBinding('class.show') isOpen = false;
  
  @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')
  }
  
}
