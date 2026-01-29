import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { MicrosoftGraphUserDto } from './types/dto/User';
import { Application } from './types/dto/Application';

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
  
  protected readonly profile = signal<MicrosoftGraphUserDto>({
    '@odata.context': '',
    id: '',
    displayName: '',
    givenName: '',
    surname: '',
    jobTitle: null,
    officeLocation: null,
    preferredLanguage: null,
    userPrincipalName: '',
    businessPhones: [],
    mail: null,
    mobilePhone: null
  });

  protected readonly applications = signal<Application[]>([]);

  ngOnInit() {
    this.sub = this.route.data.pipe(
      map(d => ({ user: d['user'], applications: d['applications'] }))
    ).subscribe({
      next: ({ user, applications }) => {
        console.log('Profile App: Received data', { user, applications });
        this.profile.set(user);
        this.applications.set(applications.value);
      },
      error: (err) => {
        console.error('Profile App: Error receiving data', err);
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
