import { Component, OnInit } from '@angular/core';
import { Http, Headers,HTTP_PROVIDERS, Response } from "@angular/http";
import { Observable} from "rxjs/Rx";
//import "rxjs/*";

import { AuthHelperService } from "../auth-helper.service"

@Component({
  moduleId: module.id,
  selector: 'app-files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.css'], 
  providers:[AuthHelperService,HTTP_PROVIDERS] 
})
export class FilesComponent implements OnInit {
  private currentType : ResultType = ResultType.None;
	private info:string="";
	private resultJson = [];
	constructor(private http:Http, private authHelper:AuthHelperService) {
		//this.showGraphFiles("root");
		//this.showGraphMessages();
	}


	
	showGraphFiles(folder:string){
		this.currentType = ResultType.Files;
		folder = folder || "";
		if(folder=="") folder ="root";
		// Perform REST call into Microsoft Graph for files on OneDrive for Business
		this.getGraphHttp("https://graph.microsoft.com/v1.0/me/drive/"+ folder + "/children")
		.subscribe(res => {
			// Check the response status before trying to display files
			if (res.status === 200)
				this.resultJson = res.json().value;
			else
				alert("An error occurred calling the Microsoft Graph: " + res.status);
		});
	}
	
	showGraphMessages(){
		this.currentType = ResultType.Messages;
		this.getGraphHttp("https://graph.microsoft.com/v1.0/me/messages")
		.subscribe(res => {
			if (res.status === 200){
				this.resultJson = res.json().value;
				this.info = "Messages OK";
			} else
				alert("An error occurred calling the Microsoft Graph: " + res.status);
		}
		, error => {
			this.info="Error " + error;
		}
		);
	}	
	/*
	poddirektorij s id: -..
	https://graph.microsoft.com/v1.0/me/drive//items/01KU7MKUOBHC4XS3N5BFFLNPHA6ZHVPW23/children
	 */
	getGraphHttp(url:string) : Observable<Response>{
		// Perform REST call into Microsoft Graph for files on OneDrive for Business
		this.info = "dohvat " + url;
		return this.http.get(url, {
			headers: new Headers({ "Authorization": "Bearer " + this.authHelper.access_token })
		});
	}	
	
	resultFiles(){
		return this.resultJson;
	}
	
	ngOnInit() {
  }

	show(){
		//this.info=this.authHelper.access_token;
		this.showGraphFiles("items/01KU7MKUOBHC4XS3N5BFFLNPHA6ZHVPW23");
	}
}

enum ResultType {
	None = 0,
	Files = 1,
  Messages = 2
}	 