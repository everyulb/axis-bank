import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor(public router: Router) { }
  projects: Array<any> = [
    {
      id: 12,
      name: 'Namami gange rejuvination',
      location: 'Uttarakhand',
      phase: 'survey',
      dueDate: '6 Jan 209'
    }
  ];

  ngOnInit() {
  }

  openProject(id: number): void {
    this.router.navigate(['project-overview']);
  }

}
