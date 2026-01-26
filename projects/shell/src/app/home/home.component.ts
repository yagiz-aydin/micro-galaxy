import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { MissionService, MissionStats } from '../services/mission.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private missionService = inject(MissionService);

  mercureComp = signal<any>(null);
  venusComp = signal<any>(null);
  earthComp = signal<any>(null);
  marsComp = signal<any>(null);

  stats = {
    mercure: this.missionService.getMissionStats('Mercure'),
    venus: this.missionService.getMissionStats('Venus'),
    earth: this.missionService.getMissionStats('Earth'),
    mars: this.missionService.getMissionStats('Mars')
  };

  async ngOnInit() {
    this.mercureComp.set(await loadRemoteModule('mercure', './Component').then(m => m.App));
    this.venusComp.set(await loadRemoteModule('venus', './Component').then(m => m.App));
    this.earthComp.set(await loadRemoteModule('earth', './LandingPad').then(m => m.App));
    this.marsComp.set(await loadRemoteModule('mars', './Component').then(m => m.App));
  }
}
