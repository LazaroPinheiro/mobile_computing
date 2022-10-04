import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivitySuggesterComponent } from "@app/features/bored-zone-module/activity-suggester/activity-suggester.component";
import { BoredZoneRoutingModule } from "@app/features/bored-zone-module/bored-zone-routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";

/**
 * Landing module.
 */
@NgModule({
    bootstrap: [ActivitySuggesterComponent],
    imports: [BoredZoneRoutingModule, NativeScriptCommonModule, CommonModule],
    declarations: [ActivitySuggesterComponent],
    schemas:[NO_ERRORS_SCHEMA],
})
export class BoredZoneModule {}