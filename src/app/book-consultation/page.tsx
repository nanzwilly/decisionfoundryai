"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, Clock, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    text: "30-minute discovery call",
  },
  {
    icon: MessageSquare,
    text: "Discuss your specific process and pain points",
  },
  {
    icon: CheckCircle,
    text: "Get an honest assessment of automation potential",
  },
  {
    icon: Mail,
    text: "Receive a follow-up with next steps",
  },
];

export default function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="flex flex-1 items-center justify-center py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Thank you!</h1>
          <p className="mt-3 text-muted-foreground">
            We&apos;ve received your inquiry and will be in touch within one
            business day to schedule your consultation.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0f1b3d] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Heading + Benefits */}
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s talk about your{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                automation project.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Tell us about the manual process slowing your team down.
              We&apos;ll give you an honest assessment of whether AI automation
              is the right fit.
            </p>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-white">
                What to expect
              </h2>
              <p className="mt-2 text-white/60">
                A no-pressure conversation to understand your process and
                explore how AI agents could help.
              </p>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <benefit.icon className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="pt-1 text-sm text-white/80">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="border-white/10 bg-white shadow-2xl">
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input id="name" name="name" required />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Work email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Phone number
                  </label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Company
                  </label>
                  <Input id="company" name="company" required />
                </div>

                <div>
                  <label
                    htmlFor="process"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    What process would you like to automate?
                  </label>
                  <Textarea
                    id="process"
                    name="process"
                    rows={4}
                    placeholder="Describe the manual process you're looking to streamline..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request a Consultation
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We&apos;ll respond within one business day. No spam, ever.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
