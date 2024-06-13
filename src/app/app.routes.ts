import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/pages/authentication/authentication.component';
import { MuseumComponent } from './components/pages/museum/museum.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MuseumsComponent } from './components/pages/museums/museums.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventComponent } from './components/pages/event/event.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'museum', component: MuseumComponent },
  { path: 'museums', component: MuseumsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event', component: EventComponent },
];
