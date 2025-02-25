import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreListComponent } from '../itineraries/pages/explore/components/explore-list/explore-list.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'itineraries/explore', component: ExploreListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
