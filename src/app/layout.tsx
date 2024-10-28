import type { Metadata } from "next";
import "./globals.css";
import {Nunito} from 'next/font/google'
import {Header} from "@/components/shared";

const nunito = Nunito({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Виртуальная лаборатория",
    description: "шкебеда беда",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru">
            <body className={nunito.className}>
                <Header/>
                <div className="max-w-screen-xl w-[85vw] min-h-screen mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
