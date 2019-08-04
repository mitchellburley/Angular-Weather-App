import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Post } from '../../models/Post';
import { Observable, of } from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent {

  title = 'angularapi';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {

  }

  getPosts() {
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get<any>(this.ROOT_URL + '/posts', {headers})
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }


    //Catch errors
      // this.newPost = this.http.post<Post>(this.ROOT_URL + '/foo', data)
      //   .retry(3)
      //   .catchError(err => {
      //     console.log(err)
      //     return of(err)
      //   })
    }


}
