import React from 'react'
import {auth, signIn, signOut} from "@/shared/constants/auth-options";
import {Button, buttonVariants} from "@/components/ui";
import Link from "next/link";

const DashBoard = async() => {
    const session = await auth()

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            {session && session?.user ? (
                <>
                    <h1>Привет, {session.user.name}!</h1>
                    <p>Ты авторизован как {session.user.email}</p>
                    <form action={async () => {
                        "use server"
                        await signOut({redirectTo: "/"})
                    }}>
                        <Button type="submit">Выйти</Button>
                    </form>
                </>
            ) : (
                <>
                    <h1>Для доступа к этой странице нужно авторизоваться</h1>
                    <Link href="/auth/login" className={buttonVariants({variant: "default", className: "group relative gap-2"})}>Авторизоваться</Link>
                </>
            )}
        </div>
    )
}
export default DashBoard
