"use client";

import Link from "next/link";
import { ArrowRight, FileText, PhoneCall, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    icon: FileText,
    industry: "Financial Services",
    title: "Automating Invoice Processing for a Mid-Market Company",
    challenge:
      "A growing company was processing hundreds of invoices monthly through manual data entry into NetSuite, leading to delays and errors.",
    solution:
      "We built an AI agent that monitors an email inbox, extracts invoice data, routes to human reviewers, and pushes approved invoices to NetSuite automatically.",
    results: [
      "Invoice processing time reduced from days to minutes",
      "Manual data entry eliminated for 85%+ of invoices",
      "Error rate dropped significantly with AI extraction + human review",
    ],
    href: "/solutions/accounts-payable",
  },
  {
    icon: PhoneCall,
    industry: "Contact Center",
    title: "100% Call Quality Coverage for a Customer Service Team",
    challenge:
      "A contact center was only able to manually review 3% of calls, missing quality issues and making coaching inconsistent.",
    solution:
      "We deployed an AI agent that analyzes every call recording against custom quality rules, scores each call, and generates specific coaching suggestions.",
    results: [
      "Moved from 3% to 100% call coverage",
      "Consistent scoring eliminated evaluator bias",
      "Agent performance improved through targeted, timely feedback",
    ],
    href: "/solutions/call-quality",
  },
  {
    icon: ShieldCheck,
    industry: "Insurance",
    title: "Automating Certificate of Insurance Requests via EPIC",
    challenge:
      "An insurance firm received high volumes of email requests for certificates, name changes, and policy edits — all requiring manual action in EPIC.",
    solution:
      "We built an AI agent that reads customer emails, detects intent, and performs the appropriate actions on the EPIC insurance platform automatically.",
    results: [
      "Certificate generation time reduced from hours to minutes",
      "Email backlog eliminated with 24/7 automated processing",
      "Staff freed to focus on complex underwriting tasks",
    ],
    href: "/solutions/certificate-of-insurance",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title="AI automation"
        highlight="in production."
        description="These aren't proof-of-concepts. These are AI agents running in production, processing real data, and delivering real results."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <study.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary">{study.industry}</Badge>
                </div>
                <CardTitle className="mt-2 text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Challenge</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Solution</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Results</h4>
                  <ul className="mt-1 space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={study.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn more about this solution
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection
        title="Want results like these?"
        description="Tell us about the process you want to automate and we'll show you what's possible."
        cta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
