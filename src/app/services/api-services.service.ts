import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Observable } from 'rxjs';
import { CommunicationList, Coord, MapClickEvent } from 'types';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private http: HttpClient) {}
  coord: Coord;

  initializeMap() {
    let brazilCoord: Coord = { lat: -14.235004, lng: -51.925282 };
    let markers: google.maps.Marker[] = [];
    let coord: Coord = { lat: 0, lng: 0 };
    let loader = new Loader({
      apiKey: 'AIzaSyAEE6d-QKBZZ3bbNkVMBPaEE3Er72pO2fc',
    });
    loader.load().then(() => {
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: brazilCoord,
          zoom: 3,
        }
      );
      this.http
        .get<CommunicationList>(
          `https://softfocus.herokuapp.com/api/communication/places/`
        )
        .subscribe({
          next: (json) => {
            json.results.map((communication) => {
              new google.maps.Marker({
                position: {
                  lat: communication.latitude,
                  lng: communication.longitude,
                },
                map: map,
              });
            });
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {},
        });
      google.maps.event.addListener(map, 'click', (event: MapClickEvent) => {
        if (markers.length > 0) {
          markers[0].setMap(null);
          markers.pop();
        }
        const marker = new google.maps.Marker({
          position: event.latLng,
          map: map,
        });
        coord.lat = marker.getPosition()!.lat();
        coord.lng = marker.getPosition()!.lng();
        this.coord = coord;
        markers.push(marker);

        map.panTo(event.latLng);
        return coord;
      });
    });
  }
  getCommunicationList(cpf: string = ''): Observable<CommunicationList> {
    if (cpf.length > 0) {
      return this.http.get<CommunicationList>(
        `https://softfocus.herokuapp.com/api/communication/${cpf}/`
      );
    } else {
      return this.http.get<CommunicationList>(
        `https://softfocus.herokuapp.com/api/communication/`
      );
    }
  }
}
