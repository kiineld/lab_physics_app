"use client"

import {buttonVariants} from "@/components/ui";
import {ArrowLeft, ArrowRight, User} from "lucide-react";
import {Separator} from "@/components/ui";
import Link from "next/link";


export function Header () {
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
                    <Link href="/auth/login"
                          className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                        Войти
                        <Separator orientation="vertical"/>
                        <User className="relative group-hover:opacity-0 duration-250 transition"/>
                        <ArrowRight
                            className="opacity-0 group-hover:opacity-100 duration-300 transition absolute right-4 -translate-x-2 group-hover:translate-x-0"/>

                    </Link>
                </div>
            </div>

            <div className="inline-flex w-full fixed sm:hidden justify-center items-center min-h-[8vh] bg-white rounded-b-md shadow">
                <div className="absolute right-2">
                    <Link href="/auth/login" className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                        <User className="relative"/>
                    </Link>
                </div>

                <div className="absolute left-2">
                    <Link href="/" className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                        <ArrowLeft className="relative"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}