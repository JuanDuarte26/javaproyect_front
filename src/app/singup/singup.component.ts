
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl , FormGroup, Validators } from '@angular/forms';
import {ComponentsService} from '../services/component.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{
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
    this.form = this.fb.group({
      name:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }


public registrarUsuario(){
  const params={
    "name": this.form.controls.name.value,
    "email":this.form.controls.email.value,
    "password":this.form.controls.password.value
}
  this.componentsService.registrarUsuario(params).subscribe((rest:any)=>{
    alert("Registro exitoso!!!")
  })
}




}
