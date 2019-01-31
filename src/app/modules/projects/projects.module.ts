import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';

//modules
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatTabsModule
  ],
  declarations: [ProjectsListComponent, ProjectsBaseComponent]
})
export class ProjectsModule { }
