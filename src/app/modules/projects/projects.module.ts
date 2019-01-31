import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule, GoogleMapsAPIWrapper,  KmlLayerManager } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF16wKOlIRqQOAxtvR7Gk2Oobvpb_BfDk'
    })
  ],
  declarations: [ProjectsListComponent, ProjectsBaseComponent, ProjectOverviewComponent, MapComponent],
  providers: [GoogleMapsAPIWrapper,  KmlLayerManager]
})
export class ProjectsModule { }
