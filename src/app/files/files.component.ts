import { Component, OnInit } from '@angular/core';
import { Http, Headers,HTTP_PROVIDERS } from "@angular/http";

import { AuthHelperService } from "../auth-helper.service"

@Component({
  moduleId: module.id,
  selector: 'app-files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.css'], 
  providers:[AuthHelperService,HTTP_PROVIDERS] 
})
export class FilesComponent implements OnInit {
  private files = [];
	constructor(http:Http, authHelper:AuthHelperService) {
		// Perform REST call into Microsoft Graph for files on OneDrive for Business
		http.get("https://graph.microsoft.com/v1.0/me/drive/root/children", {
			headers: new Headers({ "Authorization": "Bearer " + authHelper.access_token })
		})
		.subscribe(res => {
			// Check the response status before trying to display files
			if (res.status === 200)
				this.files = res.json().value;
			else
				alert("An error occurred calling the Microsoft Graph: " + res.status);
		});
	}
  ngOnInit() {
  }

}
