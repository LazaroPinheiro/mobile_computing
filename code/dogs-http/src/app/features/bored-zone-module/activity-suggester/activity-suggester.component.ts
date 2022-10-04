import { Component } from '@angular/core';
import { Activity } from '@app/core/models/activity';
import { RouterExtensions } from '@nativescript/angular';
import { Utils } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'activity-suggester',
	templateUrl: './activity-suggester.component.html',
	styleUrls: ['./activity-suggester.component.css']
})

export class ActivitySuggesterComponent {
	isLoading: boolean = false;
	activity: Activity = {
		"name": "Learn Express.js",
		"type": {
			"tag": "education",
			"name": "Education",
		},
		"accessibility": 0.25,
		"participants": 1,
		"price": 0.1,
		"link": "https://expressjs.com/"
	} 

	constructor(private _routerExtensions: RouterExtensions) { }

	goBack(): void {
		this._routerExtensions.back();
	}

	goToActivityLink(): void {
		Utils.openUrl(this.activity.link);
	}
}