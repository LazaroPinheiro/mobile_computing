import { NgModule } from '@angular/core';
import { BoredZoneRoutes } from '@app/features/bored-zone-module/bored-zone.routes';
import { NativeScriptRouterModule } from '@nativescript/angular';

/**
 * Landing routing module.
 */
@NgModule({
  imports: [NativeScriptRouterModule.forChild(BoredZoneRoutes)],
  exports: [NativeScriptRouterModule],
})
export class BoredZoneRoutingModule {}