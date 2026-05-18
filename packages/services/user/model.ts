import {z} from "zod";

export const createUserWithEmailAndPasswordInput=z.object({
  fullName:z.string().min(5).describe("Full name of the user"),
  email:z.email().describe("Email address of the user"),
  password:z.string().min(5).describe("Password of the user")

})

export type CreateUserWithEmailAndPasswordInputType=z.infer<typeof createUserWithEmailAndPasswordInput>