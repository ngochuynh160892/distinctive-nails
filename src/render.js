export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function nl2br(value) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function mapsSrc(query) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}

function mapsLink(query) {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

function telHref(site) {
  return `tel:${site.phoneTel || site.phone.replace(/[^\d+]/g, "")}`;
}

export function renderSite(content) {
  const s = content.site;
  const hero = content.hero;
  const about = content.about;
  const services = content.services;
  const menu = content.menu;
  const gallery = content.gallery;
  const reviews = content.reviews;
  const gift = content.gift;
  const visit = content.visit;
  const marquee = [...(content.marquee || []), ...(content.marquee || [])];
  const year = new Date().getFullYear();
  const book = s.bookingUrl;
  const nav = [
    about?.enabled !== false && { href: "#about", label: "About", mobile: "About us" },
    services?.enabled !== false && { href: "#services", label: "Services", mobile: "Services" },
    menu?.enabled !== false && { href: "#menu", label: "Menu", mobile: "Price menu" },
    gallery?.enabled !== false && { href: "#gallery", label: "Gallery", mobile: "Gallery" },
    gift?.enabled !== false && { href: "#gift", label: "Gift Card", mobile: "Gift card" },
    visit?.enabled !== false && { href: "#visit", label: "Contact", mobile: "Contact" },
  ].filter(Boolean);

  const logo = `
    <a class="logo" href="#top" aria-label="${escapeHtml(s.brandName)} home">
      <span class="logo-mark" aria-hidden="true">${escapeHtml(s.logoMark || "D")}</span>
      <span class="logo-text">
        <em>${escapeHtml(s.brandName.split(" ")[0] || s.brandName)}</em>
        <strong>${escapeHtml(s.brandName.split(" ").slice(1).join(" ") || "Nails")}</strong>
      </span>
    </a>
  `;

  const gallerySub = escapeHtml(gallery.sub || "").replace(
    "{instagram}",
    `<a href="${escapeHtml(s.instagramUrl)}" target="_blank" rel="noopener">${escapeHtml(s.instagramHandle)}</a>`
  );

  const giftCta = escapeHtml(gift.primaryCta || "").replace("{phone}", escapeHtml(s.phone));

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="topbar">
      <p>${escapeHtml(s.topbarLeft)}</p>
      <p>
        <a href="${escapeHtml(telHref(s))}">${escapeHtml(s.phone)}</a>
        <span aria-hidden="true"> · </span>
        ${escapeHtml(s.hoursShort)}
      </p>
    </div>
    <header class="site-header" data-header>
      <div class="header-inner">
        ${logo}
        <nav class="nav-desktop" aria-label="Primary">
          ${nav.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="btn btn-primary" href="${escapeHtml(book)}" target="_blank" rel="noopener">Book now</a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle>
            <span class="sr-only">Open menu</span>
            <span class="bar" aria-hidden="true"></span>
            <span class="bar" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav" id="mobile-nav" data-mobile-nav hidden>
      <nav aria-label="Mobile">
        ${nav.map((item) => `<a href="${item.href}">${escapeHtml(item.mobile)}</a>`).join("")}
        <a class="btn btn-primary" href="${escapeHtml(book)}" target="_blank" rel="noopener">Book appointment</a>
      </nav>
    </div>
    <main id="main">
      <section class="hero" id="top">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
          <h1>${escapeHtml(hero.title)} <em>${escapeHtml(hero.accent)}</em></h1>
          <p class="lede">${escapeHtml(hero.subtitle)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="${escapeHtml(book)}" target="_blank" rel="noopener">${escapeHtml(hero.primaryCta)}</a>
            <a class="btn btn-ghost" href="#menu">${escapeHtml(hero.secondaryCta)}</a>
          </div>
          <dl class="hero-meta">
            <div>
              <dt>Hours</dt>
              <dd>${escapeHtml(s.hoursShort)}<br />${escapeHtml(s.hoursSunday)}</dd>
            </div>
            <div>
              <dt>Visit</dt>
              <dd>${escapeHtml(s.addressLine1)}<br />${escapeHtml(s.addressLine2)}</dd>
            </div>
          </dl>
        </div>
        <div class="hero-visual">
          <figure class="hero-frame hero-frame-main">
            <img src="${escapeHtml(hero.image)}" alt="${escapeHtml(hero.imageAlt)}" width="900" height="1125" />
          </figure>
          <figure class="hero-frame hero-frame-salon">
            <img src="${escapeHtml(hero.salonImage)}" alt="${escapeHtml(hero.salonAlt)}" width="800" height="800" />
          </figure>
          <div class="hero-badge">
            <span>${escapeHtml(hero.badgeValue)}</span>
            <small>${escapeHtml(hero.badgeLabel)}</small>
          </div>
        </div>
      </section>
      ${
        marquee.length
          ? `<div class="marquee" aria-hidden="true"><div class="marquee-track">${marquee
              .map((item) => `<span>${escapeHtml(item)}</span>`)
              .join("")}</div></div>`
          : ""
      }
      ${
        about.enabled === false
          ? ""
          : `<section class="about" id="about">
        <div class="about-media">
          <img class="about-photo about-photo-a" src="${escapeHtml(about.imageA)}" alt="${escapeHtml(about.imageAAlt)}" width="1200" height="900" loading="lazy" />
          <img class="about-photo about-photo-b" src="${escapeHtml(about.imageB)}" alt="${escapeHtml(about.imageBAlt)}" width="800" height="1000" loading="lazy" />
        </div>
        <div class="about-copy">
          <p class="eyebrow">${escapeHtml(about.eyebrow)}</p>
          <h2>${escapeHtml(about.heading)}</h2>
          <p>${escapeHtml(about.paragraph1)}</p>
          ${about.paragraph2 ? `<p>${escapeHtml(about.paragraph2)}</p>` : ""}
          <ul class="about-points">${(about.points || [])
            .map((point) => `<li>${escapeHtml(point)}</li>`)
            .join("")}</ul>
        </div>
      </section>`
      }
      ${
        services.enabled === false
          ? ""
          : `<section class="services" id="services">
        <div class="section-head">
          <p class="eyebrow">${escapeHtml(services.eyebrow)}</p>
          <h2>${escapeHtml(services.heading)}</h2>
          <p>${escapeHtml(services.sub)}</p>
        </div>
        <div class="service-grid">
          ${(services.items || [])
            .map(
              (item) => `<article class="service-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
            <p class="service-from">${escapeHtml(item.from)}</p>
          </article>`
            )
            .join("")}
        </div>
      </section>`
      }
      ${
        menu.enabled === false
          ? ""
          : `<section class="menu" id="menu">
        <div class="section-head">
          <p class="eyebrow">${escapeHtml(menu.eyebrow)}</p>
          <h2>${escapeHtml(menu.heading)}</h2>
          <p>${escapeHtml(menu.sub)}</p>
        </div>
        <div class="menu-tabs" role="tablist" aria-label="Service categories">
          ${(menu.categories || [])
            .map(
              (cat, index) =>
                `<button class="${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${
                  index === 0 ? "true" : "false"
                }" data-tab="${escapeHtml(cat.id)}">${escapeHtml(cat.label)}</button>`
            )
            .join("")}
        </div>
        <div class="menu-panels">
          ${(menu.categories || [])
            .map((cat, index) => {
              const groups = cat.groups || [];
              const body =
                groups.length > 1
                  ? `<div class="menu-split">${groups
                      .map(
                        (group) => `<div>
                    <h3>${escapeHtml(group.name)}</h3>
                    <ul class="price-list">${(group.items || [])
                      .map(
                        (item) =>
                          `<li><span>${escapeHtml(item.name)}</span><span>${nl2br(item.price)}</span></li>`
                      )
                      .join("")}</ul>
                  </div>`
                      )
                      .join("")}</div>`
                  : `<h3>${escapeHtml(groups[0]?.name || cat.label)}</h3>
                  <ul class="price-list">${(groups[0]?.items || [])
                    .map(
                      (item) =>
                        `<li><span>${escapeHtml(item.name)}</span><span>${nl2br(item.price)}</span></li>`
                    )
                    .join("")}</ul>`;
              return `<div class="menu-panel${index === 0 ? " is-active" : ""}" id="panel-${escapeHtml(
                cat.id
              )}" role="tabpanel" ${index === 0 ? "" : "hidden"}>${body}</div>`;
            })
            .join("")}
        </div>
      </section>`
      }
      ${
        gallery.enabled === false
          ? ""
          : `<section class="gallery" id="gallery">
        <div class="section-head">
          <p class="eyebrow">${escapeHtml(gallery.eyebrow)}</p>
          <h2>${escapeHtml(gallery.heading)}</h2>
          <p>${gallerySub}</p>
        </div>
        <div class="gallery-filters" role="tablist" aria-label="Gallery filters">
          ${(gallery.filters || [])
            .map(
              (filter, index) =>
                `<button class="${index === 0 ? "is-active" : ""}" type="button" data-filter="${escapeHtml(
                  filter.id
                )}">${escapeHtml(filter.label)}</button>`
            )
            .join("")}
        </div>
        <div class="gallery-grid" data-gallery>
          ${(gallery.images || [])
            .map(
              (image, index) =>
                `<button type="button" class="gallery-item" data-cat="${escapeHtml(
                  (image.categories || []).join(" ")
                )}" data-full="${escapeHtml(image.src)}">
              <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" ${
                  index < 3 ? "" : 'loading="lazy"'
                } width="400" height="500" />
            </button>`
            )
            .join("")}
        </div>
      </section>`
      }
      ${
        reviews.enabled === false
          ? ""
          : `<section class="reviews" id="reviews">
        <div class="section-head">
          <p class="eyebrow">${escapeHtml(reviews.eyebrow)}</p>
          <h2>${escapeHtml(reviews.heading)}</h2>
        </div>
        <div class="review-grid">
          ${(reviews.items || [])
            .map(
              (item) => `<blockquote>
            <p>${escapeHtml(item.quote)}</p>
            <footer>
              <cite>${escapeHtml(item.author)}</cite>
              <span>${escapeHtml(item.role)}</span>
            </footer>
          </blockquote>`
            )
            .join("")}
        </div>
      </section>`
      }
      ${
        gift.enabled === false
          ? ""
          : `<section class="gift" id="gift">
        <div class="gift-card">
          <p class="eyebrow">${escapeHtml(gift.eyebrow)}</p>
          <h2>${escapeHtml(gift.heading)}</h2>
          <p>${escapeHtml(gift.text)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="${escapeHtml(telHref(s))}">${giftCta}</a>
            <a class="btn btn-ghost" href="#visit">${escapeHtml(gift.secondaryCta)}</a>
          </div>
        </div>
      </section>`
      }
      ${
        visit.enabled === false
          ? ""
          : `<section class="visit" id="visit">
        <div class="visit-copy">
          <p class="eyebrow">${escapeHtml(visit.eyebrow)}</p>
          <h2>${escapeHtml(visit.heading)}</h2>
          <p>${escapeHtml(visit.text)}</p>
          <ul class="visit-details">
            <li>
              <strong>Address</strong>
              <a href="${escapeHtml(mapsLink(s.mapsQuery))}" target="_blank" rel="noopener">
                ${escapeHtml(s.addressLine1)}<br />${escapeHtml(s.addressLine2)}
              </a>
            </li>
            <li><strong>Phone</strong><a href="${escapeHtml(telHref(s))}">${escapeHtml(s.phone)}</a></li>
            <li><strong>Email</strong><a href="mailto:${escapeHtml(s.email)}">${escapeHtml(s.email)}</a></li>
            <li><strong>Hours</strong><span>${escapeHtml(s.hoursLong)}<br />${escapeHtml(s.hoursSunday)}</span></li>
          </ul>
          <a class="btn btn-primary" href="${escapeHtml(book)}" target="_blank" rel="noopener">${escapeHtml(
              visit.bookCta
            )}</a>
        </div>
        <div class="visit-map">
          <iframe title="Map to ${escapeHtml(s.brandName)}" src="${escapeHtml(
            mapsSrc(s.mapsQuery)
          )}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>`
      }
    </main>
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          ${logo}
          <p>${escapeHtml(s.footerTagline)}</p>
        </div>
        <nav aria-label="Footer">
          ${nav
            .filter((item) => item.href !== "#visit")
            .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
            .join("")}
        </nav>
        <div class="footer-social">
          ${s.instagramUrl ? `<a href="${escapeHtml(s.instagramUrl)}" target="_blank" rel="noopener">Instagram</a>` : ""}
          ${s.facebookUrl ? `<a href="${escapeHtml(s.facebookUrl)}" target="_blank" rel="noopener">Facebook</a>` : ""}
          <a href="${escapeHtml(book)}" target="_blank" rel="noopener">Book now</a>
        </div>
      </div>
      <p class="copyright">© ${year} ${escapeHtml(s.brandName)}. All rights reserved.</p>
    </footer>
    <div class="mobile-cta" data-mobile-cta>
      <a href="${escapeHtml(telHref(s))}">Call</a>
      <a class="is-primary" href="${escapeHtml(book)}" target="_blank" rel="noopener">Book</a>
    </div>
    <dialog class="lightbox" data-lightbox aria-label="Image preview">
      <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close">Close</button>
      <button type="button" class="lightbox-nav prev" data-lightbox-prev aria-label="Previous image">‹</button>
      <img alt="" />
      <button type="button" class="lightbox-nav next" data-lightbox-next aria-label="Next image">›</button>
    </dialog>
  `;
}

export function applySeo(content) {
  const s = content.site;
  document.title = s.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", s.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", s.title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", s.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && s.canonical) canonical.setAttribute("href", s.canonical);

  const ld = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: s.brandName,
    image: [content.about?.imageA, content.hero?.salonImage].filter(Boolean),
    url: s.canonical,
    telephone: s.phoneTel,
    email: s.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: s.addressLine1,
      addressLocality: "Summerville",
      addressRegion: "SC",
      postalCode: "29486",
      addressCountry: "US",
    },
    sameAs: [s.instagramUrl, s.facebookUrl].filter(Boolean),
  };
  let script = document.getElementById("ld-json");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ld-json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(ld);

  if (s.googleAdsId && !window.__adsLoaded) {
    window.__adsLoaded = true;
    const src = document.createElement("script");
    src.async = true;
    src.src = `https://www.googletagmanager.com/gtag/js?id=${s.googleAdsId}`;
    document.head.appendChild(src);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", s.googleAdsId);
  }
}

export function bindInteractions() {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const tabs = document.querySelectorAll(".menu-tabs [data-tab]");
  const panels = document.querySelectorAll(".menu-panel");
  const filters = document.querySelectorAll("[data-filter]");
  const galleryItems = [...document.querySelectorAll(".gallery-item")];
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = lightbox?.querySelector("img");
  let visibleItems = galleryItems;
  let currentIndex = 0;

  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );

  const setNav = (open) => {
    document.body.classList.toggle("nav-open", open);
    navToggle?.classList.toggle("is-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
    if (!mobileNav) return;
    mobileNav.hidden = !open;
  };

  navToggle?.addEventListener("click", () => setNav(mobileNav?.hidden ?? true));
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNav(false));
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        const match = panel.id === `panel-${id}`;
        panel.classList.toggle("is-active", match);
        panel.hidden = !match;
      });
    });
  });

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter ?? "all";
      filters.forEach((item) => item.classList.toggle("is-active", item === button));
      galleryItems.forEach((item) => {
        const cats = item.dataset.cat ?? "";
        const show = filter === "all" || cats.split(" ").includes(filter);
        item.classList.toggle("is-hidden", !show);
      });
      visibleItems = galleryItems.filter((item) => !item.classList.contains("is-hidden"));
    });
  });

  const openLightbox = (index) => {
    visibleItems = galleryItems.filter((item) => !item.classList.contains("is-hidden"));
    currentIndex = index;
    const item = visibleItems[currentIndex];
    if (!item || !lightbox || !lightboxImage) return;
    const img = item.querySelector("img");
    lightboxImage.src = item.dataset.full || img?.src || "";
    lightboxImage.alt = img?.alt || "Nail art from Distinctive Nails";
    if (!lightbox.open) lightbox.showModal();
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      visibleItems = galleryItems.filter((entry) => !entry.classList.contains("is-hidden"));
      openLightbox(visibleItems.indexOf(item));
    });
  });

  document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox?.close());
  document.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => {
    if (!visibleItems.length) return;
    openLightbox((currentIndex - 1 + visibleItems.length) % visibleItems.length);
  });
  document.querySelector("[data-lightbox-next]")?.addEventListener("click", () => {
    if (!visibleItems.length) return;
    openLightbox((currentIndex + 1) % visibleItems.length);
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNav(false);
    if (!lightbox?.open) return;
    if (event.key === "ArrowLeft") {
      openLightbox((currentIndex - 1 + visibleItems.length) % visibleItems.length);
    }
    if (event.key === "ArrowRight") {
      openLightbox((currentIndex + 1) % visibleItems.length);
    }
  });
}
