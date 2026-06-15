/* ===== TonTen AI - 主逻辑 ===== */

let currentCategory = "all";
let currentSort = "rating";
let currentSearch = "";

function renderTools() {
  const grid = document.getElementById("toolsGrid");
  const countEl = document.getElementById("toolCount");

  let filtered = [...tools];

  if (currentCategory !== "all") {
    filtered = filtered.filter(t => t.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.useCase.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q)) ||
      t.country.includes(q)
    );
  }

  if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "zh"));
  } else if (currentSort === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  }

  countEl.textContent = "\u5171 " + filtered.length + " \u4e2a\u5de5\u5177";

  if (filtered.length === 0) {
    grid.innerHTML = '\x3Cdiv class="no-results"\x3E\x3Cdiv class="icon"\x3E\u{1F50D}\x3C/div\x3E\x3Ch3\x3E\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u5de5\u5177\x3C/h3\x3E\x3Cp\x3E\u8bd5\u8bd5\u6362\u4e2a\u5173\u952e\u8bcd\u6216\u5206\u7c7b\x3C/p\x3E\x3C/div\x3E';
    return;
  }

  const stars = function(r) {
    var s = "", i;
    for (i = 0; i < Math.floor(r); i++) s += "\u2605";
    if (r % 1 >= 0.5) s += "\u2606";
    return s;
  };

  grid.innerHTML = filtered.map(function(t, i) {
    return '\x3Cdiv class="tool-card" style="animation-delay:' + (i * 0.03) + 's" onclick="window.open(\x27' + t.url + '\x27, \x27_blank\x27)"\x3E'
      + '\x3Cdiv class="card-header"\x3E'
      + '\x3Cspan class="card-name"\x3E' + t.name + '\x3C/span\x3E'
      + '\x3Cspan class="card-country"\x3E' + t.country + '\x3C/span\x3E'
      + '\x3C/div\x3E'
      + '\x3Cdiv class="card-usecase"\x3E\u{1F3AF} ' + t.useCase + '\x3C/div\x3E'
      + '\x3Cp class="card-desc"\x3E' + t.desc + '\x3C/p\x3E'
      + '\x3Cdiv class="card-tags"\x3E' + t.tags.map(function(tag) { return '\x3Cspan class="tag"\x3E' + tag + '\x3C/span\x3E'; }).join("") + '\x3C/div\x3E'
      + '\x3Cdiv class="card-footer"\x3E'
      + '\x3Cspan class="card-pricing"\x3E' + t.pricing + '\x3C/span\x3E'
      + '\x3Cspan class="card-rating"\x3E\x3Cspan class="star"\x3E' + stars(t.rating) + '\x3C/span\x3E ' + t.rating + '\x3C/span\x3E'
      + '\x3C/div\x3E'
      + '\x3C/div\x3E';
  }).join("");
}

function setCategory(catId) {
  currentCategory = catId;
  document.querySelectorAll(".cat-btn").forEach(function(b) {
    b.classList.toggle("active", b.dataset.cat === catId);
  });
  renderTools();
}

var searchTimer;
function onSearch(val) {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function() {
    currentSearch = val;
    renderTools();
  }, 200);
}

function onSortChange(val) {
  currentSort = val;
  renderTools();
}

function toggleTheme() {
  var root = document.documentElement.style;
  var btn = document.querySelector(".btn-theme");
  var isDark = root.getPropertyValue("--bg-primary").trim() !== "#f8f9fa";
  if (isDark) {
    root.setProperty("--bg-primary", "#f8f9fa");
    root.setProperty("--bg-secondary", "#ffffff");
    root.setProperty("--bg-card", "#ffffff");
    root.setProperty("--bg-card-hover", "#f0f0f5");
    root.setProperty("--border", "#e0e0e8");
    root.setProperty("--text-primary", "#1a1a2e");
    root.setProperty("--text-secondary", "#6b6b80");
    btn.textContent = "\u2600\uFE0F";
  } else {
    root.setProperty("--bg-primary", "#0a0a0f");
    root.setProperty("--bg-secondary", "#12121a");
    root.setProperty("--bg-card", "#16161f");
    root.setProperty("--bg-card-hover", "#1e1e2a");
    root.setProperty("--border", "#252535");
    root.setProperty("--text-primary", "#e8e8ed");
    root.setProperty("--text-secondary", "#9d9db5");
    btn.textContent = "\u{1F319}";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.title = siteName;

  var app = document.getElementById("app");

  app.innerHTML = '\x3Cheader class="header"\x3E'
    + '\x3Cdiv class="header-inner"\x3E'
    + '\x3Ca class="logo" href="#"\x3E\x3Cspan class="logo-icon"\x3E\u26A1\x3C/span\x3E' + siteName + '\x3C/a\x3E'
    + '\x3Cdiv class="header-actions"\x3E'
    + '\x3Cbutton class="btn-theme" onclick="toggleTheme()" title="\u5207\u6362\u4e3b\u9898"\x3E\u{1F319}\x3C/button\x3E'
    + '\x3C/div\x3E'
    + '\x3C/div\x3E'
    + '\x3C/header\x3E'

    + '\x3Csection class="hero"\x3E'
    + '\x3Cdiv class="hero-badge"\x3E\u2728 \u6309\u7528\u9014\u5206\u7c7b\u7684AI\u5de5\u5177\u5bfc\u822a\x3C/div\x3E'
    + '\x3Ch1\x3E' + siteDesc + '\x3C/h1\x3E'
    + '\x3Cp\x3E\u5f55' + tools.length + '+\u7cbe\u9009\u5de5\u5177\u00b7\u6309\u5b9e\u9645\u7528\u9014\u5206\u7c7b\u00b7\u6301\u7eed\u66f4\u65b0\u4e2d\x3C/p\x3E'
    + '\x3C/section\x3E'

    + '\x3Cdiv class="search-wrap"\x3E'
    + '\x3Cinput type="text" class="search-input" id="searchInput" placeholder="\u641c\u7d22\u5de5\u5177\u540d\u79f0\u3001\u7528\u9014\u3001\u6807\u7b7e..." oninput="onSearch(this.value)" /\x3E'
    + '\x3Cspan class="search-icon"\x3E\u{1F50D}\x3C/span\x3E'
    + '\x3C/div\x3E'

    + '\x3Cbr/\x3E'

    + '\x3Cdiv class="categories" id="catBar"\x3E'
    + categories.map(function(c) {
        return '\x3Cbutton class="cat-btn' + (c.id === "all" ? " active" : "") + '" data-cat="' + c.id + '" onclick="setCategory(\x27' + c.id + '\x27)" title="' + (c.useDesc || "") + '"\x3E' + c.icon + ' ' + c.name + '\x3C/button\x3E';
      }).join("")
    + '\x3C/div\x3E'

    + '\x3Cdiv class="stats-bar"\x3E'
    + '\x3Cspan class="stats-count" id="toolCount"\x3E\u5171 ' + tools.length + ' \u4e2a\u5de5\u5177\x3C/span\x3E'
    + '\x3Cselect class="sort-select" onchange="onSortChange(this.value)"\x3E'
    + '\x3Coption value="rating"\x3E\u2B50 \u6309\u8bc4\u5206\u6392\u5e8f\x3C/option\x3E'
    + '\x3Coption value="name"\x3E\u{1F524} \u6309\u540d\u79f0\u6392\u5e8f\x3C/option\x3E'
    + '\x3Coption value="newest"\x3E\u{1F195} \u6700\u65b0\u6536\u5f55\x3C/option\x3E'
    + '\x3C/select\x3E'
    + '\x3C/div\x3E'

    + '\x3Cdiv class="tools-grid" id="toolsGrid"\x3E\x3C/div\x3E'

    + '\x3Cfooter class="footer"\x3E'
    + '\x3Cp\x3E\u00a9 2026 \x3Cstrong\x3ETonTen AI\x3C/strong\x3E \u00b7 \u5de5\u5177\u4fe1\u606f\u4ec5\u4f9b\u53c2\u8003\uff0c\u4ee5\u5404\u5e73\u53f0\u5b98\u7f51\u4e3a\u51c6 \u00b7 \u6301\u7eed\u66f4\u65b0\u4e2d\x3C/p\x3E'
    + '\x3Cp style="margin-top:8px;"\x3E\u672c\u7ad9\u4e3a\u975e\u5546\u4e1a\u9879\u76ee | \u5de5\u5177\u7248\u6743\u5f52\u5404\u81ea\u5b98\u65b9\u6240\u6709\x3C/p\x3E'
    + '\x3C/footer\x3E';

  renderTools();
});
