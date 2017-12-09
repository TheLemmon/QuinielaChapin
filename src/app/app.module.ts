import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {  AngularFireModule} from 'angularfire2';
import {  AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { environment} from '../environments/environment'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { IndexQuinielaComponent } from './components/index-quiniela/index-quiniela.component';

//RUTAS
import {APP_ROUTING} from './app.routes';

//COMPONENTES
import { FooterComponent } from './components/shared/footer/footer.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ReglasComponent } from './components/reglas/reglas.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { PartidosComponent } from './components/admin/partidos/partidos.component';
import { PartidosListComponent } from './components/admin/partidos-list/partidos-list.component';
//SERVICIOS
import { UserserviceService} from './userservice.service';
import { AuthguardGuard} from './authguard.guard';
import { RouterModule } from '@angular/router/src/router_module';
//Social Imports
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { QuinielaComponent } from './components/dashboard/quiniela/quiniela.component';
import { QuinielaFormComponent } from './components/dashboard/quiniela-form/quiniela-form.component';  //Aqui manejare todo lo que se inicialize con quiniela


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("127514434597954")
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexQuinielaComponent,
    FooterComponent,
    InformacionComponent,
    NoticiasComponent,
    ReglasComponent,
    FaqComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    PartidosComponent,
    PartidosListComponent,
    QuinielaComponent,
    QuinielaFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpModule,
    SocialLoginModule.initialize(config),
    //RouterModule.forRoot(APP_ROUTING)
    APP_ROUTING,
  ],
  providers: [
    UserserviceService,
    AuthguardGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
