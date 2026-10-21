export function initializeNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-site-nav]");

  if (!toggle || !navigation) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    navigation.dataset.open = "false";
  };

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navigation.dataset.open = String(!isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      event.target instanceof Node &&
      !toggle.contains(event.target) &&
      !navigation.contains(event.target)
    ) {
      closeMenu();
    }
  });
}
