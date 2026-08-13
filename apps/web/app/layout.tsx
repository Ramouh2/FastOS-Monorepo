import QueryProvider from "@/components/providers/QueryProvider";

import { auth } from "../lib/auth/auth";
import { getBusinessByUserId } from "../lib/repositories/prisma-business-repository";
import { BusinessProvider } from "../lib/business/business-provider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FastOS",
  description: "AI Business Operating System",
};


type RootLayoutProps = {
  children: ReactNode;
};



export default async function RootLayout({
  children,
}: RootLayoutProps) {


  const session = await auth();


  const business = session?.user?.id
    ? await getBusinessByUserId(session.user.id)
    : null;



  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">


        <QueryProvider>


          <BusinessProvider business={business!}>

            {children}

          </BusinessProvider>


        </QueryProvider>


      </body>


    </html>

  );

}