import { NgModule } from '@angular/core'
import { AppRoutes } from '@app/app.routes'
import { NativeScriptRouterModule } from '@nativescript/angular'

/**
 * App routing module.
 */
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(AppRoutes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
