"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const resources = [
  {
    category: "Guide",
    title: "What Is Agentic AI? A Practical Guide for Business Leaders",
    description:
      "Move beyond chatbots. Understand what AI agents are, how they work, and where they deliver real ROI in business processes.",
    slug: "what-is-agentic-ai",
    date: "April 2025",
  },
  {
    category: "Article",
    title: "Human-in-the-Loop: Why Full Automation Isn't Always the Answer",
    description:
      "The case for keeping humans in control of critical decisions while letting AI handle the heavy lifting.",
    slug: "human-in-the-loop",
    date: "April 2025",
  },
  {
    category: "Case Study",
    title: "From Manual to Automated: An AP Processing Transformation",
    description:
      "How we reduced invoice processing time from days to minutes using AI agents with human review workflows.",
    slug: "ap-processing-transformation",
    date: "March 2025",
  },
  {
    category: "Article",
    title: "Integrating AI Agents with Legacy Systems like NetSuite and EPIC",
    description:
      "Practical lessons from connecting modern AI automation to established enterprise platforms.",
    slug: "integrating-ai-with-legacy-systems",
    date: "March 2025",
  },
  {
    category: "Guide",
    title: "Is Your Process Ready for AI Automation? A Checklist",
    description:
      "Not every process is a good fit for AI automation. Here's how to evaluate which ones will deliver the most value.",
    slug: "ai-automation-readiness-checklist",
    date: "February 2025",
  },
  {
    category: "Article",
    title: "Call Quality at Scale: Moving Beyond 3% Sample Reviews",
    description:
      "Why AI-powered call monitoring is replacing manual sampling — and what it means for agent performance.",
    slug: "call-quality-at-scale",
    date: "February 2025",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Insights on"
        highlight="AI automation."
        description="Practical thinking on agentic AI, process automation, and building AI solutions that work in the real world."
        backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group"
              >
                <Card className="h-full border-border/50 transition-all hover:border-border hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {resource.date}
                      </span>
                    </div>
                    <CardTitle className="mt-2 flex items-center gap-2 text-lg leading-snug">
                      {resource.title}
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want to discuss your automation project?"
        description="We'd love to hear about the processes you're looking to streamline."
        cta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
