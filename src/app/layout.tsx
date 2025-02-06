import type { Metadata } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import siteConfig from '@/config/siteConfig.json';
import Script from 'next/script';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.siteDescription,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="handle-extensions" strategy="beforeInteractive">
          {`
            // Remove Grammarly attributes that cause hydration issues
            window.addEventListener('load', function() {
              const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  if (mutation.type === 'attributes') {
                    const node = mutation.target;
                    if (node.hasAttribute('data-gr-ext-installed')) {
                      node.removeAttribute('data-gr-ext-installed');
                    }
                    if (node.hasAttribute('data-new-gr-c-s-check-loaded')) {
                      node.removeAttribute('data-new-gr-c-s-check-loaded');
                    }
                  }
                });
              });

              observer.observe(document.body, {
                attributes: true,
                subtree: true,
                childList: true,
                attributeFilter: ['data-gr-ext-installed', 'data-new-gr-c-s-check-loaded']
              });
            });
          `}
        </Script>
      </head>
      <body 
        className={`${manrope.variable} ${cormorant.variable} min-h-screen bg-gray-50 font-sans antialiased`}
        suppressHydrationWarning
      >
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
