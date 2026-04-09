import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Manual to Automated: An AP Processing Transformation",
  description:
    "How we reduced invoice processing time from days to minutes using AI agents with human review workflows.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
