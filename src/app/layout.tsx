import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import siteConfig from '@/config/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} — Trusted Two-Wheeler Showroom in Karapattu`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: `${siteConfig.businessName} — Trusted Two-Wheeler Showroom in Karapattu`,
    description: siteConfig.description,
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.businessName,
    images: siteConfig.ogImage ? [{ url: siteConfig.ogImage }] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.businessName} — Trusted Two-Wheeler Showroom in Karapattu`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: siteConfig.businessName,
              description: siteConfig.description,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.branches[0]?.address,
                addressLocality: siteConfig.branches[0]?.city,
                addressRegion: siteConfig.branches[0]?.state,
                postalCode: siteConfig.branches[0]?.pincode,
                addressCountry: 'IN',
              },
              telephone: siteConfig.primaryPhone,
              url: siteConfig.url,
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F4F7FC] text-[#172033] min-h-screen flex flex-col">
        {/* Consistent Top Header across all pages */}
        <Header />

        {/* Page Content with safe padding for mobile bottom bar */}
        <main className="flex-1 pb-24 md:pb-0">
          {children}
        </main>

        {/* Consistent Footer across all pages */}
        <Footer />

        {/* Mobile Fixed 4-Action Bottom Navigation */}
        <MobileActionBar />
      </body>
    </html>
  );
}
