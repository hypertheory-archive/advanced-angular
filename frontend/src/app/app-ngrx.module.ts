import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';

@NgModule({
  imports: [StoreModule.forRoot(reducers), EffectsModule.forRoot([])],
  exports: [],
})
export class AppNgrxModule {}
