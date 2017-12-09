import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
import { Partidos } from '../shared/partidos.model';
import { PartidosService} from '../shared/partidos.service'
@Component({
  selector: 'app-partidos-list',
  templateUrl: './partidos-list.component.html',
  styleUrls: ['./partidos-list.component.css']
})
export class PartidosListComponent implements OnInit {
  partidosList: Partidos[];
  constructor(private partidosService: PartidosService) { }

  ngOnInit() {
    var x = this.partidosService.getData();
    x.snapshotChanges().subscribe(item => {
      this.partidosList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.partidosList.push(y as Partidos);
      });
    });
  }

  onItemClick(emp : Partidos){
    this.partidosService.selectedPartidos = Object.assign({},emp);
  }

}
  