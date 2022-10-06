import { Component } from '@angular/core';
import { NetworkMonitorService } from '@app/core/services/network-monitor.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private _networkMonitorService: NetworkMonitorService) {}
    
    get hasNetworkConnection(): boolean {
        return this._networkMonitorService.hasNetworkConnection;
    }
}
