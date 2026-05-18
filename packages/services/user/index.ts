import {createUserWithEmailAndPasswordInput,CreateUserWithEmailAndPasswordInputType} from './model'
import {db, eq} from '@repo/database'
import {usersTable} from '@repo/database/models/user'

import {createHmac, randomBytes,} from "node:crypto"
class UserService{
  private async getUserByEmail(email:string){
    const result=await db.select().from(usersTable).where(eq(usersTable.email,email));
    if(!result || result.length===0) return null;
    return result[0];
  }
  
  public async createUserWithEmailAndPassword(payload:CreateUserWithEmailAndPasswordInputType){
    // Bussiness Logic
    
    const {fullName,email,password} =await createUserWithEmailAndPasswordInput.parseAsync(payload);

    // check user already exists or not
    const existingUserWithEmail=await this.getUserByEmail(email);

    if(existingUserWithEmail) throw new Error(`user with email ${email} already exists`);

    const salt=randomBytes(16).toString("hex")

    const hash=createHmac('sha256',salt).update(password).digest("hex");

    // todo add email send logic here
    const createdUser= await db.insert(usersTable).values({
      fullName,
      email,
      password:hash,
      salt
    }).returning({
      id:usersTable.id
    })

    if(!createdUser || createdUser.length===0 || !createdUser[0]?.id) throw new Error(`something went wrong while creating a user`)
      
    return {
      id:createdUser[0].id
    }

  }
}

export default UserService