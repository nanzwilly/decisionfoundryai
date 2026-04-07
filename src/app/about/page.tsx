"use client";

import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const executiveTeam = [
  { name: "Seby Kallarakkal", title: "Chief Executive Officer", photo: "/team/seby.png" },
  { name: "Anoop Nagendra", title: "President", photo: "/team/anoop.png" },
  { name: "Asheel Monteiro", title: "SVP - Delivery and Client Success", photo: "/team/asheel.png" },
  { name: "Praveen Dalal", title: "SVP - People Functions", photo: "/team/praveen.png" },
];

const leadershipTeam = [
  { name: "Lijindev Keloth", title: "Director of Data Engineering", photo: "/team/lijindev.png" },
  { name: "Swaroop Thomas", title: "Director of BI", photo: "/team/swaroop.png" },
  { name: "Sridhar Vishwanathan", title: "Director of Salesforce Practice", photo: "/team/sridhar.png" },
  { name: "Caeleb Young", title: "Director of Sales", photo: "/team/caeleb.png" },
  { name: "Yolanda Caissie", title: "Director of Project Management", photo: "/team/yolanda.png" },
];

function TeamMember({ name, title, photo }: { name: string; title: string; photo: string }) {
  return (
    <Card className="border-border/50 text-center">
      <CardContent className="pt-6">
        <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-primary/10">
          <Image
            src={photo}
            alt={name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About"
        highlight="Decision Foundry."
        description="Decision Foundry AI is the Agentic AI Studio at Decision Foundry — bringing the power of autonomous AI agents to automate and streamline your business processes."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      {/* Intro Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
              Our Mission
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              We turn your data into decisions.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Decision Foundry AI is the Agentic AI Studio at{" "}
              <a
                href="https://decisionfoundry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                Decision Foundry
              </a>
              , a certified Salesforce consulting partner and managed services
              provider founded in 2016. Built on years of expertise in data
              engineering, business intelligence, and enterprise systems, our AI
              division focuses on building agentic AI applications that automate
              and streamline business processes — either fully autonomous or with
              a human in the loop.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border/50 p-6">
              <h3 className="font-semibold">Delivery Commitment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We sign it. We deliver it. A promise to fulfill commitments
                without exception.
              </p>
            </div>
            <div className="rounded-lg border border-border/50 p-6">
              <h3 className="font-semibold">Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mutual accountability between team members, ensuring delivery on
                stated objectives.
              </p>
            </div>
            <div className="rounded-lg border border-border/50 p-6">
              <h3 className="font-semibold">Collaborative Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Balancing knowledge-sharing with humility — always willing to
                raise concerns or extend help.
              </p>
            </div>
            <div className="rounded-lg border border-border/50 p-6">
              <h3 className="font-semibold">One Global Team</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                One cohesive organization with no regional silos or internal
                politics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Executive Team */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Executive Team
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executiveTeam.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Leadership Team
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want to work with us?"
        description="Tell us about the process you want to automate and let's explore how AI agents can help."
        cta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
