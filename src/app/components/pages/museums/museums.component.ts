import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-museums',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './museums.component.html',
  styleUrl: './museums.component.scss'
})
export class MuseumsComponent {

}
