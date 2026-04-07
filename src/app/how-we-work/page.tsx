"use client";

import {
  Search,
  Map,
  Code,
  Rocket,
  BarChart3,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { WorkflowSteps } from "@/components/sections/workflow-steps";
import { CtaSection } from "@/components/sections/cta-section";

const steps = [
  {
    icon: Search,
    title: "1. Discovery",
    description:
      "We start by understanding your current process in detail — the people, systems, pain points, and desired outcomes. No assumptions, just listening.",
  },
  {
    icon: Map,
    title: "2. Process Mapping & Design",
    description:
      "We map the full workflow, identify where AI agents add the most value, and design the automation architecture — including where humans stay in the loop.",
  },
  {
    icon: Code,
    title: "3. Build & Integrate",
    description:
      "We build your custom AI agents and integrate them with your existing systems. Iterative development with your team reviewing at every stage.",
  },
  {
    icon: Rocket,
    title: "4. Deploy & Train",
    description:
      "Controlled rollout into your environment. We train your team on the new workflows and ensure everything runs smoothly before going fully live.",
  },
  {
    icon: BarChart3,
    title: "5. Monitor & Optimize",
    description:
      "Ongoing monitoring, accuracy tracking, and continuous improvement. As your processes evolve, your AI agents evolve with them.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <Hero
        title="A proven approach to"
        highlight="AI automation."
        description="Every engagement follows a structured process designed to deliver working solutions — not prototypes that sit on a shelf."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />

      <WorkflowSteps
        label="Our Process"
        title="From discovery to production"
        description="We move fast, but we don't skip steps. Each phase builds confidence that the final solution will work in the real world."
        steps={steps}
      />

      <CtaSection
        title="Let's start with discovery"
        description="A 30-minute call to understand your process and see if AI automation is the right fit."
        cta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
