import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from "../auth-helper.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'], 
  providers:[AuthHelperService]
})
export class LoginComponent implements OnInit {

	constructor(private authHelper: AuthHelperService) {
	}
	
	login() {
		// Use the AuthHelper to start the login flow
		this.authHelper.login();
	}
  
  ngOnInit() {
  }

}
