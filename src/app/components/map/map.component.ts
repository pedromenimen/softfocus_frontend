import { Component, OnInit } from '@angular/core';
import { communicationSchemaWithCoordinates } from 'src/schemas';
import { Coord, RequestFields } from 'types';
import { ValidationError } from 'yup';
import { ApiServicesService } from './../../services/api-services.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  requestData: RequestFields;
  constructor(private apiService: ApiServicesService) {}
  coord: Coord;
  hasError: boolean
  async handleSubmit() {
    this.hasError = false;
    console.log(this.requestData);
    try {
      const answer = await communicationSchemaWithCoordinates.validate(
        this.requestData,
        { abortEarly: false }
      );
      this.apiService.createCommunication(answer).subscribe({
        next: () => {
          window.location.replace('');
        },
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        this.hasError = true;
      }
    }
  }
  getCoords() {
    this.requestData.latitude = this.apiService.coord.lat;
    this.requestData.longitude = this.apiService.coord.lng;
  }
  ngOnInit(): void {
    this.apiService.initializeMap();
    this.requestData = JSON.parse(localStorage.getItem('requestInfo')!);
  }
}
