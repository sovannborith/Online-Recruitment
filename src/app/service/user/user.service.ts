import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { UserEntity } from '../../model/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserEntity[]> {
    return this.http.get<UserEntity[]>(this.userUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<UserEntity> {
    if (id === 0) {
      return of(this.initializeUser());
    }
    const url = `${this.userUrl}/${id}`;
    return this.http.get<UserEntity>(url)
      .pipe(
        tap(data => console.log('getUser: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createUser(user: UserEntity): Observable<UserEntity> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    user.id = null;
    return this.http.post<UserEntity>(this.userUrl, user, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<UserEntity>(url, { headers })
      .pipe(
        tap(data => console.log('deleteUser: ' + id)),
        catchError(this.handleError)
      );
  }

  updateUser(user: UserEntity): Observable<UserEntity> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.userUrl}/${user.id}`;
    return this.http.put<UserEntity>(url, user, { headers })
      .pipe(
        tap(() => console.log('updateUser: ' + user.id)),
        // Return the product on an update
        map(() => user),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeUser(): UserEntity {
    // Return an initialized object
    return {
      id: 0,
      userName: null,
      firstName: null,
      lastName: null,
      userPassword: null,
      mobilePhone: null,
      isActive: true,
      createdDate: null
    };
  }
}
