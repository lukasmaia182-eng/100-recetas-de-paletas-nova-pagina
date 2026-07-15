import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const META_PIXEL_ID = '1816178736411720'
const META_PIXEL_ID_BACKUP = '27589484377368937'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: '100 Paletas Rellenas y Cremosas',
  description:
    '100 recetas de paletas rellenas y cremosas listas para preparar, servir o vender. Ilustradas paso a paso, incluso para principiantes.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e94b64',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${baloo.variable} ${nunito.variable} ${playfair.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('init', '${META_PIXEL_ID_BACKUP}');
fbq('track', 'PageView');`}
        </Script>
        <Script id="lowtrack-pixel" strategy="afterInteractive">
          {`window.pixelId = "lt_px_e4d1c6519ccf";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://lowtrack.com.br/pixel.js");
document.head.appendChild(a);`}
        </Script>
        <Script id="lowtrack-pixel-backup" strategy="afterInteractive">
          {`window.pixelId = "lt_px_a03f6067ad30";
var b = document.createElement("script");
b.setAttribute("async", "");
b.setAttribute("defer", "");
b.setAttribute("src", "https://lowtrack.com.br/pixel.js");
document.head.appendChild(b);`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID_BACKUP}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
