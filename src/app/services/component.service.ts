import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
    providedIn: 'root'
  })
  
  export class ComponentsService {
      
      constructor(private readonly http:HttpClient){
  
       }
  
       guardarUsuarios(params: any): Observable<any>{
          const url=`${environment.url}/usuarios/clientes`;
          return this.http.post(url, params)
       }
       
        listar(): Observable<any>{
          const url=`${environment.url}/usuarios/tabla`;
          return this.http.get(url)
        }

       loginUser(params: any): Observable<any>{
        const url=`${environment.url}/authenticate`;
        return this.http.post(url, params)
       }

       registrarUsuario(params: any): Observable<any>{
        const url=`${environment.url}/sign-up`;
        return this.http.post(url, params)
     }
  
  }