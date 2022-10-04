import { Routes } from "@angular/router";
import { ImageViewerComponent } from "@app/features/image-viewer/image-viewer.component";
import { LandingComponent } from "@app/features/landing/landing.component";

export const AppRoutes: Routes = [
    { 
        path: '', 
        redirectTo: 'landing', 
        pathMatch: 'full' 
    },

    {
        path: 'landing',
        component: LandingComponent,
    },
    
    {
        path: 'image-viewer',
        component: ImageViewerComponent,
        children: [
        ]
    },


    {
        path: 'bored-zone',
        loadChildren: () => import('@app/features/bored-zone-module/bored-zone.module').then(m => m.BoredZoneModule)
    }
]