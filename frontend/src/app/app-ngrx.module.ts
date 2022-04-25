import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { externalModules } from './build-specifics';
import { reducers } from './state';
// This will be the configuration for all of our NGRX Stuff. This will have to be imported into the AppModule like we do with the routing module
@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    externalModules,
  ],
  exports: [],
})
export class AppNgrxModule {}
