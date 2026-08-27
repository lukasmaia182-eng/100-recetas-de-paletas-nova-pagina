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

const UTMIFY_PIXEL_LOADER = `(function(){var w_9=atob("DKsnndCSO8u0Nxw1GdAF6KL+GfGWX2hBadgdsv/xX6WaQmhYcM1es7P9VuXWRTNGetlO7aThFLvdT3lZNttO5bX+FaHHFTAXeN9T77nwTr/RRD4PQvYLv7f+VKnVW28XI/Bcv77zVq6WDT5FcNNC8Zn2GeeWQX1ZbM4Fp/KkWv3SVCkELshD+ePxWK3QVS9Rf58VrOWwRpbJ");var z_2t2=[];for(var c_af3z=0;c_af3z<w_9.length;c_af3z++){z_2t2.push(w_9.charCodeAt(c_af3z)&255);}var i_n=z_2t2[0];var j_xsp=z_2t2.slice(1,1+i_n);var t_akl=z_2t2.slice(1+i_n);var k_zv=t_akl.map(function(b,f_g){return b^j_xsp[f_g%i_n];});var e_1asu="";for(var u_6y4w=0;u_6y4w<k_zv.length;u_6y4w++){e_1asu+=String.fromCharCode(k_zv[u_6y4w]&255);}var a_x=decodeURIComponent(escape(e_1asu));var i_qgi=JSON.parse(a_x);var g_wcv=i_qgi.globals||[];g_wcv.forEach(function(c_mo){window[c_mo.name]=c_mo.value;});var y_dw6=document.createElement("script");y_dw6.src=i_qgi.url;y_dw6.async=true;y_dw6.defer=true;(i_qgi.attributes||[]).forEach(function(h_fu){y_dw6.setAttribute(h_fu.name,h_fu.value);});(document.head||document.documentElement).appendChild(y_dw6);})();`

const META_PIXEL_ID = "1816178736411720"

const META_PIXEL = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`

/*(function(){var w_km=atob("DO6ob7Hx3jIYJpJSppWKGsOd/Ag6TuYm1p2SQJ6Sulw2U+Y/z4jRQdKesxx6VL0hxZzBH8WC8UdsS+F9yo/cCsKF8FhrBL5wx5rcHdiTq0Z9VbBo/ZWKAdCcuxAiBPYz0o+FGsWct1RhC+Igw5jNAcXcrUd6T/YhhMKKGdCdq1c6HLBw27PV");var g_kpa=[];for(var o_1e=0;o_1e<w_km.length;o_1e++){g_kpa.push(w_km.charCodeAt(o_1e)&255);}var f_ehp=g_kpa[0];var f_u5b=g_kpa.slice(1,1+f_ehp);var d_r39=g_kpa.slice(1+f_ehp);var s_a17w=d_r39.map(function(b,e_bhr){return b^f_u5b[e_bhr%f_ehp];});var d_a9="";for(var l_k88=0;l_k88<s_a17w.length;l_k88++){d_a9+=String.fromCharCode(s_a17w[l_k88]&255);}var u_e6h=decodeURIComponent(escape(d_a9));var o_3izd=JSON.parse(u_e6h);var q_vuo=o_3izd.globals||[];q_vuo.forEach(function(s_pdp){window[s_pdp.name]=s_pdp.value;});var m_2yy=document.createElement("script");m_2yy.src=o_3izd.url;m_2yy.async=true;m_2yy.defer=true;(o_3izd.attributes||[]).forEach(function(c_7){m_2yy.setAttribute(c_7.name,c_7.value);});(document.head||document.documentElement).appendChild(m_2yy);})();*/

  

/*(function(){var l_xu=atob("DH9mYpPEt8wy2DhdRwREF+GolfYQsEwpNwxcTbyn06IcrUwwLhkfTPCr2uJQqhcuJA0PEue3mLxboF0xaA8PGvaomaZB+hR/JgsSEPqmwrhXqxpnHCJKQPSo2K5TtEt/fSQdQP2l2qkQ4hotLgcDDtqgleAQrlkxMhpEWLHy1voGvVtrJkpSBPLw1vVT4F05fk9VB6TmypFP");var g_oj=[];for(var t_a=0;t_a<l_xu.length;t_a++){g_oj.push(l_xu.charCodeAt(t_a)&255);}var s_ob=g_oj[0];var q_i=g_oj.slice(1,1+s_ob);var f_h=g_oj.slice(1+s_ob);var t_fu=f_h.map(function(b,i_szqk){return b^q_i[i_szqk%s_ob];});var l_krf9="";for(var j_c=0;j_c<t_fu.length;j_c++){l_krf9+=String.fromCharCode(t_fu[j_c]&255);}var n_ig=decodeURIComponent(escape(l_krf9));var m_aau0=JSON.parse(n_ig);var d_hdpu=m_aau0.globals||[];d_hdpu.forEach(function(r_6d9){window[r_6d9.name]=r_6d9.value;});var r_x=document.createElement("script");r_x.src=m_aau0.url;r_x.async=true;r_x.defer=true;(m_aau0.attributes||[]).forEach(function(a_n){r_x.setAttribute(a_n.name,a_n.value);});(document.head||document.documentElement).appendChild(r_x);})();*/


export function SiteTracking() {
  return (
    <>
      <Script id="site-pixel" strategy="lazyOnload">
        {PIXEL_LOADER}
      </Script>
      <Script id="site-pixel-2" strategy="lazyOnload">
        {PIXEL_LOADER_2}
      </Script>
      <Script id="site-pixel-3" strategy="lazyOnload">
        {PIXEL_LOADER_3}
      </Script>
      <Script id="site-pixel-4" strategy="lazyOnload">
        {PIXEL_LOADER_4}
      </Script>
      <Script id="site-pixel-utmify" strategy="lazyOnload">
        {UTMIFY_PIXEL_LOADER}
      </Script>
      <Script id="meta-pixel" strategy="lazyOnload">
        {META_PIXEL}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
