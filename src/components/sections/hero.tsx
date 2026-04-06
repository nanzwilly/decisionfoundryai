"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  backgroundClass?: string;
  large?: boolean;
}

export function Hero({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundClass,
  large,
}: HeroProps) {
  const isDark = !!(backgroundImage || backgroundClass);

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "flex items-center min-h-[480px] py-24 sm:py-32",
        isDark
          ? (backgroundClass || "bg-gray-950")
          : "bg-gradient-to-b from-background to-muted/30"
      )}
    >
      {/* Background image with dark overlay */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
        </>
      )}

      {/* Grid pattern (only for light variant) */}
      {!isDark && (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      )}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge && (
            <span
              className={cn(
                "mb-4 inline-block rounded-full border px-4 py-1.5 text-sm font-medium",
                isDark
                  ? "border-white/20 bg-white/10 text-white/90"
                  : "border-border bg-background text-muted-foreground"
              )}
            >
              {badge}
            </span>
          )}
          <h1
            className={cn(
              large
                ? "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                : "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
              isDark && "text-white"
            )}
          >
            {title}{" "}
            {highlight && (
              <span
                className={cn(
                  "bg-clip-text text-transparent",
                  isDark
                    ? "bg-gradient-to-r from-blue-300 to-cyan-300"
                    : "bg-gradient-to-r from-primary to-primary/60"
                )}
              >
                {highlight}
              </span>
            )}
          </h1>
          <p
            className={cn(
              large ? "mt-6 text-lg leading-8 sm:text-xl" : "mt-4 text-base leading-7 sm:text-lg",
              isDark ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className={cn(
                    isDark
                      ? "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-white px-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-white/90"
                      : buttonVariants({ size: "lg" })
                  )}
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    isDark
                      ? "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-white/30 px-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                      : buttonVariants({ variant: "outline", size: "lg" })
                  )}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
