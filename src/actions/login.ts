import * as z from "zod"
import bcrypt from "bcrypt";

import {LoginSchema} from "../schemas";
import prisma from "../../prisma/prisma-client";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validated = LoginSchema.safeParse(values);

    if (!validated.success) {
        return { error: "Неправильные поля!" };
    }

    const {email, password} = validated.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existing = await prisma.user.findUnique({
        where: { email }
    })

    if (!existing) {
        return { error: "Пользователь с такой почтой не зарегистрирован!" };
    }

    const person = await prisma.user.findUnique({
        where: { email, password: hashedPassword }
    })

    if (!person) {
        return { error: "Неправильный пароль!" };
    }

    return { success: "user entered"}
}