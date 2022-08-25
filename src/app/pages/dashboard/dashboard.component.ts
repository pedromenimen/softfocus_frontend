import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Communication } from 'types';
import { ApiServicesService } from './../../services/api-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private apiServices: ApiServicesService) {}
  communicationList: Communication[];
  filteredCommunicationList: Communication[];
  @ViewChild('cpfFilter') cpfFilter: ElementRef;
  ngOnInit(): void {
    this.apiServices.getCommunicationList().subscribe({
      next: (json) => {
        this.communicationList = json.results;
        this.filteredCommunicationList = json.results;
      },
      error: () => {},
      complete: () => {},
    });
  }
  setFilteredCommunicationList() {
    this.apiServices
      .getCommunicationList(this.cpfFilter.nativeElement.value)
      .subscribe({
        next: (json) => (this.filteredCommunicationList = json.results),
      });
  }
}
