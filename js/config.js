/* Site configuration read by the form handler (src/scripts/site.js).
   CONCEPT BUILD: no endpoint is configured, so every form shows its local
   "sent" state and sends nothing. Forms must never reach the client's inbox
   from this concept. For a real build: Formspree endpoint + reCAPTCHA v3 key
   (see the motion-site template README). */
window.SITE = {
  siteName: "Canadian Auto Stores (concept)",
  formEndpoint: "",          // mock only; set in QA by tools/formtest.mjs
  recaptchaSiteKey: "",
  notifyEmail: "",
};
