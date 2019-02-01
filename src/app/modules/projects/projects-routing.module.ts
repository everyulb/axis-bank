import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsBaseComponent
  },
  {
    path: 'project-overview',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
