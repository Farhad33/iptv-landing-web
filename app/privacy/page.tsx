import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Learn how ${SITE_CONFIG.name} collects, uses, and protects your personal information. Read our comprehensive privacy policy.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

const lastUpdated = "December 8, 2025";

export default function PrivacyPage() {
  return (
    <main className="w-full">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              At Zebra IPTV, we are committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our
              application and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Create an account or register for our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer support</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Usage Information</h3>
            <p className="text-muted-foreground mb-4">
              We automatically collect certain information when you use our app, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Device information (model, operating system, unique identifiers)</li>
              <li>Usage data (features used, viewing history, preferences)</li>
              <li>Performance data (app crashes, errors, loading times)</li>
              <li>Network information (IP address, connection type)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>To provide and maintain our services</li>
              <li>To improve and personalize your experience</li>
              <li>To communicate with you about updates and features</li>
              <li>To provide customer support</li>
              <li>To detect and prevent technical issues</li>
              <li>To analyze usage patterns and trends</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Storage and Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage facilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share your information only in
              the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>With your consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service providers:</strong> With trusted third parties who assist in operating our services</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data portability:</strong> Receive your data in a structured format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your experience.
              You can control cookie settings through your browser preferences. Note that
              disabling cookies may affect some functionality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for children under 13 years of age. We do not
              knowingly collect personal information from children. If you believe we have
              collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than
              your own. We ensure appropriate safeguards are in place to protect your
              information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the "Last
              Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: privacy@zebraiptv.com</li>
              <li>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20">
          <p className="text-sm text-muted-foreground">
            By using Zebra IPTV, you agree to the collection and use of information in
            accordance with this Privacy Policy. If you do not agree with this policy,
            please do not use our services.
          </p>
        </div>
      </div>
    </main>
  );
}

