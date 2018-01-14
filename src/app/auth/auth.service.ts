import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  alert("here");
  auth0 = new auth0.WebAuth({
    clientID: 'eVJv6UFM9GVdukBWiURczRCxmb6iaUYG',
    domain: 'pamelalim.auth0.com',
    responseType: 'token id_token',
    audience: 'https://localhost:4200/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}