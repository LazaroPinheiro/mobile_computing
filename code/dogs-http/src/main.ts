import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { enableProdMode } from '@angular/core';
import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

if (environment.production) {
  enableProdMode();
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
