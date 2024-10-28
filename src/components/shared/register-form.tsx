"use client"

import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui";
import {RegisterSchema} from "../../schemas";
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


const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values)
}


export function RegisterForm() {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name: "",
            email: "",
            password: "",
        }
    })

    return (
        <CardWrapper
            headerLabel={"Здравствуйте!"}
            returnButtonLabel={"Есть аккаунт? Войти"}
            returnButtonHref={"/auth/login"}
            showSocial={true}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <div className="space-y-4 mb-5">
                        <FormField
                            control={form.control}
                            name = "name"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-md">
                                        Имя пользователя
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Введите имя"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

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

                    <Button type="submit" className="w-full">Создать</Button>

                </form>
            </Form>
        </CardWrapper>
    )
}