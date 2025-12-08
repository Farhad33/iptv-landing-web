import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `Read the terms and conditions for using ${SITE_CONFIG.name}. Understand your rights and responsibilities.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

const lastUpdated = "December 8, 2025";

export default function TermsPage() {
  return (
    <main className="w-full">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Zebra IPTV (the &ldquo;Service&quot;), you agree to be bound by
              these Terms of Service (&ldquo;Terms&quot;). If you disagree with any part of these
              terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Description of Service</h2>
            <p className="text-muted-foreground mb-4">
              Zebra IPTV is an IPTV player application that allows users to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Stream content from their own M3U playlists</li>
              <li>Connect to Xtream Codes API services</li>
              <li>Manage and organize their content sources</li>
              <li>Access features like continue watching and favorites</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Important:</strong> Zebra IPTV is a player application only. We do
              not provide, host, or distribute any content. Users are responsible for
              ensuring they have the legal right to access any content they stream.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a user of Zebra IPTV, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use the Service only for lawful purposes</li>
              <li>Not use the Service to access pirated or unauthorized content</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not attempt to reverse engineer or hack the application</li>
              <li>Not distribute malware or harmful code through the Service</li>
              <li>Not impersonate others or misrepresent your affiliation</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Content Disclaimer</h2>
            <p className="text-muted-foreground">
              Zebra IPTV is a neutral technology platform. We do not control, monitor, or
              have any responsibility for the content accessed through our application.
              Users are solely responsible for ensuring they have legal authorization to
              access any content. We do not endorse or support piracy or copyright
              infringement in any form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Account and Security</h2>
            <p className="text-muted-foreground mb-4">
              If you create an account with us, you are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Providing accurate and complete information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Service and its original content, features, and functionality are owned
              by Zebra IPTV and are protected by international copyright, trademark,
              patent, trade secret, and other intellectual property laws. You may not
              copy, modify, distribute, sell, or lease any part of our Service without
              explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide reliable service but cannot guarantee:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Uninterrupted or error-free operation</li>
              <li>That defects will be corrected immediately</li>
              <li>That the Service will meet all your requirements</li>
              <li>Availability during maintenance or updates</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We reserve the right to modify, suspend, or discontinue any part of the
              Service at any time with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Zebra IPTV shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of profits, data, or other intangible
              losses resulting from your use or inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold harmless Zebra IPTV and its affiliates from
              any claims, damages, losses, liabilities, and expenses arising from your use
              of the Service, violation of these Terms, or infringement of any rights of
              another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend your account and access to the
              Service immediately, without prior notice or liability, for any reason,
              including breach of these Terms. Upon termination, your right to use the
              Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Privacy</h2>
            <p className="text-muted-foreground">
              Your use of the Service is also governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . Please review it to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with applicable
              laws, without regard to conflict of law provisions. Any disputes arising from
              these Terms or the Service shall be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will notify users
              of any material changes by posting the new Terms on this page and updating
              the &quot;Last Updated&quot; date. Your continued use of the Service after such
              changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: legal@zebraiptv.com</li>
              <li>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Severability</h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be unenforceable or invalid,
              that provision will be limited or eliminated to the minimum extent necessary
              so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20">
          <p className="text-sm text-muted-foreground">
            By using Zebra IPTV, you acknowledge that you have read, understood, and agree
            to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </main>
  );
}

