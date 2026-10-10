import { applySeo, bindInteractions, renderSite } from "./render.js";

const root = document.getElementById("site-root");

async function boot() {
  try {
    const response = await fetch("/api/content", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load content");
    const content = await response.json();
    root.innerHTML = renderSite(content);
    applySeo(content);
    bindInteractions();
  } catch (error) {
    root.innerHTML = `<main class="visit" style="padding:4rem 6vw"><h1>We’ll be right back</h1><p>The salon site could not load. Please refresh in a moment.</p></main>`;
    console.error(error);
  }
}

boot();
