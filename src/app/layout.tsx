import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import siteConfig from '@/config/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import { LanguageProvider } from '@/context/LanguageContext';

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
  keywords: [
    'Mithra Motors',
    'Mithra Motors Karapattu',
    'Multi Brand Two Wheeler Showroom Krishnagiri',
    'Two Wheeler Showroom Near Barath Pump',
    'Two Wheeler Showroom Uthangarai',
    'Second Hand Motorcycle Dealers Krishnagiri',
    'Second Hand Two Wheeler Exchange Karapattu',
    'Motorcycle Dealers-Hero',
    'Motorcycle Dealers-TVS',
    'Motorcycle Dealers-Bajaj',
    'Motorcycle Dealers-Yamaha',
    'Motorcycle Dealers-Honda',
    'Motorcycle Dealers-Suzuki',
    'Hero Bikes Karapattu',
    'TVS Showroom Karapattu',
    'Komaki Electric Scooter Krishnagiri',
    'BGauss Electric Scooter Karapattu',
    'Hero TVS Spare Parts Karapattu',
    'Two Wheeler Tyre Battery Oil Shop Karapattu',
    'Two Wheeler Service Center Karapattu',
  ],
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
              telephone: `+91${siteConfig.whatsappNumber}`,
              url: siteConfig.url,
              sameAs: [
                siteConfig.googleMapsUrl,
                'https://www.justdial.com/Krishnagiri/Mithra-Motors-Multi-Brand-Two-Wheeler-Showroom-Near-Bharat-Prtrol-Pump-Kunnathur/9999P4343-4343-251108102753-K1T1_BZDET',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F4F7FC] text-[#172033] min-h-screen flex flex-col">
        {/* Optional Google Analytics (set NEXT_PUBLIC_GA_ID in Vercel Env Vars) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}

        {/* Optional Meta Pixel (set NEXT_PUBLIC_META_PIXEL_ID in Vercel Env Vars) */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${process.env.NEXT_PUBLIC_META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}

        <LanguageProvider>
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
        </LanguageProvider>
      </body>
    </html>
  );
}
