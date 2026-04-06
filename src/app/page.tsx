"use client";

import {
  Bot,
  Users,
  Zap,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaSection } from "@/components/sections/cta-section";

const capabilities = [
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Purpose-built AI agents that understand your processes, make decisions, and take action — not just chatbots.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description:
      "Configurable approval workflows that keep humans in control of critical decisions while automating the rest.",
  },
  {
    icon: Zap,
    title: "System Integration",
    description:
      "Deep integration with your existing platforms — NetSuite, EPIC, CRMs, email systems, and more.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        badge="Agentic AI for Business"
        title="Smart AI agents to automate your"
        highlight="business processes."
        description="We build AI solutions faster than you can sign the agreement. While others are still scoping, we're already delivering production-ready automation."
        primaryCta={{ label: "Contact Us", href: "/book-consultation" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
        backgroundImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80"
        large
      />

      <FeatureGrid
        label="Capabilities"
        title="How we approach automation"
        description="We don't sell a platform. We build custom AI agents tailored to your specific workflows and systems."
        features={capabilities}
      />

      <CtaSection
        title="Ready to automate a process?"
        description="Tell us about the manual, repetitive work slowing your team down. We'll show you how AI agents can handle it."
        cta={{ label: "Contact Us", href: "/book-consultation" }}
      />
    </>
  );
}
