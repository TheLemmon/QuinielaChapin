import { Component, OnInit } from '@angular/core';
import { PartidosService} from './shared/partidos.service';
import { UserserviceService } from '../../userservice.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PartidosService]
})
export class AdminComponent implements OnInit {

  constructor(private partidosService: PartidosService, private user:UserserviceService) { }

  _MostrarAsign = false;
  _MostrarVerPartidos = false;

  Asignar(){
    this._MostrarAsign = !this._MostrarAsign;
  }
  Mostrar(){
    this._MostrarVerPartidos = !this._MostrarVerPartidos;
  }

  ngOnInit() {
  }

}
