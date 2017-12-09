import { RouterModule, Routes } from '@angular/router';
import { IndexQuinielaComponent } from './components/index-quiniela/index-quiniela.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ReglasComponent } from './components/reglas/reglas.component';
import { FaqComponent } from './components/faq/faq.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent} from './components/admin/admin.component';
import { AuthguardGuard} from './authguard.guard';

const APP_ROUTES: Routes = [
  { path: 'index', component: IndexQuinielaComponent },
  { path: 'info', component: InformacionComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'reglas', component: ReglasComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthguardGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
