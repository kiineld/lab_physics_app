import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Socials} from "@/components/shared/socials";
import {Card} from "@/components/ui";


interface props {
    className?: string;
    children: React.ReactNode;
    headerLabel: string;
    returnButtonLabel: string;
    returnButtonHref: string;
    showSocial: boolean;
}

export const CardWrapper = ({className, children, headerLabel, returnButtonLabel, returnButtonHref, showSocial}: props) => {
    return(
        <div className={cn("sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto my-auto h-screen content-center", className)}>
            <Card className="flex flex-col items-center h-fit border-primary border p-6 gap-y-4">
                <h1 className="font-bold text-2xl sm:text-4xl">
                    {headerLabel}
                </h1>

                {children}

                {showSocial && (
                    <Socials/>
                )}

                <Link href={returnButtonHref} className="hover:underline underline-offset-4 text-sm">{returnButtonLabel}</Link>
            </Card>
        </div>
    )
}