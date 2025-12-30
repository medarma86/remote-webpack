import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-profile-view',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.scss',
})
export class ProfileView {
  public shared = inject(SharedDataService);
}
