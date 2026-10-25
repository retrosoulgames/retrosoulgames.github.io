"use strict";
// All content, image links and video controls work without JavaScript.
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
const dialog = document.getElementById("lightbox");
const links = [...document.querySelectorAll(".gallery-link")];
if (dialog && typeof dialog.showModal === "function") {
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  let current = 0;
  let opener = null;
  const render = (index) => {
    current = (index + links.length) % links.length;
    const source = links[current].querySelector("img");
    image.src = links[current].getAttribute("href");
    image.alt = source.alt;
    caption.textContent = `${current + 1} / ${links.length} — ${source.alt}`;
  };
  links.forEach((link, index) => link.addEventListener("click", (event) => {
    // Keep modifier-click and open-in-new-tab behavior available.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    render(index);
    dialog.showModal();
    document.body.classList.add("modal-open");
    document.getElementById("close-lightbox").focus();
  }));
  document.getElementById("close-lightbox").addEventListener("click", () => dialog.close());
  document.getElementById("previous-image").addEventListener("click", () => render(current - 1));
  document.getElementById("next-image").addEventListener("click", () => render(current + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); render(current - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); render(current + 1); }
  });
  dialog.addEventListener("click", (event) => { if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  }});
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    if (opener) opener.focus();
  });
}

/* v3 navigation and gateway enhancements; links and native mobile details work without JS. */
if (window.location.protocol === "file:") {
  document.querySelectorAll('a[href]').forEach((anchor) => {
    const destination = new URL(anchor.getAttribute("href"), document.baseURI);
    if (destination.protocol === "file:" && destination.pathname.endsWith("/")) {
      destination.pathname += "index.html";
      anchor.href = destination.href;
    }
  });
}
const mobileMenu = document.querySelector(".mobile-nav");
if (mobileMenu) {
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) || event.target.closest("a")) mobileMenu.open = false;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector("summary").focus();
    }
  });
}
const gatewayHero = document.querySelector(".hero");
const gatewayMap = document.querySelector(".gateway-map");
if (gatewayHero && gatewayMap) {
  const mapGateway = () => {
    const width = gatewayHero.clientWidth;
    const height = gatewayHero.clientHeight;
    // The unchanged 1536 x 1024 image uses object-fit: cover; center / 55% on desktop.
    const scale = Math.max(width / 1536, height / 1024);
    const x = (width - 1536 * scale) * 0.5;
    const y = (height - 1024 * scale) * 0.55;
    gatewayMap.style.left = x + "px";
    gatewayMap.style.top = y + "px";
    gatewayMap.style.transform = "scale(" + scale + ")";
    gatewayHero.classList.add("gateway-ready");
  };
  mapGateway();
  if (typeof ResizeObserver === "function") new ResizeObserver(mapGateway).observe(gatewayHero);
  else window.addEventListener("resize", mapGateway);
  const futures = [...gatewayMap.querySelectorAll(".portal-future")];
  futures.forEach((button) => button.addEventListener("click", () => {
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    futures.forEach((other) => other.setAttribute("aria-expanded", "false"));
    button.setAttribute("aria-expanded", String(!wasOpen));
  }));
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".portal-future")) futures.forEach(b => b.setAttribute("aria-expanded", "false"));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") futures.forEach(b => b.setAttribute("aria-expanded", "false"));
  });
}
