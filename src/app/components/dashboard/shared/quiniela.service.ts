import { Injectable } from '@angular/core';
import { Quiniela } from './quiniela.model';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database'
import { AngularFireObject } from 'angularfire2/database';

@Injectable()
export class QuinielaService {
  quinielaList: AngularFireList<any>;
  selectedQuiniela : Quiniela = new Quiniela();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.quinielaList = this.firebase.list('quinielas');  ///partiods_equipos equipos
    return this.quinielaList;
  }
  insertQuinielas(quinielas : Quiniela) {
    this.quinielaList.push({
      marcador: quinielas.marcador,
      equipo: quinielas.equipo,
   });
  }
  updateQuinielas(quin : Quiniela){
    this.quinielaList.update(quin.$key,{
      marcador: quin.marcador,
      equipo: quin.equipo
       })
 }

 deleteQuinielas(key : string){
   this.quinielaList.remove(key);
 }

}
