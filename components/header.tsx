import { Loader2 } from "lucide-react";
import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { WelcomeMsg } from "@/components/welcome-msg";

export const Header = () => {
  return (
    <header style={{ backgroundImage: 'linear-gradient(to right, #002147, #063d7b)' }} className="bg-gradient-to-b px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400"/>
          </ClerkLoading>
        </div>
        <WelcomeMsg/>
      </div>
    </header>
  );
};
