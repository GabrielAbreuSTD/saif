import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { Router } from '@angular/router';
@Component({
  selector: 'app-confirma',
  templateUrl: './confirma.page.html',
  styleUrls: ['./confirma.page.scss'],
})
export class ConfirmaPage implements OnInit {

  constructor(private fire: AngularFireDatabase,private rota: Router ) {

  }

  ngOnInit() {}

}
