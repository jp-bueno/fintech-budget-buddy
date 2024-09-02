"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
    const {user, isLoaded} = useUser();

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-1xl lg:text-4xl text-white font-medium">
                Bem-vindo de Volta{isLoaded ? ", " : " "}{user?.firstName} 👋
            </h2>
            <p className="text-sm lg:text-base text-[#89B6FD]">Esse é o seu Relatório Financeiro Geral</p>
        </div>
    )
}