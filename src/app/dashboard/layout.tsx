import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Выбор темы",
    description: "шкебеда беда",
};

export default function DashBoardLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <div className="max-w-screen-xl w-[85vw] min-h-screen mx-auto">
                {children}
            </div>
        </div>
    );
}