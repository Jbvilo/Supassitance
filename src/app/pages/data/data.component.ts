import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Service } from './data.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  providers: [Service]
})
export class DataComponent implements OnInit {
  customers: Customer[];
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
  selectedRowIndex = -1;
  isPopupVisible: boolean = false;


  constructor(service: Service) {
    this.customers =  service.getCustomers();
   }

  ngOnInit() {
  }

  addRow() {
   
}

deleteRow() {
  this.grid.instance.deleteRow(this.selectedRowIndex);
  this.grid.instance.deselectAll();
}




}
