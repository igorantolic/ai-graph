import { Component, OnInit } from '@angular/core';
//import { AuthenticaAiAdaltionContext } from 'adal-angular/lib/adal';
//import { AuthenticaAiAdaltionContext } from 'adal-angular/lib/adal';
// import {AuthenticationContext} from 'adal-angular/lib/adal';
 
@Component({
  moduleId: module.id,
  selector: 'app-ai-adal',
  templateUrl: 'ai-adal.component.html', 
  styleUrls: ['ai-adal.component.css']
})
export class AiAdalComponent implements OnInit {
  private _adal = null;
  private _oauthData = { isAuthenticated: false, userName: '', loginError: '', profile: '' };

  constructor() { }

  ngOnInit() { 
  } 

  init(configOptions) {
    if (configOptions) {
      // redirect and logout_redirect are set to current location by default
      var existingHash = window.location.hash;
      var pathDefault = window.location.href;
      if (existingHash) {
        pathDefault = pathDefault.replace(existingHash, '');
      }
      configOptions.redirectUri = configOptions.redirectUri || pathDefault;
      configOptions.postLogoutRedirectUri = configOptions.postLogoutRedirectUri || pathDefault;

      // if (httpProvider && httpProvider.interceptors) {
      //   httpProvider.interceptors.push('ProtectedResourceInterceptor');
      // }

      // create instance with given config
      //this._adal = new AuthenticationContext(configOptions);
    } else {
      throw new Error('You must set configOptions, when calling init');
    }
  }

}
