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
      this.dataToHash(rs['comments']['docs'], this.data)
      console.log(this.data)
      return rs
    })
  }

  private dataToHash(data, ref) {
    data.map( i => { ref[i._id] = i} )
  }
}
