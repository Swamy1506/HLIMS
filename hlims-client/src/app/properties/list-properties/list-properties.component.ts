import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.scss']
})
export class ListPropertiesComponent implements OnInit {

  properties = [];
  constructor(private propService: PropertyService) { }

  ngOnInit() {

    this.getAllLoans();
  }

  getAllLoans() {
    this.propService.getAllProperties().subscribe(res => {
      this.properties = res.body;
    });
  }
}
