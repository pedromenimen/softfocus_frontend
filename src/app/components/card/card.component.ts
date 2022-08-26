import { Component, Input, OnInit } from '@angular/core';
import { Communication } from 'types';
import { ApiServicesService } from './../../services/api-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() communication: Communication;
  constructor(private apiService: ApiServicesService) {}
  deleteCommunication() {
    this.apiService.deleteCommunication(this.communication.id).subscribe({
      next: () => window.location.reload(),
      error: (json) => console.log(json),
    });
  }
  ngOnInit(): void {}
}
