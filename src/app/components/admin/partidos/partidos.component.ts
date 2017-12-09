import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PartidosService} from '../shared/partidos.service'
import * as _ from 'lodash';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase'

//const refRoot = firebase.database().ref();
//const tokensDescuento = refRoot.child('equiposprueba');
//const tokensDescuento = refRoot.child('equiposbrueba').orderByChild('tokens').equalTo('$key');
/*const query = 
refRoot.orderByChild('tokens')
  .equalTo('_cantidad').limitToFirst(1);
  */            

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  constructor(private partidosService: PartidosService) { }

  equiposprueba: any;
  filtroPartido: any;

  nombre: string;
  filtro = {}

  private filtroPart() {
    this.filtroPartido = _.filter(this.nombre, _.conforms(this.filtro) )
  }

  ngOnInit() {
    this.resetForm();
 }
  onSubmit(form: NgForm){
    if(form.value.$key == null)
    this.partidosService.insertPartidos(form.value);
    else
    this.partidosService.updatePartidos(form.value);
    this.resetForm(form);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.partidosService.selectedPartidos = {
      $key: null,
      equipoa: '',
      urla: '',
      marcadora: '',
      equipob: '',
      urlb: '',
      marcadorb: '',
      tokens: '' 
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Desea eliminar este registro?') == true) {
      this.partidosService.deletePartidos(form.value.$key);
      this.resetForm(form);
    }
  }

  //Constantes de Consultas

 
}



