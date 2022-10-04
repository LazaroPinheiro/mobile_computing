import { Component } from '@angular/core';
import { Activity } from '@app/core/models/activity';
import { BoredApiService } from '@app/core/services/bored-api.service';
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
	activity: Activity;

	constructor(private _routerExtensions: RouterExtensions, private _boredApiService: BoredApiService) { }

	goBack(): void {
		this._routerExtensions.back();
	}

	goToActivityLink(): void {
		Utils.openUrl(this.activity.link);
	}

	fetchActivity(): void {
		this.isLoading = true;
		this._boredApiService.fetchActivity()
		.then((activity: Activity) => {
			this.activity = activity;
		})
		.finally(() => {
			this.isLoading = false;
		})
	}
}