import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_message ={
    email:[
      {type: "required", message:"El Email es Obligatorio"},
      {type: "pattern", message:"Tu Email no es Valido"}
    ],
    password:[
      {type: "required", message:"El Password es Obligatorio"},
      {type: "minLength", message:"Tu Password no es Valido"}
    ]
  }

  errorMessage:any;

  constructor(private formBuilder: FormBuilder , 
    private authenticate: AuthenticateService,
    private navCtrol: NavController,
    private storage:Storage
    ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials);
    this.authenticate.loginUser(credentials).then(res=>{
      this.errorMessage= "";
      this.storage.set("isUserLoggedIn",true)
      this.navCtrol.navigateForward("/menu/home")
    }).catch(err =>{
      this.errorMessage = err
    });
  }
  goToRegister(){
    this.navCtrol.navigateForward("/register")
  }

}
