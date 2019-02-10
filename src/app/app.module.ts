import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//custom modules
import { LoginModule } from './modules/login/login.module';
import { ProjectsModule } from './modules/projects/projects.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
