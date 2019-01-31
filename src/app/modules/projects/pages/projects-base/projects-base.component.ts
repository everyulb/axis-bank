import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-base',
  templateUrl: './projects-base.component.html',
  styleUrls: ['./projects-base.component.css']
})
export class ProjectsBaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.router.navigate(['login']);
  }

}
