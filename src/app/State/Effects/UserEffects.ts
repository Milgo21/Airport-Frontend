import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import * as UserActions from '../Actions/userActions'

@Injectable()
export class UserEffects{
  constructor(private UserService:AuthenticationService, private actions$:Actions){}
  loginUser = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      concatMap((action)=>{
        return this.UserService.loginUser(action.newUser).pipe(
          map(successResponse=>{
            return UserActions.loginUserSuccess({message:successResponse})
          }),
          catchError(error=>of(UserActions.loginFail({error:error.message})))
        )
      })
    )
  })


}
