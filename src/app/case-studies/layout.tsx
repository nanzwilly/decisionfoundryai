import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies from Decision Foundry AI",
  description:
    "Real results from real AI automation projects — accounts payable, call quality monitoring, and insurance processing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
