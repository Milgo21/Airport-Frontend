import { createAction, props } from "@ngrx/store";
import { Message, User } from "src/app/Interfaces";


export const loginUser = createAction('[loginUser]-loginUser', props<{newUser:User}>());
export const loginUserSuccess = createAction('[loginUser]-loginUser', props<{message:Message}>())
export const loginFail= createAction('[loginUser]-loginUserFail',props<{error:string}>())
