export const siteConfig = {
  name: "Decision Foundry AI",
  domain: "decisionfoundry.ai",
  parentDomain: "decisionfoundry.com",
  description:
    "We build AI agents that automate your business processes. Agentic AI solutions with human-in-the-loop workflows.",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Contact Us", href: "/contact" },
  footer: {
    services: [
      { label: "How We Work", href: "/how-we-work" },
      { label: "Industries", href: "/industries" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      {
        label: "Contact",
        href: "https://decisionfoundry.com/contact",
        external: true,
      },
      {
        label: "Careers",
        href: "https://decisionfoundry.com/careers",
        external: true,
      },
    ],
    resources: [
      { label: "Blog", href: "/resources" },
      { label: "Case Studies", href: "/case-studies" },
    ],
    legal: [
      {
        label: "Privacy Policy",
        href: "https://decisionfoundry.com/privacy",
        external: true,
      },
      {
        label: "Terms of Service",
        href: "https://decisionfoundry.com/terms",
        external: true,
      },
    ],
  },
} as const;
