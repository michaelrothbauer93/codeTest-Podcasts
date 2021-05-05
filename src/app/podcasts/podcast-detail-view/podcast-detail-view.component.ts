import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Podcast } from '@core/models/podcast';
import { PodcastService } from '@core/services/podcast.service';
import { take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-podcast-detail-view',
  templateUrl: './podcast-detail-view.component.html',
  styleUrls: ['./podcast-detail-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastDetailViewComponent implements OnInit, OnDestroy {
  componentActive = true;
  podcastId!: string | null;
  podcast!: Podcast;

  constructor(private activatedRoute: ActivatedRoute, private podcastService: PodcastService) {
    this.podcastId = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.podcastService.availablePodcasts.pipe(takeWhile(() => this.componentActive)).subscribe(podcasts => {
      const foundPodcast = podcasts.find(podcast => podcast.id === this.podcastId);

      if (foundPodcast) {
        this.podcast = foundPodcast;
        return;
      }

      this.getAllPodcasts();
    })
  }

  private getAllPodcasts() {
    this.podcastService.getPodcastGenres().pipe(take(1)).subscribe(genres => {

      let allPodcasts: Podcast[] = [];
      genres.forEach(genre => allPodcasts = [...allPodcasts, ...genre.podcasts]);
      this.podcastService.setAvailablePodcasts(allPodcasts);
    });
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}
