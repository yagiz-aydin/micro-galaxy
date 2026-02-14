import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionService } from '../services/mission.service';
import { FederationService } from '../services/federation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private missionService = inject(MissionService);
  private federationService = inject(FederationService);

  mercureComp = signal<any>(null);
  venusComp = signal<any>(null);
  earthComp = signal<any>(null);
  marsComp = signal<any>(null);

  stats = {
    mercure: this.missionService.getMissionStats('Mercure'),
    venus: this.missionService.getMissionStats('Venus'),
    terra: this.missionService.getMissionStats('Terra'),
    mars: this.missionService.getMissionStats('Mars')
  };

  async ngOnInit() {
    this.mercureComp.set(await this.federationService.loadRemoteModule('mercure', './Component').then(m => m.App));
    this.venusComp.set(await this.federationService.loadRemoteModule('venus', './Component').then(m => m.App));
    this.earthComp.set(await this.federationService.loadRemoteModule('terra', './LandingPad').then(m => m.App));
    this.marsComp.set(await this.federationService.loadRemoteModule('mars', './Component').then(m => m.App));
  }
}
