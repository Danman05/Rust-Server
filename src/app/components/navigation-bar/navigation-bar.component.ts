import { Component } from '@angular/core';
import { SteamAuthService } from '../../services/steam-auth.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  constructor(private authService: SteamAuthService) {
    
  }
  login() {
    this.authService.login();
  }
  data() {
    this.authService.getProfileData().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }
  logout() {
    this.authService.logout().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }
}
