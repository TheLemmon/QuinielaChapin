import { Component, OnInit } from '@angular/core';
import { PartidosListComponent } from '../../admin/partidos-list/partidos-list.component'
import { AdminComponent} from '../../admin/admin.component'
import { PartidosService } from '../../admin/shared/partidos.service'
import { UserserviceService} from '../../../userservice.service'
import { Partidos} from '../../admin/shared/partidos.model'
//QUINIELA 
import { Quiniela} from '../../dashboard/shared/quiniela.model'
import { QuinielaService} from '../../dashboard/shared/quiniela.service'
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-quiniela',
  templateUrl: './quiniela.component.html',
  styleUrls: ['./quiniela.component.css'],
  providers: [PartidosService]
})
export class QuinielaComponent implements OnInit {
  partidosList: Partidos[];
  quinielaList: Quiniela[];
  constructor(private partidosService: PartidosService, private quinielaService: QuinielaService) { }

  visible = false;

  mostrar(){
    this.visible = !this.visible;
  }



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
    
    //mostrando la data de 
    var w = this.quinielaService.getData();
    w.snapshotChanges().subscribe(item => {
      this.quinielaList = [];
      item.forEach(element => {
        var z = element.payload.toJSON();
        z["$key"] = element.key;
        this.quinielaList.push(z as Quiniela);
      });
    });
  }

  onItemClick(prt: Partidos){
    this.partidosService.selectedPartidos = Object.assign({}, prt);
  }
}
