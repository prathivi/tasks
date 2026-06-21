import { AppProvider } from "@tasks/components/providers/app.provider";
import { cn } from "@tasks/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tasks",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "flex flex-col w-full h-screen text-xs xl:text-sm 2xl:text-base font-sans antialiased overflow-hidden",
        inter.className,
      )}
      suppressHydrationWarning
    >
      <body className="flex flex-col w-full h-full overflow-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
