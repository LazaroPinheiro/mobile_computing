import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityNames } from '@app/helpers/enumerations/ActivityNames';
import { lastValueFrom, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Activity } from '../models/activity';

@Injectable({ providedIn: 'root' })
export class BoredApiService {
    
    constructor(private _httpClient: HttpClient) {}   

    public fetchActivity(): Promise<Activity> {
        return lastValueFrom(
            this._httpClient.get< {
                activity: string, 
                accessibility: number, 
                type: string, 
                participants: number,
                price: number, 
                link: string
            } >(`${environment.theBored.apiUrl}/activity`)
            .pipe(
                map(result => {
                    return <Activity> {
                        name: result.activity,
                        type: {
                            tag: result.type,
                            name: ActivityNames[(result.type.toUpperCase())]
                        },
                        participants: result.participants,
                        price: result.price,
                        accessibility: result.accessibility,
                        link: (result.link == '' ? null : result.link)
                    }
                })
            )
        );
    }
}