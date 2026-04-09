import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Quality at Scale: Moving Beyond 3% Sample Reviews",
  description:
    "Why AI-powered call monitoring is replacing manual sampling — and what it means for agent performance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
