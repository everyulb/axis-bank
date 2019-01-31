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
    // this.getAllComponents();
  }
  
  ngAfterViewInit() {
    document.querySelector('body').setAttribute("style", "background-color: #F7F7F7;");
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

  // getAllComponents(): void {
  //   this.client.getAllComponents().subscribe(
  //     res => console.log(res),
  //     err => console.error(err)
  //   );
  // }

}
