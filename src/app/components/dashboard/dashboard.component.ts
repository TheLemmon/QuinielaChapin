import { Component, OnInit } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { PartidosListComponent } from '../admin/partidos-list/partidos-list.component'
import { AdminComponent} from '../admin/admin.component'
import { PartidosService } from '../admin/shared/partidos.service'
import { UserserviceService} from '../../userservice.service'
import { QuinielaService} from '../dashboard/shared/quiniela.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PartidosService, QuinielaService]
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private partidosService: PartidosService, private userService: UserserviceService, private quinielaService: QuinielaService) { }
  user: SocialUser;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   
  }

  

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  
  signOut(): void {
    this.authService.signOut();
  }

}
