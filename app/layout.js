import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "easymde/dist/easymde.min.css";
import Error from "@/components/Error";
import SyncUser from "@/components/SyncUser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFounders",
  description: "DriveFounders is a platform for creating and sharing startup ideas",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Error/>
        <SyncUser/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
