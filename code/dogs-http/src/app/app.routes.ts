import { Routes } from "@angular/router";
import { LandingComponent } from "@app/features/landing/landing.component";

export const AppRoutes: Routes = [
    { 
        path: '', 
        redirectTo: 'landing', 
        pathMatch: 'full' 
    },

    {
        path: 'landing',
        component: LandingComponent
    }
]