import {Button, buttonVariants} from "@/components/ui";
import {ArrowLeft, ArrowRight, User} from "lucide-react";
import {Separator} from "@/components/ui";
import Link from "next/link";
import {auth, signOut} from "@/shared/constants/auth-options";
import React from "react";


export async function Header () {
    const links = [
        {
            id: "1",
            link: "/#about",
            title: "О нас"
        },
        {
            id: "2",
            link: "/#aboutproject",
            title: "О нашем проекте"
        },
        {
            id: "3",
            link: "/#contacts",
            title: "Контакты"
        },
        {
            id: "4",
            link: "/#download",
            title: "Скачать"
        }
    ]

    const session = await auth()

    return(
        <div>
            <div className="sm:inline-flex w-full hidden justify-center items-center min-h-[4vh] fixed bg-white rounded-b-md shadow">
                {/* LEFT PART OF HEADER */}
                <div className="gap-2 flex mr-auto ml-10 py-3">
                    {
                        links.map((item) =>
                            <Link key={item.id} href={item.link} className={buttonVariants({
                                variant: "ghost",
                                className: "underline underline-offset-4"
                            })}>
                                {item.title}
                            </Link>
                        )
                    }
                </div>

                {/* RIGHT PART OF HEADER */}
                <div className="gap-2 flex mr-10">
                    {session && session?.user ? (
                        <Link href="/dashboard" className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                            {session.user.name}
                            <Separator orientation="vertical"/>
                            <User/>
                        </Link>
                    ) : (
                        <>
                            <Link type="submit" href="/auth/login"
                                  className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                                Войти
                                <Separator orientation="vertical"/>
                                <User className="relative group-hover:opacity-0 duration-250 transition"/>
                                <ArrowRight
                                    className="opacity-0 group-hover:opacity-100 duration-300 transition absolute right-4 -translate-x-2 group-hover:translate-x-0"/>

                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="inline-flex w-full fixed sm:hidden justify-center items-center min-h-[8vh] bg-white rounded-b-md shadow">
                {session && session?.user ? (
                    <>
                        <form action={async () => {
                            "use server"
                            await signOut({redirectTo: "/"})
                        }}>
                            <Button type="submit">{session.user.name}Выйти</Button>
                        </form>
                    </>
                ) : (
                    <div className="absolute right-2">
                        <Link href="/auth/login"
                              className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                            <User className="relative"/>
                        </Link>
                    </div>
                )}

                <div className="absolute left-2">
                    <Link href="/" className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                        <ArrowLeft className="relative"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}