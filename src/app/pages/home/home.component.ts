import { Component, OnInit, ViewChild } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { PopulationByRegion, Service, Customer } from './home.service';
import { CountryInfo, EnergyDescription } from './home.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { Data } from '../monthly/monthly.service';
import { Data2 } from '../home/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [Service]
})
export class HomeComponent implements OnInit {
  pipe: any = new PercentPipe("en-US");
  dataSource: Data[];
  dataSource2: Data2[];
  populationByRegions: PopulationByRegion[];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  downloads: string[];
  customers: Customer[];
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
  selectedRowIndex = -1;
  chartcolor="#47AC53";
  

  constructor(service: Service,private router:Router) {
      this.populationByRegions = service.getPopulationByRegions();
      this.countriesInfo = service.getCountriesInfo();
      this.energySources = service.getEnergySources();
      this.customers =  service.getCustomers();
      this.dataSource = service.getData();
      this.dataSource2 = service.getData2();
  }

  customizeTooltip = (arg: any) => {
      return {
          text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
      };
  }

naviguate(link){
  if(link == 'data'){
  this.router.navigate(["/pages/data"])
  }
  else if( link == 'monthly'){
    this.router.navigate(["/pages/monthly"])

  }
  else if( link == 'day'){
    this.router.navigate(["/pages/links"])
  }
 
}


currentstat(state){
  if (state=='ok'){
    alert()
 this.chartcolor=="green"
  }
  else if(state == 'ko'){
    alert()
    
 this.chartcolor=="red";

  }
}

  ngOnInit() {
   this.currentstat;
  }
  deleteRow() {
    this.grid.instance.deleteRow(this.selectedRowIndex);
    this.grid.instance.deselectAll();
  }
}
