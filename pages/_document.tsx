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
        <Script id="d365-trigger" strategy="afterInteractive">
          {`(function (a, t, i) { var e = "MSEI"; var s = "Analytics"; var o = e + "queue"; a[o] = a[o] || []; var r = a[e] || function (n) { var t = {}; t[s] = {}; function e(e) { while (e.length) { var r = e.pop(); t[s][r] = function (e) { return function () { a[o].push([e, n, arguments]) } }(r) } } var r = "track"; var i = "set"; e([r + "Event", r + "View", r + "Action", i + "Property", i + "User", "initialize", "teardown"]); return t }(i.name); var n = i.name; if (!a[e]) { a[n] = r[s]; a[o].push(["new", n]); setTimeout(function () { var e = "script"; var r = t.createElement(e); r.async = 1; r.src = i.src; var n = t.getElementsByTagName(e)[0]; n.parentNode.insertBefore(r, n) }, 1) } else { a[n] = new r[s] } if (i.user) { a[n].setUser(i.user) } if (i.props) { for (var c in i.props) { a[n].setProperty(c, i.props[c]) } } a[n].initialize(i.cfg) })(window, document, {
                src: "https://download.pi.dynamics.com/sdk/web/msei-0.js",
                name: "msdynmkt",
                cfg: {
                    ingestionKey:"ea333410c4424ba8862fafa6468f4094-8bd86c66-69dd-4c5b-a7f2-936a3c0c6524-7928"
                }
            });`}
        </Script>
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
