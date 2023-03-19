import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nombre, NombreService } from 'src/app/Service/nombre.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nombreNuevo: Nombre={
    id: '', nombre: '' };

  constructor(private nombreService: NombreService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarNombre(){
    this.nombreService.saveNombre(this.nombreNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err=>console.log(err)
    );
  }

}
