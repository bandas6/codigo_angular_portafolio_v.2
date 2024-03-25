import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ExperienceComponent },
      { path: '', redirectTo: 'experience', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
