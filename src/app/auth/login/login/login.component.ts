import { Component, OnInit} from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(public authservice: AuthServiceService, private router: Router) {}


  //"quick & dirty" method LMAO
  option: string = this.router.url;

  ngOnInit(): void {}

  onLogin(loginform: NgForm){
      if(loginform.invalid)
        {
          return;
        }
      if(this.option == '/login'){
        this.authservice.login(loginform.value.enterdusername,loginform.value.enteredpassword)
      }
  }
}
