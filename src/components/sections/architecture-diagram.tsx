"use client";

import { motion } from "framer-motion";
import {
  Database,
  Mail,
  BarChart3,
  Globe,
  Building2,
  Layers,
  Brain,
  Bot,
  ArrowRight,
  Zap,
  Bell,
  FileBarChart,
  Eye,
  CheckCircle,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const inputs = [
  { icon: Building2, label: "ERP / Finance" },
  { icon: BarChart3, label: "CRM / Sales" },
  { icon: Mail, label: "Email / Docs" },
  { icon: Database, label: "Databases" },
  { icon: Globe, label: "APIs & Feeds" },
];

const engineLayers = [
  {
    icon: Layers,
    title: "Deep Integration",
    subtitle: "Real-time sync · context-aware mapping · secure auth & routing",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-700",
    iconColor: "text-blue-500",
  },
  {
    icon: Brain,
    title: "LLM Layer",
    subtitle: "Reasoning · extraction · classification · generation",
    color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-700",
    iconColor: "text-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Agent",
    subtitle: "Orchestration · decisions · actions · workflow execution",
    color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-700",
    iconColor: "text-indigo-500",
  },
];

const outputs = [
  { icon: Zap, label: "Actions & Updates" },
  { icon: Eye, label: "Insights & Dashboards" },
  { icon: Bell, label: "Notifications & Alerts" },
  { icon: FileBarChart, label: "Reports & Analytics" },
];

const humanSteps = [
  { icon: CheckCircle, title: "Approve data", subtitle: "Before it enters the engine" },
  { icon: ClipboardCheck, title: "Review decisions", subtitle: "Before any action is taken" },
  { icon: ShieldCheck, title: "Validate outputs", subtitle: "Before publishing or acting" },
];

export function ArchitectureDiagram() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary/80">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our automation engine
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your data flows in, AI processes it intelligently, and actions flow out — with humans in control at every critical point.
          </p>
        </div>

        {/* Main architecture: Inputs → Engine → Outputs */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr_1fr]">

          {/* Inputs */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Inputs
            </p>
            {inputs.map((input) => (
              <div
                key={input.label}
                className="flex items-center gap-3 rounded-lg border border-border/50 bg-background px-4 py-3 shadow-sm"
              >
                <input.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm font-medium">{input.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Engine */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Automation Engine
            </p>
            <div className="space-y-3 rounded-2xl border border-blue-200/50 bg-gradient-to-b from-blue-50/50 to-cyan-50/30 p-5 shadow-sm">
              {engineLayers.map((layer) => (
                <div
                  key={layer.title}
                  className={`flex items-center gap-4 rounded-xl border px-5 py-4 ${layer.color}`}
                >
                  <layer.icon className={`h-6 w-6 shrink-0 ${layer.iconColor}`} />
                  <div>
                    <h3 className="text-sm font-bold">{layer.title}</h3>
                    <p className="text-xs opacity-70">{layer.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Flow arrows (desktop) */}
            <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-x-[calc(100%+12px)] -translate-y-1/2 lg:block">
              <ArrowRight className="h-7 w-7 text-muted-foreground/50" />
            </div>
            <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[calc(100%+12px)] lg:block">
              <ArrowRight className="h-7 w-7 text-muted-foreground/50" />
            </div>
          </motion.div>

          {/* Outputs */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Outputs
            </p>
            {outputs.map((output) => (
              <div
                key={output.label}
                className="flex items-center gap-3 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3 shadow-sm"
              >
                <output.icon className="h-4 w-4 shrink-0 text-primary/70" />
                <span className="text-sm font-semibold text-foreground">{output.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Human-in-the-loop */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-dashed border-amber-300/60 bg-amber-50/30 px-6 py-8">
            <div className="mb-6 text-center">
              <h3 className="text-lg font-bold">Human-in-the-Loop</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Configurable approval gates — keep humans in control of every critical decision
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {humanSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-background px-4 py-4 shadow-sm"
                >
                  <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <h4 className="text-sm font-semibold">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
