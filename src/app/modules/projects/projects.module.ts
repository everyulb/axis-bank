import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
  ],
  declarations: [ProjectsListComponent, ProjectsBaseComponent, ProjectOverviewComponent]
})
export class ProjectsModule { }
