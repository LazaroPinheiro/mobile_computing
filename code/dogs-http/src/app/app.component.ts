import { Component } from '@angular/core';
import { NetworkMonitorService } from '@app/core/services/network-monitor.service';

/**
 * App component.
 */
@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
	/**
	 * App component constructor.
	 * @param {NetworkMonitorService} _networkMonitorService service that monitors the status of the network connection.
	 */
	constructor(private _networkMonitorService: NetworkMonitorService) {}
	
	/**
     * Gets whether there is any established network connection.
     */
	get hasNetworkConnection(): boolean {
		return this._networkMonitorService.hasNetworkConnection;
	}
}
