import { Metadata } from "next";
import { PAGE_METADATA, PLATFORM_DETAILS, DOWNLOAD_BADGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const metadata: Metadata = {
  title: PAGE_METADATA.download.title,
  description: PAGE_METADATA.download.description,
  alternates: {
    canonical: PAGE_METADATA.download.canonical,
  },
};

export default function DownloadPage() {
  const availablePlatforms = PLATFORM_DETAILS.filter((p) => p.available);
  const comingSoonPlatforms = PLATFORM_DETAILS.filter((p) => !p.available);

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
              Download <span className="text-primary">Zebra IPTV</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get started with the best IPTV player. Available on all your favorite devices.
            </p>
          </div>

          {/* Available Platforms */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Available Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availablePlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className="p-6 rounded-3xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl text-primary">
                      <Icon icon={platform.icon} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {platform.fullName}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {platform.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Version:</span>
                      <span className="font-semibold">{platform.version}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-semibold">{platform.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating:</span>
                      <span className="font-semibold">
                        ⭐ {platform.rating}/5 ({platform.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {platform.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon
                          icon="mdi:check-circle"
                          className="text-primary flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <a href={platform.downloadUrl}>
                      <Icon icon="mdi:download" className="mr-2" />
                      Download for {platform.name}
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-3">
                    {platform.requirements}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          {comingSoonPlatforms.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Coming Soon
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {comingSoonPlatforms.map((platform) => (
                  <div
                    key={platform.id}
                    className="p-6 rounded-3xl bg-background/30 backdrop-blur-sm border border-border opacity-75"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl text-muted-foreground">
                        <Icon icon={platform.icon} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                        <p className="text-sm text-primary">{platform.version}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {platform.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      {platform.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon icon="mdi:clock-outline" className="flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full" size="lg" variant="outline" disabled>
                      <Icon icon="mdi:clock-outline" className="mr-2" />
                      Coming Soon
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Installation Guide */}
      <section className="w-full py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Quick Installation Guide
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Choose Your Platform</h3>
                  <p className="text-muted-foreground">
                    Select the download button for your device from the options above.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Install the App</h3>
                  <p className="text-muted-foreground">
                    Follow your device's standard installation process. The app will guide you through.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Add Your Content</h3>
                  <p className="text-muted-foreground">
                    Open the app and add your M3U playlist or Xtream Codes credentials to start streaming.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Start Watching</h3>
                  <p className="text-muted-foreground">
                    Browse your content and enjoy streaming with all the premium features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              System Requirements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {availablePlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border"
                >
                  <div className="text-3xl text-primary mb-3">
                    <Icon icon={platform.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.requirements}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="w-full py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Having trouble with installation? Check out our FAQ or contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="/faq">View FAQ</a>
            </Button>
            <Button size="lg" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

