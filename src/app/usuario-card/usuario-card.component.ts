import { HaibuUtils } from './../../utils/haibuUtils';
import { Usuario } from './../models/usuarios.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import * as moment from 'moment';

interface DialogData {
  usuario: Usuario
}
@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UsuarioCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }


  formatRut(rut: any) {
    return HaibuUtils.formateaRut(rut)
  }
  validaRut(rut: string) {
    return HaibuUtils.validaRut(rut)
  }
  validateDate(date: string) {
    var dateMoment = moment(date, 'DD/MM/YYYY',true);
    return dateMoment.isValid();

  }
}
