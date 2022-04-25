import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppNgrxModule } from './app-ngrx.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, AppNgrxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
