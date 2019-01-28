const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

window.onload = () => {
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])

  const navs = Array.from(document.querySelectorAll("nav a"));
  navs.forEach((n, idx) => {
    n.textContent = siteContent.nav[`nav-item-${idx + 1}`];
  });

  // cta
  document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
  document.querySelector(".cta-text button").textContent = siteContent.cta.button;
  document.getElementById("cta-img").setAttribute("src", siteContent.cta['img-src']);

  // main-content

  // headers
  const jsonHeaders = Object.keys(siteContent['main-content'])
    .filter(k => k.indexOf("h4") > -1)
    .map(k => siteContent['main-content'][k]);

  Array.from(document.getElementsByTagName("h4"))
    .forEach((h, idx) => h.textContent = jsonHeaders[idx]);

  // content
  const jsonPs = Object.keys(siteContent['main-content'])
    .filter(k => k.indexOf("content") > -1)
    .map(k => siteContent['main-content'][k]);

  Array.from(document.querySelectorAll(".main-content p"))
    .forEach((p, idx) => p.textContent = jsonPs[idx]);

  // main-content img
  document.getElementById("middle-img").setAttribute("src", siteContent['main-content']['middle-img-src'])

  // contact
  const section = document.querySelector(".contact");
  Object.keys(siteContent.contact).forEach((item, idx) => {
    section.children[idx].textContent = siteContent.contact[item];
  });

  // footer
  document.querySelector("footer p").textContent = siteContent.footer.copyright;
};
