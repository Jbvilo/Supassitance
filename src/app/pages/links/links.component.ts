import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from './links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  providers: [Service]
})
export class LinksComponent implements OnInit {
  @ViewChild('myCarousel', {static: false}) myCarousel;

  links: any;
  value=Array(24).fill(4);
  alert(){

    alert();
  }


  constructor(service: Service) {
    this.links =  service.getLinks();
   }

  ngOnInit() {
    
  }

}
