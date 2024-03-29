import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AppService } from './app.service';

@Component({
  standalone: true,
  imports: [RouterLink, RouterModule, ReactiveFormsModule],
  selector: 'app-root',
  template: `
    <label for="userName">UserName</label>
    <input id="userName" type="text" [formControl]="userName" />
    <label for="testId">TestId</label>
    <input id="testId" type="number" [formControl]="testId" />
    <label for="special">Special</label>
    <input id="special" type="text" [formControl]="special" />
    <button
      [routerLink]="'subscription/' + testId.value"
      [queryParams]="{ user: userName.value }">
      Test
    </button>
    <button routerLink="/">HOME</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  userName = new FormControl();
  testId = new FormControl();
  special = new FormControl();

  #service: AppService = inject(AppService);
  ngOnInit() {
    this.special.valueChanges.subscribe((value) =>
      this.#service.setValue(value),
    );
  }
}
