import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"
          strategy="beforeInteractive"
        />
        <Script
          src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007"
          strategy="beforeInteractive"
        />
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="ChSPZufhxuKY7ZVuvGwVVm5t7r3_UptQ-FbsB_LJvis"
          data-hostname="53b5d92930b045c68a07d11ed0e50c9c.svc.dynamics.com"
        >
          {" "}
        </div>
      </body>
    </Html>
  );
}
