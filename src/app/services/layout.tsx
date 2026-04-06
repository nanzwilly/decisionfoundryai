import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Agentic AI development, process automation, human-in-the-loop workflows, and integration with your existing systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
