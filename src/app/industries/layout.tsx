import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI automation solutions for insurance, financial services, contact centers, healthcare, logistics, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
