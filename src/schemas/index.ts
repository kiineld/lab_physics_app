import * as z from "zod";

export const LoginSchema  = z.object({
    email: z.string().email({
        message: "Почта обязательна для ввода!"
    }),
    password: z.string().min(1, {
        message:"Пароль обязателен для ввода!"
    })
});

export const RegisterSchema  = z.object({
    fullName: z.string().min(1, {
       message: "Имя обязяательно для ввода!"
    }),
    email: z.string().email({
        message: "Почта обязательна для ввода!"
    }),
    password: z.string().min(1, {
        message:"Пароль обязателен для ввода!"
    })
});