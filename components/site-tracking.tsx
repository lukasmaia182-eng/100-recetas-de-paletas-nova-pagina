"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

const META_PIXEL_ID = "1816178736411720"
const META_PIXEL_ID_BACKUP = "27589484377368937"

/**
 * Todos os pixels/scripts globais do site.
 * NÃO são renderizados na rota /pv01, que usa apenas seu próprio pixel dedicado.
 */
export function SiteTracking() {
  const pathname = usePathname()

  if (pathname?.startsWith("/pv01")) return null

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55L8C4KK');`}
      </Script>
      <Script id="google-tag-manager-2" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZQD7338');`}
      </Script>
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
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        strategy="afterInteractive"
        async
        defer
      />
      {/* Pixel X App - START */}
      <Script id="pixel-x-app" strategy="afterInteractive">
        {`!function(){var e=window.location.href,t=document.title,n=Date.now(),o=document.createElement('script');o.src='https://pxa.maquinadeingresos.site/remote?url='+encodeURIComponent(e)+'&title='+encodeURIComponent(t)+'&time='+n,o.async=!0,document.head.appendChild(o)}()`}
      </Script>
      {/* Pixel X App - END */}
      <Script id="track1click" src="https://gtm.maquinadeingresos.site/track1click.js" strategy="afterInteractive" />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-55L8C4KK"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PZQD7338"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID_BACKUP}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
