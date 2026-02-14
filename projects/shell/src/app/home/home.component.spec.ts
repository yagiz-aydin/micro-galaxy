import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MissionService } from '../services/mission.service';
import { FederationService } from '../services/federation.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const federationServiceMock = {
      loadRemoteModule: () => Promise.resolve({ App: {} })
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        MissionService,
        { provide: FederationService, useValue: federationServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize stats', () => {
    expect(component.stats).toBeDefined();
    expect(component.stats.mercure).toBeDefined();
    expect(component.stats.venus).toBeDefined();
    expect(component.stats.terra).toBeDefined();
    expect(component.stats.mars).toBeDefined();
  });
});
