import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ComponentsService } from '../services/component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  form:FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder ,
    private readonly componentsService: ComponentsService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:["", Validators.required],
      lastname:["", Validators.required],
      email:["", Validators.required],
      phone:["", Validators.required]
    })
  }

  public guardarUsuarios(){
    const params={
      "nombre": this.form.controls.name.value,
      "apellido":this.form.controls.lastname.value,
      "correo":this.form.controls.email.value,
      "telefono":this.form.controls.phone.value
  }
    this.componentsService.guardarUsuarios(params).subscribe((rest:any)=>{
      alert("Registro exitoso!!!")
    })
  }

}
