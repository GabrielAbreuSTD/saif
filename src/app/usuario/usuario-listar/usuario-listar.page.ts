import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Usuario } from '../entidade/usuario';

import { AngularFireDatabase } from '@angular/fire/database';

import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.page.html',
  styleUrls: ['./usuario-listar.page.scss'],
})
export class UsuarioListarPage implements OnInit {

  listaUsuario: Observable<Usuario[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {

    this.listaUsuario = this.fire.list<Usuario>('usuario').snapshotChanges().pipe(
    map( lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val()})))
    );

  }

  ngOnInit() { }

}
