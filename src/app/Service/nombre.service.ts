import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NombreService {

  url='http://localhost:8080/api/nombres';
  constructor(private http: HttpClient) { }

  getNombres():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnNombre(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveNombre(nombre: Nombre):Observable<any>
  {
    return this.http.post(this.url, nombre);
  }

  editNombre(id:string, nombre: Nombre):Observable<any>
  {
    return this.http.put(this.url+'/'+id, nombre);
  }

  deleteNombre(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Nombre{
  id:string;
  nombre:string;
}