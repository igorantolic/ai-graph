import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from "@angular/http";
import { LoginComponent } from "./login";
import { FilesComponent } from "./files";
import { AiAdalComponent } from "./ai-adal";
import { AuthHelperService } from "./auth-helper.service";

@Component({
  moduleId: module.id,
  selector: 'ai-graph-app',
  templateUrl: 'ai-graph.component.html',
  styleUrls: ['ai-graph.component.css'],	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS, LoginComponent, FilesComponent, AuthHelperService]
})
// Configure the routes for the app
@Routes([
	{ /*name: "Login",*/ component: LoginComponent, path: "/login" },
	{ /*name: "Files",*/ component: FilesComponent, path: "/files" },
  { /*name: "Files",*/ component: AiAdalComponent, path: "/a" }  
])
export class AiGraphAppComponent {
  public  title="";
	constructor(
    router:Router
  , auth:AuthHelperService
  ) {
		// Route the user to a view based on presence of access token
		if (auth.access_token !== null) {
			// access token exists...display the users files
			router.navigate(["/files"]);
		}
		else {
			// access token doesn't exist, so the user needs to login
		 	router.navigate(["/login"]);
      // router.navigate(["/a"]);
		}
	}  
}


