import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-nunito"
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-nunito-sans"
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle("settings")
  return {
    title: settings.data.site_title || "flowrise fallback",
    description :settings.data.meta_description || "flowrise description fallback",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
