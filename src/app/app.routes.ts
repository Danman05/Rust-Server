import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreFrontComponent } from './components/store-front/store-front.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'store', component: StoreFrontComponent},
    { path: 'servers', component: ServerInfoComponent}
];
