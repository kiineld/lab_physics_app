import {FcGoogle} from "react-icons/fc";
import {FaGithub, FaVk} from "react-icons/fa";
import {Button} from "@/components/ui";
import React from "react";
import {tryAuth} from "@/lib/auth-server";

export const Socials = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => tryAuth("google")}
            >
                <FcGoogle className="h-5 w-5"/>
            </Button>

            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => tryAuth("github")}
            >
                <FaGithub className="h-5 w-5"/>
            </Button>

            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => tryAuth("vk")}
            >
                <FaVk className="h-5 w-5"/>
            </Button>
        </div>
    )
}