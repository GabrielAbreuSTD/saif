import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'app-salvar-usuario',
  templateUrl: './salvar-usuario.page.html',
  styleUrls: ['./salvar-usuario.page.scss'],
})
export class SalvarUsuarioPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() { }

  salvar() {
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    alert("salvo com sucesso");
  }


}
