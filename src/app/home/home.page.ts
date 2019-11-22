import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../usuario/entidade/usuario';

import { AngularFireAuth } from "angularfire2/auth";

@Component({  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private router: Router,) {}

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.router.navigate(['principal']); }
    ).catch((erro) => alert("ERRO"));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }

}
