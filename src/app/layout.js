
import './globals.css'

import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Script from 'next/script'

import Head from 'next/head'
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://iowned.net"),
  title: {
    default: "IOWNED",
    template: `%s | Explorer`,
  },
  description: "Explore the latest posts and blogs about Technology .",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#1613c8fa"/>

      {/* <Script strategy="afterInteractive" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2588057035083565"
        crossorigin="anonymous" /> */}

      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-KF2YHS83E6" />
      <Script async custom-element="amp-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js" />
      <Head>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KF2YHS83E6');
            `,
          }}
        />



      </Head>
      <body className={` ${inter.className} bg-lightTheme-bg`}>
        <amp-auto-ads type="adsense"
          data-ad-client="ca-pub-2588057035083565" >
        </amp-auto-ads>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />

            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
