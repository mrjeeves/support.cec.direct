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
    var tag = release.tag_name;
    if (!/^v[0-9]+\.[0-9]+\.[0-9]+$/.test(tag) || !Array.isArray(release.assets)) return;
    var prefix = "https://github.com/mrjeeves/CECSupport/releases/download/" + tag + "/";
    var assets = release.assets.filter(function (asset) {
      return asset && typeof asset.name === "string" && asset.state === "uploaded" &&
        asset.browser_download_url === prefix + encodeURIComponent(asset.name);
    });
    var setup = assets.find(function (asset) { return asset.name.endsWith("-setup.exe"); });
    if (setup) document.querySelector("[data-windows-download]").href = setup.browser_download_url;

    var linuxCount = 0;
    document.querySelectorAll("[data-linux-package]").forEach(function (link) {
      var suffix = ("_" + tag.slice(1) + "_" + link.dataset.linuxPackage).toLowerCase();
      var matches = assets.filter(function (asset) {
        var name = asset.name.toLowerCase().replace(/^cec[ ._-]support_/, "cec-support_");
        return name === "cec-support" + suffix;
      });
      if (matches.length !== 1 || !/^sha256:[a-f0-9]{64}$/.test(matches[0].digest)) return;
      link.href = matches[0].browser_download_url;
      link.parentElement.hidden = false;
      linuxCount += 1;
    });
    document.querySelector("#linux-downloads").hidden = linuxCount === 0;
    document.querySelector("#linux-download-status").textContent = linuxCount ?
      "Linux downloads in " + tag + "." : "The latest release (" + tag + ") has no Linux packages yet.";
  })
  .catch(function () {});
