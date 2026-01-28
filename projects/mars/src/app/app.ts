import { Component, signal, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('mars');
  @Input() stats: any;
}
