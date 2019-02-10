import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsBaseComponent } from './pages/projects-base/projects-base.component';
import { MapComponent } from './pages/map/map.component';
import { AgmCoreModule, GoogleMapsAPIWrapper,  KmlLayerManager } from '@agm/core';
import { MapDetailsComponent } from './components/map-details/map-details.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF16wKOlIRqQOAxtvR7Gk2Oobvpb_BfDk'
    }),
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [ProjectsListComponent, ProjectOverviewComponent, ProjectsBaseComponent, MapComponent, MapDetailsComponent],
  providers: [GoogleMapsAPIWrapper,  KmlLayerManager, {provide: MatDialogRef, useValue: {}}],
})
export class ProjectsModule { }
