import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {
  @Input('appForEm') numbers: number[] = [];

  constructor(private container: ViewContainerRef, 
              private template: TemplateRef<any>) {}

  ngOnInit(): void {
    for( let numbers of this.numbers ){
      this.container.createEmbeddedView(this.template);
    }
  }

}
