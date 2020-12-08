import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { DataComponent } from './pages/data/data.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxSpeedDialActionModule, DxPieChartModule, DxButtonModule, DxTextBoxModule, DxChartModule, DxPopupModule, DxTemplateModule, DxDropDownButtonModule, DxToolbarModule } from 'devextreme-angular';
import { MonthlyComponent } from './pages/monthly/monthly.component';
import { WeeklyComponent } from './pages/weekly/weekly.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

const routes: Routes = [
  {
    path: 'pages/weekly',
    component: WeeklyComponent,
   
  },
  {
    path: 'pages/monthly',
    component: MonthlyComponent,

  },
  {
    path: 'pages/data',
    component: DataComponent,

  },
  {
    path: 'pages/links',
    component: LinksComponent,
 
  },
  {
    path: 'pages/home',
    component: HomeComponent,
  
  },
  {
    path: '**',
    redirectTo: 'pages/home',
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,DxDataGridModule,DxSpeedDialActionModule,DxTemplateModule , DxPieChartModule, DxButtonModule,DxTextBoxModule,DxChartModule,DxPopupModule, DxDropDownButtonModule,  DxToolbarModule, IvyCarouselModule],
  providers: [],
  exports: [RouterModule],
  declarations: [HomeComponent, LinksComponent, DataComponent, MonthlyComponent, WeeklyComponent]
})
export class AppRoutingModule { }
