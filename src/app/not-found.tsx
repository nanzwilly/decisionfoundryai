import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <div className="mx-auto max-w-md px-4 text-center">
        <p className="text-7xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
