import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  usuarios: Usuario[] =[];

  ngOnInit(): void {

    this.usuarioService.getUsers()
      .subscribe(data =>{
        console.log(data)
        this.usuarios = data;
      })

  }

}
