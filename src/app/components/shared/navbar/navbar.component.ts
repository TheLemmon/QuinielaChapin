import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService} from '../../../userservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private user:UserserviceService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if(username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn();
      this.router.navigate(['admin']);
      //this.user.setUserLoggedIn();
      //this.router.navigate(['dashboard']);
    }
  
  }

}
