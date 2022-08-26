import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'map', component: MapPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
