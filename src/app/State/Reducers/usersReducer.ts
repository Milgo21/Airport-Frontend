import { createReducer, on, createFeatureSelector } from "@ngrx/store";
import { User } from "src/app/Interfaces";
import { loginFail,loginUserSuccess, loginUser } from "../Actions/userActions";



export interface UserInterface{
  user:any
  error:string
  loginUser:string
  loginSuccess:string
  loginFail:string
}
const initialState:UserInterface = {
  user: null,
  error: "",
  loginSuccess: "",
  loginFail: "",
  loginUser: ""
}

const userSliceState= createFeatureSelector<UserInterface>('user')
export const userReducer=createReducer<UserInterface>(
  initialState,
  on(loginUserSuccess, (state,actions):UserInterface=>{
     return {
      ...state,
      loginFail:'',
      loginSuccess:actions.type
     }
  })
  ,  on(loginFail, (state,actions):UserInterface=>{
      return {
      ...state,
      error:actions.error,
      loginSuccess:""
      }
   })

)
