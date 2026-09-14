// Controls switch illustrations only; they never run tools or start support.
document.querySelectorAll("[data-tour]").forEach(function (tour) {
  var controls = tour.querySelector(".tour-controls");
  var buttons = Array.from(tour.querySelectorAll("[data-step]"));
  var panels = Array.from(tour.querySelectorAll("[data-panel]"));
  if (!controls || !buttons.length || !panels.length) return;
  function select(button) {
    buttons.forEach(function (item) {
      item.setAttribute("aria-pressed", String(item === button));
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.id !== button.getAttribute("aria-controls");
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () { select(button); });
  });
  select(buttons[0]);
  tour.classList.add("tour-ready");
  controls.hidden = false;
});

// Release-page links remain usable if JavaScript or the API is unavailable.
fetch("https://api.github.com/repos/mrjeeves/CECSupport/releases/latest")
  .then(function (response) {
    if (!response.ok) throw new Error("Release lookup failed");
    return response.json();
  })
  .then(function (release) {
    var setup = (release.assets || []).find(function (asset) {
      return typeof asset.name === "string" && asset.name.endsWith("-setup.exe");
    });
    if (!setup || typeof setup.browser_download_url !== "string") return;
    var url = new URL(setup.browser_download_url);
    if (url.origin !== "https://github.com" ||
        !url.pathname.startsWith("/mrjeeves/CECSupport/releases/download/")) return;
    document.querySelectorAll("a.dl").forEach(function (link) { link.href = url.href; });
  })
  .catch(function () {});
