import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/pages/authentication/authentication.component';
import { MuseumComponent } from './components/pages/museum/museum.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'museum', component: MuseumComponent },
];
