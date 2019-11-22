import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';
import { Usuario } from '../usuario/entidade/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  providers: [AngularFireAuth],

})
export class CadastroPage implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private fire: AngularFireDatabase, private angularfireauth: AngularFireAuth, private rota: Router, private modal: ModalController) {}

  ngOnInit() {
  }

  salvar() {
    this.angularfireauth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.rota.navigate(['usuario']); }
    ).catch((erro) => alert('erro'));
    alert("Cadastro feito com sucesso");

    if (this.usuario.key == null) {
      this.fire.list('usuario').push(this.usuario);
      this.usuario = new Usuario();
      this.rota.navigate(['usuario']);
    } else {
      this.fire.object('usuario/' + this.usuario.key).update(this.usuario);
      this.modal.dismiss();
    }


}
}
