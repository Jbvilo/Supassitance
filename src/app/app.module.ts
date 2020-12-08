import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  SingleCardModule } from './layouts';
import { FooterModule } from './shared/components';
import {  ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { SideNavOuterToolbarModule } from './layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component';
import { DxTextBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SingleCardModule,
    FooterModule,
    AppRoutingModule,
    DxTextBoxModule,

  ],
  providers: [ ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
