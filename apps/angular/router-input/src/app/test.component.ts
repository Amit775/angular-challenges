import { Component, input } from '@angular/core';
import { param } from './app.service';

@Component({
  selector: 'app-subscription',
  standalone: true,
  template: `
    <div>TestId: {{ testId() }}</div>
    <div>Permission: {{ permission() }}</div>
    <div>User: {{ user() }}</div>
    <div>Special: {{ special() }}</div>
  `,
})
export default class TestComponent {
  testId = input<string>('');
  permission = input<string>('');
  user = input<string>('');
  special = param<string>();
}
