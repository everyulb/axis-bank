import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsBaseComponent
  },
  {
    path: 'project-overview',
    component: ProjectOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
