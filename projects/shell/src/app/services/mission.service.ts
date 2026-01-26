import { Injectable } from '@angular/core';

export interface MissionStats {
  planet: string;
  temperature: number;
  crew: number;
  status: 'Active' | 'Dormant' | 'Critical';
  nextSupplyDrop: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  getMissionStats(planet: string): MissionStats {
    // Mock logic to generate consistent but "random-looking" data
    const seed = planet.length; 
    
    return {
      planet,
      temperature: this.getTemp(planet),
      crew: Math.floor(Math.random() * 10) + 2,
      status: Math.random() > 0.8 ? 'Critical' : 'Active',
      nextSupplyDrop: new Date(new Date().getTime() + Math.random() * 1000000000)
    };
  }

  private getTemp(planet: string): number {
    switch(planet.toLowerCase()) {
      case 'mercure': return 430;
      case 'venus': return 462;
      case 'earth': return 15;
      case 'mars': return -63;
      default: return 0;
    }
  }
}
