import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../services/component.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  usuarios: any = {}

  constructor(
    private readonly componentsService: ComponentsService
  ) { }
  ngOnInit(): void {
    this.listarUsuarios()
   }

listarUsuarios(){
  this.componentsService.listar().subscribe((rest:any)=>{
    this.usuarios = rest
    console.log(this.usuarios)
  })
}


}