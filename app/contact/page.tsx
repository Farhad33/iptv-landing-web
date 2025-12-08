import { Metadata } from "next";
import { PAGE_METADATA, CONTACT_INFO, SOCIAL_MEDIA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  alternates: {
    canonical: PAGE_METADATA.contact.canonical,
  },
};

const contactMethods = [
  {
    icon: "mdi:email",
    title: "Email Support",
    description: "Get help via email",
    value: CONTACT_INFO.supportEmail,
    href: `mailto:${CONTACT_INFO.supportEmail}`,
  },
  {
    icon: "mdi:chat",
    title: "Live Chat",
    description: "Chat with our team",
    value: "Available 24/7",
    href: "#",
  },
  {
    icon: "mdi:twitter",
    title: "Twitter",
    description: "Follow us on Twitter",
    value: "@zebraiptv",
    href: SOCIAL_MEDIA[0].href,
  },
];

export default function ContactPage() {
  return (
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have a question or need support? We're here to help. Reach out to us
              through any of the methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="rounded-3xl bg-background/50 backdrop-blur-sm border border-border p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition-colors"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-background/50 backdrop-blur-sm border border-border p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-background/80 transition-colors"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="text-3xl text-primary flex-shrink-0">
                        <Icon icon={method.icon} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-primary">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3">Looking for Quick Answers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <Button variant="outline" asChild>
                  <a href="/#faq">View FAQ</a>
                </Button>
              </div>

              {/* Social Media */}
              <div className="rounded-3xl bg-background/50 backdrop-blur-sm border border-border p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3 flex-wrap">
                  {SOCIAL_MEDIA.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.ariaLabel}
                    >
                      <Icon icon={social.icon} className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="w-full py-12 md:py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-muted-foreground">24/7 - We respond within 24 hours</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

