import { Component, NgModule, Input, Output, EventEmitter, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxPopupModule } from 'devextreme-angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import {SideNavigationMenuComponent} from '../side-navigation-menu/side-navigation-menu.component'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable()
export class HeaderComponent implements AfterContentInit{
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  @Input()
  currentItem:string;

  @Input()
  actualpage: string;
 
  isPopupVisible: boolean = false;
   maDate: Date = new Date();
  hour= this.maDate.getDate() + '/' + ((this.maDate.getMonth() + 1)) + '/' + this.maDate.getFullYear()+ ' ' + this.maDate.getHours() + ':' + this.maDate.getMinutes()+ ':' + this.maDate.getSeconds();

  



  sidenav: SideNavigationMenuComponent;
  constructor( private router: Router) { }
  ngAfterContentInit() {

  this.currentItem="Tableau de Bord"
     setInterval(() => {
      this.maDate=new Date();
      this.hour= this.maDate.getDate() + '/' + ((this.maDate.getMonth() + 1)) + '/' + this.maDate.getFullYear()+ '  ' + this.maDate.getHours() + ':' + this.maDate.getMinutes()+ ':' + this.maDate.getSeconds();
     
    }, 1000);

 this.router.events.subscribe(()=>{
  
 console.log(this.router.url)
if(this.router.url=="/pages/home"){
  this.currentItem="Tableau de bord"
}
else if(this.router.url=="/pages/links"){
  this.currentItem="Supervision par heure"
}
else if(this.router.url=="/pages/weekly"){
  this.currentItem="Supervision par jour"
}
else if(this.router.url=="/pages/monthly"){
  this.currentItem="Supervision par mois"
}
else if(this.router.url=="/pages/data"){
  this.currentItem="Base de données"
}


 }
 
 )
  }




  toggleMenu = () => {
    this.menuToggle.emit();
  }

 
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxPopupModule,
    DxToolbarModule,
  ],
  declarations: [ HeaderComponent ,],
  exports: [ HeaderComponent ],
  
})
export class HeaderModule { }
