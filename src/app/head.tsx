import React from 'react';
import Script from 'next/script'

const TRACKING_ID = "G-QV6R0DFJFF"

const Head = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QV6R0DFJFF"></script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', '${TRACKING_ID}');
          `
        }}
      />
    </>
  );
}

export default Head;
