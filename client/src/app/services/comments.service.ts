import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {
  public data = []
  constructor(private http: HttpClient) { }

  public getCommentsByPage(page) : Observable<any> {
    return this.http.get('http://localhost:3000?page='+page)
    .map( rs =>{
      this.data = this.data.concat(rs['comments']['docs'])
      return rs
    })
  }
}
