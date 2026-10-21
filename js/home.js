import { SITE_CONFIG } from "./config.js";
import { PRODUCTS } from "./products.js";

function formatPrice(price) {
  return new Intl.NumberFormat(SITE_CONFIG.locale, {
    style: "currency",
    currency: SITE_CONFIG.currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-card__image-wrap";

  const image = document.createElement("img");
  image.className = "product-card__image";
  image.src = product.images[0];
  image.alt = `${product.name} demonstration image`;
  image.width = 900;
  image.height = 1125;
  image.loading = "lazy";
  image.decoding = "async";

  const demoLabel = document.createElement("span");
  demoLabel.className = "product-card__label";
  demoLabel.textContent = "DEMO CONCEPT";

  imageWrap.append(image, demoLabel);

  const details = document.createElement("div");
  details.className = "product-card__details";

  const nameBlock = document.createElement("div");
  const name = document.createElement("h3");
  name.className = "product-card__name";
  name.textContent = product.name;

  const category = document.createElement("p");
  category.className = "product-card__category";
  category.textContent = product.category;
  nameBlock.append(name, category);

  const price = document.createElement("p");
  price.className = "product-card__price";
  price.textContent = formatPrice(product.price);

  details.append(nameBlock, price);
  card.append(imageWrap, details);
  return card;
}

export function initializeHome() {
  const productGrid = document.querySelector("[data-featured-products]");
  if (productGrid) {
    const featuredProducts = PRODUCTS.filter((product) => product.featured);
    productGrid.replaceChildren(...featuredProducts.map(createProductCard));
  }
}
