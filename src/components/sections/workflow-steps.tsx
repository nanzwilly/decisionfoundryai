"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WorkflowStepsProps {
  label?: string;
  title: string;
  description?: string;
  steps: Step[];
}

export function WorkflowSteps({
  label,
  title,
  description,
  steps,
}: WorkflowStepsProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {label && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary/80">
              {label}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connector line */}
          <div className="absolute left-[1.65rem] top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="relative z-10 flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center rounded-xl border bg-background shadow-sm">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
