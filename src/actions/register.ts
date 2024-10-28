import * as z from "zod"
import bcrypt from "bcrypt";

import {RegisterSchema} from "@/schemas";
import prisma from "../../prisma/prisma-client";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validated = RegisterSchema.safeParse(values);

    if (!validated.success) {
        return { error: "Неправильные поля!" };
    }

    const {fullName, email, password} = validated.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existing = await prisma.user.findUnique({
        where: { email }
    })

    if (existing) {
        return { error: "Пользователь с такой почтой уже зарегистрирован!" };
    }

    await prisma.user.create({
        data: { fullName, email, password: hashedPassword}
    })

    return { success: "user created"}
}