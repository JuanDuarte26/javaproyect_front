import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl , FormGroup, Validators } from '@angular/forms';
import {ComponentsService} from '../services/component.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form:FormGroup = new FormGroup({}); 
  currentForm: number;

  constructor(
    private readonly fb: FormBuilder,
    private readonly componentsService: ComponentsService,
    private readonly router: Router
  ){
    this.currentForm = 1;

  }




  ngOnInit(): void {
    this.form=this.fb.group({
      name:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
    })
  }

public loginUser(){
  if(this.form.valid){
    const params={
      "email":this.form.controls.email.value,
      "password":this.form.controls.password.value
    }
    this.componentsService.loginUser(params).subscribe((rest:any)=>{
      if(rest.jwtToken){
        const jwtToken= rest.jwtToken
        localStorage.setItem('Token',jwtToken)
        this.router.navigate(['/dash'])
      }
    })
  }
}

public registrarUsuario(){
  const params={
    "name": this.form.controls.name.value,
    "email":this.form.controls.email.value,
    "password":this.form.controls.password.value
}

this.componentsService.registrarUsuario(params).subscribe(
  (rest: any) => {
    alert("Registro exitoso!!!");
  },
  (error: any) => {
    if (error.status === 500) {
      alert("El usuario ya está registrado.");
    } else {
      alert("Error desconocido al registrar el usuario.");
    }
  }
);
}



toggleForm(form: number) {
  if (this.currentForm === form) {
    this.currentForm = 1;
  } else {
    this.currentForm = form;
  }
}


}
