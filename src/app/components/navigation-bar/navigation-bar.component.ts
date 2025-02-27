import { Component, OnInit } from '@angular/core';
import { SteamAuthService } from '../../services/steam-auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SteamProfile } from '../../interfaces/steam-profile';
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent implements OnInit {
  constructor(public authService: SteamAuthService) {
  }
  userDrawer: boolean = false;
  user: SteamProfile | undefined
  ngOnInit() {
    this.userData();
  }

  login() {
    this.authService.login();
  }
  userData() {
    this.authService.getProfileData().subscribe({
      next: (res) => {
        this.authService.setUser(res);
        this.user = this.authService.getUser();
      },
      error: (err) => console.log(err)
    })
  }
  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        this.user = undefined;
        console.log(res);
      },
      error: (err) => console.log(err)
    })
  }
  
  toggleUserDrawer() {
    this.userDrawer = !this.userDrawer
  }
}
