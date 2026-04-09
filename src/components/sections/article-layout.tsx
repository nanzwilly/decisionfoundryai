"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";

interface ArticleLayoutProps {
  category: string;
  title: string;
  date: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  category,
  title,
  date,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Resources
          </Link>

          <div className="mb-8 flex items-center gap-3">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

          <div className="mt-10 prose prose-gray max-w-none [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>p]:mb-4 [&>p]:leading-7 [&>p]:text-muted-foreground [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul]:list-disc [&>ul>li]:text-muted-foreground [&>ul>li]:leading-7 [&>ol]:mb-4 [&>ol]:space-y-2 [&>ol]:pl-6 [&>ol]:list-decimal [&>ol>li]:text-muted-foreground [&>ol>li]:leading-7 [&>blockquote]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-primary/30 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>hr]:my-10 [&>hr]:border-border">
            {children}
          </div>
        </div>
      </article>

      <CtaSection
        title="Ready to automate your processes?"
        description="Tell us about the manual work slowing your team down."
        cta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
