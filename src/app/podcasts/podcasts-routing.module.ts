import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PodcastListViewComponent } from "./list-view/podcast-list-view.component";
import { PodcastDetailViewComponent } from "./podcast-detail-view/podcast-detail-view.component";

const routes: Routes = [
  {
    path: '',
    component: PodcastListViewComponent,
  },
  {
    path: 'detail/:id',
    component: PodcastDetailViewComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PodcastsRoutingModule {}
