import { z} from "zod"

export const createUserWithEmailAndPasswordInuptModel=z.object({
    fullName:z.string().min(5,"full name should contain atleast 5 character").describe("fullname is required"),
    email:z.email().describe("email of the user"),
    password:z.string().min(5,"password should contain minimum 5 char").describe("user-password")
})


export const CreateUserWithEmailAndPasswordOutputModel=z.object({
    id:z.string().describe("id string of the user")
})