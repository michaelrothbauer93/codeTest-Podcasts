import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodcastDetailViewComponent } from './podcast-detail-view.component';
import * as MockPodcast from '@core/models/mocks/podcast.mock.json';
import { RouterTestingModule } from '@angular/router/testing';
import { PodcastService } from '@core/services/podcast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('DetailViewComponent', () => {
  let component: PodcastDetailViewComponent;
  let fixture: ComponentFixture<PodcastDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule  ],
      declarations: [ PodcastDetailViewComponent ],
      providers: [PodcastService, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDetailViewComponent);
    component = fixture.componentInstance;
    component.podcast = MockPodcast;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should let me access props from my json file', () => {
    expect(MockPodcast.title).toBeTruthy();
  })

  it('should have generic h1 tag', () => {
    component.podcast.title = MockPodcast.title;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('Mock Podcast');
  });
});
