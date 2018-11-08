import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[searchRainbow]'
})
export class RainbowDirective {
    possibleColors = [
        'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
        'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    ];

    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;

    @HostListener('keydown', ['$event']) 
    newColor() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.borderColor = this.possibleColors[colorPick];
    }
}