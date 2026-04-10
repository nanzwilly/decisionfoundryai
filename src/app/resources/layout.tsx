import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Decision Foundry AI",
  description:
    "Articles, insights, and guides on agentic AI, business process automation, and human-in-the-loop workflows.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
