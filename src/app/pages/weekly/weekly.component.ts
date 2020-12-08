import { Component, OnInit } from '@angular/core';
import { Data,Service } from './weekly.service';


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss'],
  providers: [Service]
})
export class WeeklyComponent implements OnInit {
  dataSource: Data[];
  constructor(service:Service) { 
    this.dataSource = service.getData();
  }

  ngOnInit() {
  }

}
