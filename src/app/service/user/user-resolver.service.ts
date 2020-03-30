import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserResolved } from '../../admin/users/user-resolved';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserResolved> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<UserResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `user id was not a number: ${id}`;
      console.error(message);
      return of({ user: null, error: message });
    }

    return this.userService.getUser(+id)
      .pipe(
        map(user => ({ user })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ user: null, error: message });
        })
      );
  }

}
