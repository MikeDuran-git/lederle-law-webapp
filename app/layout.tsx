import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { FloatingContact } from '@/components/floating-contact'
import { CookieConsent } from '@/components/cookie-consent'
import { defaultMetadata, structuredData } from '@/lib/seo-config'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
        />
        <link rel="alternate" hrefLang="de" href="https://lederlelaw.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={`${playfair.variable} font-serif`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <FloatingContact />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}