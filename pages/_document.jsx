import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Script
          id="scriptloginkakao1"
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js"
        ></Script>
        <Script id="googletag-manager" strategy="afterInteractive">
          {`
              (
                function() {
                  window['dataLayer'] = window['dataLayer'] || [];
                  window['dataLayer'].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js',
                  });
                  var f = document.getElementsByTagName('script')[0],
                      j = document.createElement('script'),
                      dl = 'dataLayer' ? '&dataLayer=dataLayer' : '';
                  j.async=true;
                  j.src=
                    'https://www.googletagmanager.com/gtm.js?id=%27' + 'GTM-MRB4TQZ' + dl;
                    f.parentNode.insertBefore(j,f);
                }
              )();`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
