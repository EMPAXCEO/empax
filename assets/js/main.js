/* Empax – Navigation, Scroll-Reveal, aktiver Menüpunkt, Jahr im Footer */
(function () {
  "use strict";

  /* ---- Mobile-Navigation -------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ---- Aktiver Menüpunkt -------------------------------------------------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach(function (link) {
    var target = link.getAttribute("href");
    if (!target) return;
    target = target.split("#")[0].split("/").pop();
    if (target && target === here) link.classList.add("is-active");
  });

  /* ---- Scroll-Reveal ------------------------------------------------------ */
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      io.observe(el);
    });
  }

  /* ---- Jahr im Footer ----------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- Kontaktformular (Formspree) ----------------------------------------- */
  var form = document.querySelector("[data-formspree-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");
    var submitBtn = form.querySelector("button[type=submit]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "";
      status.classList.remove("form__status--ok", "form__status--error");
      submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            status.textContent = "Danke! Ihre Nachricht wurde gesendet.";
            status.classList.add("form__status--ok");
          } else {
            return response.json().then(function (data) {
              var message =
                data && data.errors
                  ? data.errors.map(function (err) { return err.message; }).join(", ")
                  : "Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.";
              throw new Error(message);
            });
          }
        })
        .catch(function (err) {
          status.textContent =
            err.message || "Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.";
          status.classList.add("form__status--error");
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }
})();
