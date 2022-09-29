import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})

export class LandingComponent {
	constructor(private _page: Page) {
		this._page.actionBarHidden = true;
	}
}