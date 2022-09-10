import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007" />
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007" />
      </body>
    </Html>
  );
}
