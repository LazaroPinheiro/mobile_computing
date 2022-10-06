import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

/**
 * Landing component
 */
@Component({
	moduleId: module.id,
	selector: 'landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})

export class LandingComponent {

	/**
	 * Landing component constructor.
	 * @param {Page} _page current page for hide the action bar. 
	 */
	constructor(private _page: Page) {
		this._page.actionBarHidden = true;
	}
}