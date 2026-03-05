import type { Metadata } from 'next';
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

  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
