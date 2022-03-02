import { UsuarioCardComponent } from './../usuario-card/usuario-card.component';
import { UsuariosService } from './../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuarios.model';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  search:string = '';

  constructor(
    private usuariosService:UsuariosService,
    private  dialog: MatDialog
    ) {

   }

  ngOnInit(): void {
    this.getUsuarios();
  }

  async getUsuarios(){

    try {
      this.usuarios = await (await this.usuariosService.getUsuarios()).filter(user => user.activo === 1);

    } catch (error) {

    }
  }
  openCardUser(usuario:Usuario) {
    const dialogRef = this.dialog.open(UsuarioCardComponent,{
      data: {usuario:usuario },
      width:'300px'

    });


  }
}



import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Pipe({
    name: 'filterUser',
    pure: false
})
export class FilterUserPipe implements PipeTransform {
    transform(items: Usuario[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.nombre.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}
