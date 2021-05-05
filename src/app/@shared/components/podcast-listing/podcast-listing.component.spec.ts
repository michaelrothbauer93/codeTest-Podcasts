import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PodcastListingComponent } from "./podcast-listing.component";
import * as MockPodcast from '@core/models/mocks/podcast.mock.json';
import { RouterTestingModule } from "@angular/router/testing";
import { Podcast } from "@core/models/podcast";
import { UrlSegment } from "@angular/router";

describe('@shared/PodcastListingComponent', () => {
  let component: PodcastListingComponent;
  let fixture: ComponentFixture<PodcastListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PodcastListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListingComponent);

    component = fixture.componentInstance;
    component.index = 0;
    component.podcast = MockPodcast;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have generic h1 tag', () => {
    component.podcast.title = MockPodcast.title;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.podcast__title').textContent).toContain('Mock Podcast');
  });

  it('on podcast data change, should still have generic h1 tag', () => {
    component.podcast.title = "Updated Mock Podcast";

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.podcast__title').textContent).toContain('Updated Mock Podcast');
  });

  describe('viewPodcast()', () => {
    it('should return true', () => {
      const navigateSpy = spyOn(component.router, 'navigate');

      component.viewPodcast(MockPodcast.id);
      expect(navigateSpy).toHaveBeenCalledWith(['podcasts/detail', MockPodcast.id])
    });
  });
})
