import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div
        className="h-full lg:flex flex-col items-center
       justify-center px-4"
      >
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">
            Bem-vindo de Volta!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Faça login ou crie uma conta para voltar ao seu dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"></Loader2>
          </ClerkLoading>
        </div>
      </div>

      <div style={{backgroundColor: '#0D1B2A'}} className="h-full hidden lg:flex items-center justify-center">
        <Image src="/1.jpg" height={400} width={400} alt={"logo"}></Image>
      </div>
    </div>
  );
}