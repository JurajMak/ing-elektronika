import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Providers from '@/components/providers';
import Footer from '@/components/footer';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ing-Elektronika',
  description: 'Servis elektroničke opremen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>
          <Header />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
