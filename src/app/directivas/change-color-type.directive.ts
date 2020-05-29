import {
  Directive,
  Renderer2,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appChangeColorType]',
})
export class ChangeColorTypeDirective {
  @Input() nameType: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.nameType);
    
    this.TextColor();
  }

  TextColor() {
    switch (this.nameType) {
      case 'grass':
        this.render.setStyle(this.el.nativeElement, 'background', '#25C94E');
        break;
      case 'poison':
        this.render.setStyle(this.el.nativeElement, 'background', '#5E2D88');
        break;
      case 'fire':
        this.render.setStyle(this.el.nativeElement, 'background', '#F34755');
        break;
      case 'flying':
        this.render.setStyle(this.el.nativeElement, 'background', '#91A3AF');
        break;
      case 'water':
        this.render.setStyle(this.el.nativeElement, 'background', '#1A51CD');
        break;
      case 'bug':
        this.render.setStyle(this.el.nativeElement, 'background', '#3B984D');
        break;
      case 'normal':
        this.render.setStyle(this.el.nativeElement, 'background', '#72545C');
        break;
      case 'fairy':
        this.render.setStyle(this.el.nativeElement, 'background', '#E91360');
        break;
      case 'ground':
        this.render.setStyle(this.el.nativeElement, 'background', '#6B4A1D');
        break;
      case 'electric':
        this.render.setStyle(this.el.nativeElement, 'background', '#E1E22C');
        break;
      case 'water':
        this.render.setStyle(this.el.nativeElement, 'background', '#1A51CD');
        break;
      case 'fighting':
        this.render.setStyle(this.el.nativeElement, 'background', '#EC6430');
        break;
      case 'psychic':
        this.render.setStyle(this.el.nativeElement, 'background', '#F61D90');
        break;
      case 'rock':
        this.render.setStyle(this.el.nativeElement, 'background', '#451A09');
        break;
    }
  }
}
