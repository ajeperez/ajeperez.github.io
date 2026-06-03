/* Alexandre Perez — site interactions (vanilla, no deps) */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("open"); });
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Lightweight YouTube facade: load iframe only on click */
  document.querySelectorAll(".video[data-yt]").forEach(function (box) {
    box.addEventListener("click", function () {
      if (box.dataset.loaded) return;
      box.dataset.loaded = "1";
      var id = box.getAttribute("data-yt");
      var ifr = document.createElement("iframe");
      ifr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      ifr.title = "Video — Alexandre Perez";
      ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      ifr.setAttribute("allowfullscreen", "");
      box.innerHTML = "";
      box.appendChild(ifr);
    });
  });

  /* Footer year */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
