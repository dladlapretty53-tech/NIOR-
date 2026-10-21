import { SITE_CONFIG } from "./config.js";

const imageUrl = (photoId, width = 900) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`;

// These are demonstration concepts and indicative prices, not confirmed inventory.
export const PRODUCTS = Object.freeze([
  {
    id: "demo-essential-tee",
    name: "Essential Tee",
    slug: "essential-tee",
    category: "Tops",
    price: 650,
    description: "A clean, considered everyday silhouette.",
    images: [imageUrl("photo-1521572163474-6864f9cf17ab")],
    availableSizes: [],
    colour: "Off-white",
    featured: true,
    details: [],
  },
  {
    id: "demo-oversized-tee",
    name: "Oversized Tee",
    slug: "oversized-tee",
    category: "Tops",
    price: 820,
    description: "An easy profile with room to move.",
    images: [imageUrl("photo-1551488831-00ddcb6c6bd3")],
    availableSizes: [],
    colour: "Black",
    featured: true,
    details: [],
  },
  {
    id: "demo-signature-jacket",
    name: "Signature Jacket",
    slug: "signature-jacket",
    category: "Outerwear",
    price: 1450,
    description: "A sharper layer for cooler days.",
    images: [imageUrl("photo-1551028719-00167b16eac5")],
    availableSizes: [],
    colour: "Black",
    featured: true,
    details: [],
  },
]);
