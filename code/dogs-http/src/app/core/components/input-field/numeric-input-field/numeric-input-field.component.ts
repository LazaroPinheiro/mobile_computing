import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'numeric-input-field',
	templateUrl: './numeric-input-field.component.html',
	styleUrls: ['./numeric-input-field.component.css']
})

export class NumericInputFieldComponent {
    @Input() hint = "";
    @Input() maxLength: number = Number.POSITIVE_INFINITY;
	
	constructor() { }
}