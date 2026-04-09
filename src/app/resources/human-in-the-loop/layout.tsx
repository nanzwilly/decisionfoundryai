import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human-in-the-Loop: Why Full Automation Isn't Always the Answer",
  description:
    "The case for keeping humans in control of critical decisions while letting AI handle the heavy lifting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
