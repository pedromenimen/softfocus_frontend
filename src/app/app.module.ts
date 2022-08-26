import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

@NgModule({
  declarations: [AppComponent, MapComponent, DashboardComponent, CardComponent, FormComponent, MapPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
