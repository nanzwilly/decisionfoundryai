import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Agentic AI for Business Process Automation - Decision Foundry AI",
    template: "%s",
  },
  description:
    "We build AI agents that automate your business processes. Agentic AI solutions with human-in-the-loop workflows for accounts payable, call quality, insurance, and more.",
  metadataBase: new URL("https://decisionfoundry.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
