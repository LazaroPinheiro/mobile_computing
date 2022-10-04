import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { enableProdMode } from '@angular/core';
import { environment } from '@env/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
