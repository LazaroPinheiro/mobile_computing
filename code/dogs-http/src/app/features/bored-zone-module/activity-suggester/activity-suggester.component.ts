import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	moduleId: module.id,
	selector: 'activity-suggester',
	templateUrl: './activity-suggester.component.html',
	styleUrls: ['./activity-suggester.component.css']
})

export class ActivitySuggesterComponent {
	constructor(private _routerExtensions: RouterExtensions) { }

	goBack(): void {
		this._routerExtensions.back();
	}
}