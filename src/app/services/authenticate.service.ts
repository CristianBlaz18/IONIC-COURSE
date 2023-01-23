import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { access } from 'fs';
import { Storage } from '@ionic/storage';
import { userInfo } from 'os';
import { __values } from 'tslib';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  
  
  
  constructor(private storage: Storage) {
    
   }
   async loginUser(credentials: any){
    let usuarioreg = await this.storage.get('user');
    
    return new Promise((accept, reject) =>{
      if ( credentials.email == usuarioreg.email && credentials.password == atob(usuarioreg.password) )
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }
  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user",userData);
  }
}
