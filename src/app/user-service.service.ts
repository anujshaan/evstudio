import { ErrorHandlerService } from './error-handler.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from './models/user';
import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url="http://localhost:8800/api/register";

  constructor(private http:HttpClient, private errorHandler: ErrorHandlerService) { }
  getData(){
    let url = "https://api.sampleapis.com/futurama/characters";
    return this.http.get(url);

  }
  signup(user:Omit<User,"id">):Observable<User>{
     return this.http.post<User>(this.url, user).pipe(
       first(),
       catchError(this.errorHandler.handleError<User>('signup'))
     )
  }

}
