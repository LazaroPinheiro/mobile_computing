import { Injectable } from "@angular/core";
import { networkConnectionTypeMonitoring } from "@app/helpers/utils/system.utils";
import { Connectivity } from "@nativescript/core";
import { distinctUntilChanged, map } from "rxjs";

/**
 * Network monitor service.
 * Description: Service that monitors the status of the network connection.
 */
@Injectable({ providedIn: 'root' })
export class NetworkMonitorService {
    private _hasNetworkConnection: boolean = true;

    /**
     * Network monitor service constructor.
     */
    constructor() {
        this.startMonitoring();
    }

    /**
     * Gets whether there is any established network connection.
     */
    public get hasNetworkConnection(): boolean {
        return this._hasNetworkConnection;
    }
    
    /**
     * Monitor the network connection.
     */
    public startMonitoring(): void {
        networkConnectionTypeMonitoring()
        .pipe(
            map((connectionType: number) => {
                return connectionType == Connectivity.connectionType.wifi || connectionType == Connectivity.connectionType.mobile || 
                connectionType == Connectivity.connectionType.ethernet || connectionType == Connectivity.connectionType.vpn;
            }),
            distinctUntilChanged(),
        ).subscribe((connectionStatus: boolean) => {
            this._hasNetworkConnection = connectionStatus;
        })
    }
}