import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ClientService } from '../../../../shared/services/client.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router, 
    // private client: ClientService
    ) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    document.querySelector('body').setAttribute("style", "background-color: #F7F7F7;");
  }

  ngOnDestroy() {
    document.querySelector('body').setAttribute("style", "background-color: #fff;");
  }

  login(event: Event): void {
    console.log('Inside Login');
    event.preventDefault();
    this.email = this.email.trim();
    this.password = this.password.trim();
    if(this.email === "admin@everyulb.com" && this.password === "everyulb"){
      this.router.navigate(['projects']);
    } else {
      alert('Wrong Credentials');
    }
  }

}
