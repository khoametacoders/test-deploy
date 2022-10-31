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
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NPJCQS8')
             
             `}
        </Script>
      </Head>
      <body>
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: (
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NPJCQS8"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            ),
          }}
        ></noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
