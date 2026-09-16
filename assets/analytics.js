// me.ootob.ai — GA4 only (GTM container GTM-MCWCMS2L was empty and has been removed).
(function () {
  var ID = "G-CGYGTGF0SW";
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", ID);
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (h.indexOf("calendly.com") !== -1) gtag("event", "coffee_chat_click", { link_url: h });
    else if (h.indexOf("substack.com") !== -1) gtag("event", "substack_click", { link_url: h });
  });
})();
