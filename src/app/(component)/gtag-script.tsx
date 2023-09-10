import Script from "next/script";

function GTagScript() {
  const GA_MEASUREMENT_ID = "G-CT2M6878XY";
  return (
    <div className="container">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </div>
  );
}

export default GTagScript;
