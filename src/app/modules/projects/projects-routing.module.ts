import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
