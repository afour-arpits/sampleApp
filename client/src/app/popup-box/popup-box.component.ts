import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from "@angular/router"
import { CommentsService } from '../services/comments.service'

@Component({
  selector: 'app-popup-box',
  templateUrl: './popup-box.component.html',
  styleUrls: ['./popup-box.component.css']
})
export class PopupBoxComponent implements OnInit {
  public content = {}
  constructor(private router: Router, private commentsService : CommentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      let id = value["id"]
      if(this.commentsService.data[id])
        this.content = this.commentsService.data[id]
      else
        this.router.navigate(['../']);
    })
  }

  public closeModal() {
    this.router.navigate(['../']);
  }
}
