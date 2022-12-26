import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LondonComponent } from './london/london.component';
import { ParisComponent } from './paris/paris.component';
import { TokyoComponent } from './tokyo/tokyo.component';

const routes: Routes = [
  {
    path: 'london',
    component: LondonComponent,
  },
  {
    path: 'paris',
    component: ParisComponent,
  },
  {
    path: 'tokyo',
    component: TokyoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
