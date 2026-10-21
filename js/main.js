import { initializeNavigation } from "./navigation.js";
import { initializeHome } from "./home.js";
import { initializeNewsletter } from "./newsletter.js";
import { initializeHeroMist } from "./hero-mist.js";
import { initializeScrollReveal } from "./scroll-reveal.js";
import { SITE_CONFIG } from "./config.js";

function updateCartCount() {
  const badge = document.querySelector("[data-cart-count]");
  if (!badge) {
    return;
  }

  try {
    const storedCart = localStorage.getItem(SITE_CONFIG.cartStorageKey);
    const items = storedCart === null ? [] : JSON.parse(storedCart);

    if (!Array.isArray(items)) {
      throw new TypeError("Saved cart data must be an array.");
    }

    const count = items.reduce((total, item) => {
      if (!Number.isSafeInteger(item.quantity) || item.quantity < 1) {
        throw new TypeError("Saved cart items must have a positive integer quantity.");
      }
      return total + item.quantity;
    }, 0);

    badge.textContent = String(count);
    badge.setAttribute("aria-label", `${count} items in bag`);
  } catch (error) {
    console.error("Unable to read the saved NIOR bag count.", error);
    badge.textContent = "—";
    badge.setAttribute("aria-label", "Bag count unavailable");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeHome();
  initializeNewsletter();
  initializeHeroMist();
  initializeScrollReveal();
  updateCartCount();
});

window.addEventListener("storage", (event) => {
  if (event.key === SITE_CONFIG.cartStorageKey) {
    updateCartCount();
  }
});

window.addEventListener("cart:updated", updateCartCount);
