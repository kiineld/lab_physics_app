import {buttonVariants} from "@/components/ui";
import {Separator} from "@/components/ui";
import {ArrowLeft} from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-[95vh] min-w-full justify-center items-center">
            <h1 className="font-bold text-[12rem] text-primary">404</h1>
            <h2 className="font-bold text-6xl mb-5">Страница не найдена</h2>
            <p className="font-medium text-xl mb-5">Страница, которую вы ищете, не существует</p>
            <a href="/"
               className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                <ArrowLeft className="group-hover:-translate-x-2 transition"/>
                <Separator orientation="vertical"/>
                Вернуться
            </a>
        </div>
    )
}