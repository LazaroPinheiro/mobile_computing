import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Activity } from '../models/activity';

@Injectable({ providedIn: 'root' })
export class BoredApiService {
    
    constructor(private _httpClient: HttpClient) {}   

    public fetchActivity(): Promise<Activity> {
        return lastValueFrom(this._httpClient.get<Activity>(`${environment.theBored.apiUrl}/activity`));
    }
}