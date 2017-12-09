import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { PartidosService} from '../../admin/shared/partidos.service'
import { AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { QuinielaService} from '../../dashboard/shared/quiniela.service'
import { Quiniela } from '../../dashboard/shared/quiniela.model'
@Component({
  selector: 'app-quiniela-form',
  templateUrl: './quiniela-form.component.html',
  styleUrls: ['./quiniela-form.component.css']
})
export class QuinielaFormComponent implements OnInit {
  visible = false;
  
    mostrar(){
      this.visible = !this.visible;
    }

  constructor(private partidosService: PartidosService, private quinielaService: QuinielaService) { }

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
    /* */
     onSubmitt(form: NgForm){
       if(form.value.$key == null)
       this.quinielaService.insertQuinielas(form.value);
       else 
      this.quinielaService.updateQuinielas(form.value);
      this.resetFormm(form);  
    }
     /**/

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
    /**  **/
     resetFormm(form?: NgForm){
       if(form != null)
       form.reset();
       this.quinielaService.selectedQuiniela = {
         $key: null,
         marcador: '',
         equipo: '',
       }
     }
    /**  **/
    onDelete(form: NgForm) {
      if (confirm('Desea eliminar este registro?') == true) {
        this.partidosService.deletePartidos(form.value.$key);
        this.resetForm(form);
      }
    }

    /** **/
    onDeletee(form: NgForm){
      if(confirm('Desea eliminar??') == true ){
        this.quinielaService.deleteQuinielas(form.value.$key);
        this.resetFormm(form);
      }
    }
    /**  **/
    //Constantes de Consultas
  
   
  }
  