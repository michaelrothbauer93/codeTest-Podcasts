import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../@shared/shared.module";
import { PodcastListViewComponent } from "./list-view/podcast-list-view.component";
import { PodcastsRoutingModule } from "./podcasts-routing.module";
import { PodcastDetailViewComponent } from './podcast-detail-view/podcast-detail-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PodcastsRoutingModule,
  ],
  declarations: [
    PodcastListViewComponent,
    PodcastDetailViewComponent,
  ],
})
export class PodcastsModule { }
