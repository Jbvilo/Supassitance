import { Component, OnInit } from '@angular/core';
import { Data,Service} from './monthly.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss'],
  providers: [Service]
})
export class MonthlyComponent implements OnInit {

  dataSource: Data[];



    constructor(service: Service) {

      this.dataSource = service.getData();
    
    }



  ngOnInit() {
  }


  
}
