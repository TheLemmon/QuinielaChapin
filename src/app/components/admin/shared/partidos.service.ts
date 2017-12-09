import { Injectable } from '@angular/core';
import { Partidos } from './partidos.model';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database'
import { AngularFireObject } from 'angularfire2/database';

@Injectable()
export class PartidosService {
  partidosList: AngularFireList<any>;
  selectedPartidos : Partidos = new Partidos();
 
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.partidosList = this.firebase.list('equiposprueba');  ///partiods_equipos equipos
    return this.partidosList;
  }
  insertPartidos(partidos : Partidos) {
    this.partidosList.push({
      equipoa: partidos.equipoa,
      urla: partidos.urla,
      marcadora: partidos.marcadora,
      equipob: partidos.equipob,
      urlb: partidos.urlb,
      marcadorb: partidos.marcadorb,
      tokens: partidos.tokens 
    });
  }
  updatePartidos(prt : Partidos){
    this.partidosList.update(prt.$key,{
      equipoa: prt.equipoa,
      urla: prt.urla,
      marcadora: prt.marcadora,
      equipob: prt.equipob,
      urlb: prt.urlb,
      marcadorb: prt.marcadorb,
      tokens: prt.tokens 
    })
 }

 deletePartidos(key : string){
   this.partidosList.remove(key);
 }


}
