import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { LoadingScreenModule } from '@app/core/components/loading-screen/loading-screen.module';
import { ActivitySuggesterComponent } from "@app/features/bored-zone-module/activity-suggester/activity-suggester.component";
import { BoredZoneRoutingModule } from "@app/features/bored-zone-module/bored-zone-routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";

/**
 * Bored zone module.
 */
@NgModule({
    bootstrap: [ActivitySuggesterComponent],
    imports: [BoredZoneRoutingModule, NativeScriptCommonModule, CommonModule, LoadingScreenModule],
    declarations: [ActivitySuggesterComponent],
    schemas:[NO_ERRORS_SCHEMA],
})
export class BoredZoneModule {}