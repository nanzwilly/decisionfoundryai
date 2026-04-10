import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Decision Foundry AI",
  description:
    "Meet the team behind Decision Foundry AI — data engineers, AI specialists, and Salesforce experts building agentic AI solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
