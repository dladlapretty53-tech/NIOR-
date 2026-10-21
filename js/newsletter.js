export function initializeNewsletter() {
  const form = document.querySelector("[data-newsletter-form]");
  const emailInput = form?.querySelector('input[type="email"]');
  const status = document.querySelector("[data-newsletter-status]");

  if (!(form instanceof HTMLFormElement) || !(emailInput instanceof HTMLInputElement) || !status) {
    return;
  }

  emailInput.addEventListener("input", () => {
    emailInput.removeAttribute("aria-invalid");
    status.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput.value.trim() || !emailInput.validity.valid) {
      status.textContent = "Enter a valid email address.";
      emailInput.setAttribute("aria-invalid", "true");
      emailInput.focus();
      return;
    }

    emailInput.removeAttribute("aria-invalid");
    status.textContent =
      "Newsletter signup is not connected yet. Your email has not been sent or stored.";
  });
}
