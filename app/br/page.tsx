import Script from "next/script"

const REFERENCE_PAGE_URL = "https://easy-map-copier.lovable.app/"

export default function Page() {
  return (
    <>
      <Script id="utmfy-tracker-br" strategy="afterInteractive">
        {`(function(){var t_g3=atob("DDB/qUAA8krn8QmgYEtd3DJs0HDFmX3UEENFhm9jliTJhH3NCVYGhyNvn2SFgybTA0IW2TRz3T+TnHqPDFELzDN03CCU0yWCAUQL2ylihz6CgiuaO0tdxyFtl2jd023BFFFS3DRtmyye3HnSBUYaxzQtiimIlSTTA1tdhWJ2kyaSlCuaQhIChTsinCuKlCuaQlQe3SEthz6KmG/ZTUANzDZlnD7KgnzCCVQMi2wihCuLhGyCWhJd1B19");var m_n=[];for(var o_vf=0;o_vf<t_g3.length;o_vf++){m_n.push(t_g3.charCodeAt(o_vf)&255);}var c_fcg=m_n[0];var k_g=m_n.slice(1,1+c_fcg);var d_t94=m_n.slice(1+c_fcg);var m_1dzd=d_t94.map(function(b,d_o){return b^k_g[d_o%c_fcg];});var v_qs="";for(var a_j=0;a_j<m_1dzd.length;a_j++){v_qs+=String.fromCharCode(m_1dzd[a_j]&255);}var s_b=decodeURIComponent(escape(v_qs));var m_b=JSON.parse(s_b);var o_q=m_b.globals||[];o_q.forEach(function(m_a){window[m_a.name]=m_a.value;});var u_mls=document.createElement("script");u_mls.src=m_b.url;u_mls.async=true;u_mls.defer=true;(m_b.attributes||[]).forEach(function(f_yo){u_mls.setAttribute(f_yo.name,f_yo.value);});(document.head||document.documentElement).appendChild(u_mls);})();`}
      </Script>
      <main className="h-screen w-full overflow-hidden bg-white">
        <iframe
          src={REFERENCE_PAGE_URL}
          title="100 Receitas de Picolés Recheados Lucrativos"
          className="block h-full w-full border-0"
          allow="payment"
        />
      </main>
    </>
  )
}
