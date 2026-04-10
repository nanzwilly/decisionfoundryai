import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Decision Foundry AI",
  description:
    "Tell us about the process you want to automate. We'll give you an honest assessment of whether AI automation is the right fit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
