import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { businessInfo } from '@/data/business';

export const metadata = {
  metadataBase: new URL('https://www.communitydentistsoflowell.com'),
  title: {
    default: 'Community Dentists of Lowell | Dr. Mary Scannell, DMD',
    template: '%s | Community Dentists of Lowell',
  },
  description:
    'Dare to have the smile you’ve always wanted. Community Dentists of Lowell, led by Dr. Mary Scannell, provides personalized, gentle, and high-standard family dental care in Lowell, MA.',
  keywords: [
    'Community Dentists of Lowell',
    'Dr. Mary Scannell',
    'Dentist Lowell MA',
    'Lowell Massachusetts Dentist',
    'Gorham Street Dental',
    'Dental Cleanings Lowell',
    'Restorative Dentistry Lowell',
    'Family Dentistry Lowell',
    'Gentle Dentist Lowell'
  ],
  authors: [{ name: 'Dr. Mary Scannell, DMD' }],
  creator: 'Community Dentists of Lowell',
  publisher: 'Community Dentists of Lowell',
  openGraph: {
    title: 'Community Dentists of Lowell | Dr. Mary Scannell, DMD',
    description:
      'Dare to have the smile you’ve always wanted. Personalized, gentle, and conservative dental care in Lowell, MA.',
    url: 'https://www.communitydentistsoflowell.com',
    siteName: 'Community Dentists of Lowell',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // LocalBusiness structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: businessInfo.name,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://www.communitydentistsoflowell.com',
    url: 'https://www.communitydentistsoflowell.com',
    telephone: businessInfo.contact.phone,
    email: businessInfo.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.contact.address.street,
      addressLocality: businessInfo.contact.address.city,
      addressRegion: businessInfo.contact.address.state,
      postalCode: businessInfo.contact.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.608031,
      longitude: -71.306023,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    employee: {
      '@type': 'Person',
      name: businessInfo.doctor.name,
      jobTitle: businessInfo.doctor.title,
      alumniOf: 'Boston University Henry M. Goldman School of Dental Medicine',
    },
    medicalSpecialty: 'Dentistry',
    slogan: businessInfo.tagline,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50/50 text-dental-navy antialiased selection:bg-dental-blue-500 selection:text-white">
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

