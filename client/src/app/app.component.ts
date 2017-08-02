import { Component, OnInit } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Router }                 from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CommentsService } from './services/comments.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public allData : any
  public docs : Array<any>
  constructor( private commentsService : CommentsService, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.commentsService.getCommentsByPage(1).subscribe(responce => {
      this.allData = responce.comments
      this.docs = responce.comments.docs
      console.log(responce.comments.docs)
    })
  }

  public onScrollDown () {
    let pageNumber = Number(this.allData.page) + 1
    if( pageNumber <= this.allData.pages)
      this.commentsService.getCommentsByPage(pageNumber).subscribe(responce => {
        this.allData = responce.comments 
        this.docs = this.docs.concat(responce.comments.docs)
      })
  }

  public openModal (commentId) {
    this.router.navigate(['comments', commentId]);
  }
}
