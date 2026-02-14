import { TestBed } from '@angular/core/testing';
import { MissionService } from './mission.service';

describe('MissionService', () => {
  let service: MissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return stats for Mercure', () => {
    const stats = service.getMissionStats('Mercure');
    expect(stats.planet).toBe('Mercure');
    expect(stats.temperature).toBe(430);
  });

  it('should return stats for Venus', () => {
    const stats = service.getMissionStats('Venus');
    expect(stats.planet).toBe('Venus');
    expect(stats.temperature).toBe(462);
  });

  it('should return stats for Terra', () => {
    const stats = service.getMissionStats('Terra');
    expect(stats.planet).toBe('Terra');
    expect(stats.temperature).toBe(15);
  });

  it('should return stats for Mars', () => {
    const stats = service.getMissionStats('Mars');
    expect(stats.planet).toBe('Mars');
    expect(stats.temperature).toBe(-63);
  });

  it('should return default stats for unknown planet', () => {
    const stats = service.getMissionStats('Unknown');
    expect(stats.planet).toBe('Unknown');
    expect(stats.temperature).toBe(0);
  });
});
