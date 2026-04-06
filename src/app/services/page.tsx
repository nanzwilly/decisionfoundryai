"use client";

import {
  Bot,
  Users,
  Plug,
  Eye,
  Workflow,
  Settings,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaSection } from "@/components/sections/cta-section";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Development",
    description:
      "We build autonomous AI agents that can reason, make decisions, and execute multi-step workflows specific to your business.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "End-to-end automation of manual, repetitive business processes — from data extraction and classification to system updates.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Workflows",
    description:
      "Configurable approval and review stages that keep your team in control of critical decisions while the AI handles the rest.",
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Deep integration with your existing platforms — ERPs, CRMs, email systems, insurance platforms, and custom applications.",
  },
  {
    icon: Eye,
    title: "Monitoring & Analytics",
    description:
      "Real-time dashboards, accuracy tracking, and performance analytics so you always know how your AI agents are performing.",
  },
  {
    icon: Settings,
    title: "Ongoing Support & Optimization",
    description:
      "Continuous improvement of your AI agents as your processes evolve, with dedicated support and regular optimization cycles.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="AI automation services built around"
        highlight="your processes."
        description="We don't sell a one-size-fits-all platform. We study your workflows, build custom AI agents, and integrate them into your existing systems."
        primaryCta={{ label: "Contact Us", href: "/book-consultation" }}
        secondaryCta={{ label: "How We Work", href: "/how-we-work" }}
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      />

      <FeatureGrid
        label="What We Do"
        title="End-to-end AI automation"
        description="From discovery to deployment and beyond — we handle the full lifecycle of building AI agents for your business."
        features={services}
        columns={3}
      />

      <CtaSection
        title="Have a process you want to automate?"
        description="We'll map your workflow, identify automation opportunities, and show you exactly how AI agents can streamline it."
        cta={{ label: "Let's Talk", href: "/book-consultation" }}
      />
    </>
  );
}
