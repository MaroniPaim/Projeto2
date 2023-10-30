import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthenticationService } from './services/auth.service';
import { NavController } from '@ionic/angular';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user$ = this.usersService.currentUserProfile$;
  
  constructor(
    private AuthenticationService: AuthenticationService, private navCtrl: NavController,public usersService: UsersService,) {}
    
    logout() {
      this.AuthenticationService.logout().subscribe(() => {
        this.navCtrl.navigateForward('/home');
      });


    }}
