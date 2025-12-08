import { Metadata } from "next";
import { PAGE_METADATA, FAQ_DATA, FAQ_SCHEMA } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: PAGE_METADATA.faq?.title || "FAQ | Zebra IPTV",
  description: PAGE_METADATA.faq?.description || "Find answers to frequently asked questions about Zebra IPTV.",
  alternates: {
    canonical: PAGE_METADATA.faq?.canonical || "https://zebraiptv.com/faq",
  },
};

const categories = [
  {
    title: "Getting Started",
    questions: FAQ_DATA.slice(0, 3),
  },
  {
    title: "Features & Functionality",
    questions: FAQ_DATA.slice(3, 5),
  },
  {
    title: "Technical",
    questions: FAQ_DATA.slice(5),
  },
];

export default function FaqPage() {
  // Structured data for FAQ
  const faqStructuredData = FAQ_SCHEMA;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Everything you need to know about Zebra IPTV. Can't find what you're
                looking for? Feel free to contact our support team.
              </p>
            </div>

            {/* All FAQs */}
            <div className="max-w-3xl mx-auto mb-16">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {FAQ_DATA.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-base md:text-lg font-semibold pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Popular Topics */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Popular Topics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="#getting-started"
                  className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                  <h3 className="text-xl font-bold mb-2">Getting Started</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to set up and use Zebra IPTV
                  </p>
                </Link>

                <Link
                  href="#features"
                  className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold mb-2">Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover all the powerful features
                  </p>
                </Link>

                <Link
                  href="#technical"
                  className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    🔧
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Troubleshooting and technical help
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="w-full py-16 md:py-24 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our support team is ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/"
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">User Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guide to using all features
                </p>
              </Link>

              <Link
                href="/download"
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">Download</h3>
                <p className="text-sm text-muted-foreground">
                  Get Zebra IPTV for your device
                </p>
              </Link>

              <Link
                href="/about"
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">About Us</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about Zebra IPTV
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

