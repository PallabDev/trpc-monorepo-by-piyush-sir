import { userService } from "../../services";
import { publicProcedure, router } from "../../trpc";
import { generatePath } from "../../utils/path-generator";
import {createUserWithEmailAndPasswordInuptModel,CreateUserWithEmailAndPasswordOutputModel} from "./model"
const TAGS = ["Authentication"];
const getPath = generatePath("/authentication");

export const authRouter = router({
 createUserWithEmailAndPassword:publicProcedure.meta({
  openapi:{
    method:"POST",
    path: getPath("/createUserWitEmailAndPassword"),
    tags: TAGS
  }
 })// not a trpc part
 .input(createUserWithEmailAndPasswordInuptModel)
 .output(CreateUserWithEmailAndPasswordOutputModel)
 .mutation(async ({input})=>{
    const {fullName,email,password}=input;
    const {id} = await userService.createUserWithEmailAndPassword({
      fullName,email,password
    })
    return {
      id
    }
 })
});
