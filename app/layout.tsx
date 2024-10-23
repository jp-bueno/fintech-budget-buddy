import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryProviders } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
// fr-FR locale is imported as frFR
import { ptBR } from '@clerk/localizations'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Buddy - Gestão Financeira",
  description: "Aplicativo de Gestão Financeira - Budget Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={inter.className}>
          <QueryProviders>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
