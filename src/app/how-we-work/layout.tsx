import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our engagement model: from discovery and process mapping to build, deployment, and ongoing optimization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
