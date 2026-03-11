import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Üreticiden Uygun Fiyatlı Zeytinyağı | Zeytinyağı Liderden Alınır | Lider Zeytincilik',
    template: '%s | Lider Zeytincilik',
  },
  description: siteConfig.description,
  keywords: [
    'zeytinyağı', 'sızma zeytinyağı', 'soğuk sıkım zeytinyağı', 'natürel sızma zeytinyağı',
    'zeytinyağı üretici', 'zeytinyağı toptancı', 'zeytinyağı tedarikçi',
    'toptan zeytinyağı', '5 lt zeytinyağı', '10 lt zeytinyağı',
    'Aydın zeytinyağı', 'Akhisar zeytinyağı', 'Ege zeytinyağı',
    'organik zeytinyağı', 'riviera zeytinyağı',
    'üreticiden uygun fiyatlı zeytinyağı', 'zeytinyağı liderden alınır',
    'fabrika satış zeytinyağı', 'toptan zeytinyağı fiyatları',
    'erken hasat zeytinyağı', 'polifenol zeytinyağı',
    'İstanbul zeytinyağı', 'Ankara zeytinyağı', 'İzmir zeytinyağı',
    'Bursa zeytinyağı', 'Antalya zeytinyağı', 'Konya zeytinyağı',
    'zeytinyağı toptan satış', 'etiketsiz zeytinyağı',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Üreticiden Uygun Fiyatlı Zeytinyağı | Lider Zeytincilik',
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Lider Zeytincilik' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Üreticiden Uygun Fiyatlı Zeytinyağı | Lider Zeytincilik',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aydın',
      addressCountry: 'TR',
    },
    foundingDate: String(siteConfig.foundingYear),
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      availableLanguage: 'Turkish',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'tr-TR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2d5016" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9VV2S1E04B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9VV2S1E04B');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
