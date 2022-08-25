import { Component, Input, OnInit } from '@angular/core';
import { Communication } from 'types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() communication: Communication;
  constructor() {}

  ngOnInit(): void {}
}
