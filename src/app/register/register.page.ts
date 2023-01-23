import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_message={
    name:[
      {type: "required", message:"El Nombre es Obligatorio"},
      {type: "pattern", message:"Tu Nombre no es Valido"}
    ],
    last_name:[
      {type: "required", message:"El Apellido es Obligatorio"},
      {type: "pattern", message:"Tu Apellido no es Valido"}
    ],
    document_type:[
      {type: "required", message:"El tipo de documento es Obligatorio"}
    ],
    document_number:[
      {type: "required", message:"El Numero de Doc es Obligatorio"},
      {type: "pattern", message:"Tu NUmero de Doc no es Valido"}
    ],
    career:[
      {type: "required", message:"La Carrera es Obligatorio"}
    ],
    email:[
      {type: "required", message:"El Email es Obligatorio"},
      {type: "pattern", message:"Tu Email no es Valido"}
    ],
    password:[
      {type: "required", message:"El Password es Obligatorio"},
      {type: "minLength", message:"Tu Password no es Valido"}
    ]
  }

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService
    ) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z].*")
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z].*")
        ])
      ),
      document_type: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      document_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9].*")
        ])
      ),
      career: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    });
  }

}