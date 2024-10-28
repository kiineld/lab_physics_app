"use client"

import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui";
import { LoginSchema } from "../../schemas";
import { Input } from "@/components/ui"
import {
    Form,
    FormItem,
    FormControl,
    FormField,
    FormLabel,
    FormMessage
} from "@/components/ui"
import {CardWrapper} from "@/components/shared/card-wrapper";


const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
}


export function LoginForm() {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password: "",
        }
    })

    return (
        <CardWrapper
            headerLabel={"С возвращением!"}
            returnButtonLabel={"Нет аккаунта? Создать"}
            returnButtonHref={"/auth/register"}
            showSocial={true}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <div className="space-y-4 mb-5">
                        <FormField
                            control={form.control}
                            name = "email"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-md">
                                        Почта
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Введите почту"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name = "password"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-md">
                                        Пароль
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Введите пароль"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    
                    <Button type="submit" className="w-full">Войти</Button>

                </form>
            </Form>
        </CardWrapper>
    )
}