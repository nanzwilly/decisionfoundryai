"use client";

import {
  Landmark,
  ShieldCheck,
  Headphones,
  Building2,
  HeartPulse,
  Truck,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaSection } from "@/components/sections/cta-section";

const industries = [
  {
    icon: ShieldCheck,
    title: "Insurance",
    description:
      "Automate certificate generation, policy modifications, claims intake, and document processing across platforms like EPIC.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Streamline accounts payable, invoice processing, reconciliation, and compliance workflows with human-in-the-loop AI.",
  },
  {
    icon: Headphones,
    title: "Contact Centers",
    description:
      "Monitor 100% of calls, automate quality scoring, and deliver AI-generated coaching suggestions to improve agent performance.",
  },
  {
    icon: Building2,
    title: "Professional Services",
    description:
      "Automate document intake, data extraction, client onboarding, and internal approval workflows across your tech stack.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Streamline patient intake forms, insurance verification, appointment scheduling, and administrative processes with AI agents.",
  },
  {
    icon: Truck,
    title: "Logistics & Operations",
    description:
      "Automate order processing, shipment tracking updates, vendor communication, and exception handling across your supply chain.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="AI automation for"
        highlight="your industry."
        description="Every industry has manual processes that slow teams down. We build AI agents that fit your specific workflows, systems, and compliance requirements."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <FeatureGrid
        label="Industries We Serve"
        title="Tailored automation, not generic tools"
        description="We work across industries, but every solution is custom-built for the specific processes and platforms our clients use."
        features={industries}
        columns={3}
      />

      <CtaSection
        title="Don't see your industry?"
        description="If you have a manual process that involves reading data, making decisions, and updating systems — we can probably automate it."
        cta={{ label: "Let's Talk", href: "/contact" }}
      />
    </>
  );
}
