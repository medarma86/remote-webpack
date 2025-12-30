import { Component, inject } from '@angular/core';
import { SharedDataService } from '../profile/shared-data.service';

@Component({
  selector: 'remoteApp-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
// Inject the local service
  public shared = inject(SharedDataService);

  updateName(val: string) {
    this.shared.updateName(val);
  }
}
