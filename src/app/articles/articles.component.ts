import { Component, OnDestroy, OnInit } from '@angular/core';

import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  posts: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;

  constructor(private scullyService: ScullyRoutesService) {}

  ngOnInit(): void {
    this.routeSub = this.scullyService.available$.subscribe((posts) => {
      console.log(posts);
      this.posts = posts.filter((post) => post.title);
      console.log(this.posts);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
