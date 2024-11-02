"use server"

import {signIn} from "@/shared/constants/auth-options";


export async function tryAuth(provider: string){
    await signIn(provider,{redirectTo: "/dashboard"});
}