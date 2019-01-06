import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[searchRainbow]'
})
export class RainbowDirective {
    possibleColors = [
        'black', 'darkred', 'indigo', 'darkolivegreen', 
        'maroon', 'olive', 'brown', 'watercourse' 
    ];

    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;

    @HostListener('keydown', ['$event']) 
    newColor() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.borderColor = this.possibleColors[colorPick];
    }
}