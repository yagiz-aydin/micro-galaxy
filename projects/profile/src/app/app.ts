import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private sub?: Subscription;
  
  protected readonly profile = signal<any>({});

  ngOnInit() {
    this.sub = this.route.data.pipe(
      map(d => d['user'])
    ).subscribe(user => {
      this.profile.set(user || {});
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
