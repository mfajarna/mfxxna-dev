import { AppNavbar } from '@/components/organism/app-navbar';
import { ThemeProvider } from '@/components/theme-providers';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'MFXXNA DEV - Portfolio',
  description: 'Personal portfolio website',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} bg-neutral-950 text-white min-h-screen`}
      >
        <ThemeProvider
          attribute={'class'}
          defaultTheme="dark"
          enableSystem={false}
        >
          <main className="relative pb-16 px-4">
            <AppNavbar />

            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
