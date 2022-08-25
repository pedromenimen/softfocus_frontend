import { Component, OnInit } from '@angular/core';
import { Coord } from 'types';
import { ApiServicesService } from './../../services/api-services.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(private apiService: ApiServicesService) {}
  coord: Coord;
  getCoords() {
    console.log(this.apiService.coord);
  }
  ngOnInit(): void {
    this.apiService.initializeMap();
  }
}
