import { User } from "src/app/Interfaces";



export interface UserInterface{
  user:any
  error:string
  loginSuccess:string
  loginFail:string
}
const initialState:UserInterface = {
  user:"",
  error:"",
  loginSuccess:"",
  loginFail:""
}


let a:number = 2;
