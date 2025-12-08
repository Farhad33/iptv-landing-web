"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/lib/constants";

const FaqSection = () => {
  return (
    <section
      className="w-full py-16 md:py-24 relative overflow-hidden"
      data-section="faq"
      id="faq"
      aria-labelledby="faq-title"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-faq-header>
          <h2
            id="faq-title"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know
            about Zebra IPTV.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto" data-faq-list>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
                data-faq-item
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

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16" data-faq-cta>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg"
          >
            Contact our support team
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

