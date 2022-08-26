import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ValidationError } from 'yup';
import { communicationSchema } from './../../../schemas/index';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('owner_name') owner_name: ElementRef;
  @ViewChild('owner_email') owner_email: ElementRef;
  @ViewChild('owner_cpf') owner_cpf: ElementRef;
  @ViewChild('type') type: ElementRef;
  @ViewChild('event') event: ElementRef;
  @ViewChild('date') date: ElementRef;
  errorList: string[] = [''];
  constructor() {}
  async handleSubmit() {
    const owner_name = this.owner_name.nativeElement.value;
    const owner_email = this.owner_email.nativeElement.value;
    const owner_cpf = this.owner_cpf.nativeElement.value;
    const type = this.type.nativeElement.value;
    const event = this.event.nativeElement.value;
    const date = this.date.nativeElement.value;
    try {
      this.errorList = [''];
      const answer = await communicationSchema.validate(
        {
          owner_name,
          owner_email,
          owner_cpf,
          type,
          date,
          event,
        },
        { abortEarly: false }
      );
      localStorage.setItem('requestInfo', JSON.stringify(answer));
      window.location.replace('/map');
    } catch (error) {
      if (error instanceof ValidationError) {
        this.errorList = error.errors;
      }
    }
  }

  ngOnInit(): void {}
}
