import { Routes } from '@angular/router';
import { ActivitySuggesterComponent } from '@app/features/bored-zone-module/activity-suggester/activity-suggester.component';

/**
 * Bored zone routes.
 */
export const BoredZoneRoutes: Routes = [
    { 
        path: '', 
        redirectTo: 'activity-sugester', 
        pathMatch: 'full' 
    },


    { 
        path: 'activity-sugester', 
        component: ActivitySuggesterComponent 
    },
];
