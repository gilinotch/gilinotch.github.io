/*
 * Site links. Swap the placeholder values for the real URLs before publishing.
 * Any value that is empty or contains "PLACEHOLDER" is treated as not set: the
 * button stays visible, shows a "link not set yet" note, and does not navigate.
 */
const CONFIG = {
  DISCORD_URL: "https://discord.gg/p99FQFrHkG",
  DOWNLOAD_URL: "downloads/GILI-Notch-4.2.1.exe",
};

const LANG_KEY = "gili-notch-lang";
const THEME_KEY = "gili-notch-theme";

/* English copy. Indonesian copy lives in index.html and is read from the DOM at startup. */
const EN = {
  "meta.title": "GILI Notch 4.2.1: a Dynamic Island style notch for Windows",
  "meta.description": "GILI Notch adds a Dynamic Island style notch to Windows: music with synced lyrics, a Control Center, per-app volume, notes, to-dos, Pomodoro, a water tracker and a system monitor.",
  "skip": "Skip to content",
  "nav.label": "Main navigation",
  "nav.features": "Features",
  "nav.customize": "Customize",
  "nav.support": "Support",
  "nav.menu": "Menu",
  "theme.toggle": "Dark mode",
  "hero.title": "The top edge of your Windows screen, put to work.",
  "hero.lede": "GILI Notch adds a Dynamic Island style notch to Windows. Open it for your music with synced lyrics, quick toggles, per-app volume, notes, a to-do list and a focus timer, without leaving the window you are working in.",
  "hero.download": "Download GILI Notch 4.2.1",
  "hero.see": "See what's inside",
  "hero.meta": "Version 4.2.1 for Windows, 18 MB",
  "download.live": "Live",
  "download.total": "Total downloads",
  "open.title": "A short hello every time GILI Notch opens",
  "open.body": "This is a real recording from the app. The notch opens from the top edge of the screen, greets you with the Gili logo, then goes back to compact.",
  "open.step1": "<strong>The notch opens.</strong> It starts from the idle view with battery, date and time.",
  "open.step2": "<strong>The Gili logo appears.</strong> The notch holds its greeting for a few seconds.",
  "open.step3": "<strong>Back to compact.</strong> The notch closes again, ready to use.",
  "open.note": "You can turn the greeting off with Startup Greeting in the General tab of Settings.",
  "open.video": "Recording of the GILI notch opening, showing the Gili logo, then closing again",
  "video.play": "Play video",
  "video.pause": "Pause video",
  "stage.label": "Interactive notch demo",
  "stage.hint": "Click the notch",
  "stage.prev": "Previous panel",
  "stage.next": "Next panel",
  "stage.pager": "Choose a panel",
  "features.title": "What's inside the notch",
  "features.intro": "Every panel has arrow buttons at the top for moving to the next one. These are the main panels in version 4.2.1.",
  "media.title": "Now Playing, with synced lyrics",
  "media.p1": "The song title, artist and cover art show up in the notch with play, skip and volume controls. The panel also shows which music app is playing and what you listened to last.",
  "media.p2": "Turn on lyrics and GILI Notch pulls time-stamped lyrics from <a href=\"https://lrclib.net\" target=\"_blank\" rel=\"noopener\">LRCLIB</a>. The line being sung is highlighted, and if the lyrics run early or late you can shift the timing.",
  "media.switch": "Show lyrics",
  "zoom": "Full size",
  "control.title": "Quick settings without opening Windows Settings",
  "control.tabs": "Control panels",
  "control.cc": "Wi-Fi, Bluetooth, Hotspot and Do Not Disturb share one grid, next to the power mode picker, a lock button and the power menu. Below them sit shortcuts to Snipping, Clipboard, To-Do and Files, then the brightness and volume sliders.",
  "control.mixer": "In the Volume Mixer you pick an output device, then set each app on its own, for example Discord at 100% while Chrome sits at 15%.",
  "prod.title": "Small tools for the working day",
  "prod.intro": "Four panels you would normally open as separate apps, now sitting at the top edge of the screen.",
  "carousel.prev": "Previous panel",
  "carousel.next": "Next panel",
  "carousel.label": "Productivity panels, scroll sideways to see them all",
  "prod.todo": "Type a task and press Enter to add it. Filter by Today, Upcoming or All, and finished tasks fold away under Completed.",
  "prod.note": "Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> anytime to start a quick note. Pin the ones that matter and search the rest.",
  "prod.shelf": "Drop files on the shelf to hold them for a moment, then drag them out to WhatsApp, Discord or a folder.",
  "prod.pomodoro": "25-minute focus sessions with short and long breaks. Tie a session to a task and see how many sessions you finished today.",
  "health.title": "Water, prayer, and PC stats at a glance",
  "health.water": "Set a daily goal, log each glass with the Drink button, then check the hourly chart and your history. Drink reminders can be switched on or off.",
  "health.prayerTitle": "Prayer",
  "health.prayer": "Five daily prayer times for your location with the Hijri date, a countdown to the next prayer, and Mark/Done buttons for the ones you completed.",
  "health.monitor": "CPU and GPU load with temperatures, Wi-Fi speed and ping, and memory use. Each one has its own tab when you want more detail.",
  "cust.title": "Change its shape and what it shows",
  "cust.intro": "Try a few of the appearance settings below. In the app, all of them live in Settings.",
  "pg.shape": "Shape",
  "pg.anchored": "Anchored",
  "pg.floating": "Floating",
  "pg.position": "Position",
  "pg.top": "Top",
  "pg.bottom": "Bottom",
  "pg.slots": "What the idle notch shows",
  "pg.left": "Left",
  "pg.center": "Center",
  "pg.right": "Right",
  "pg.swap": "Swap left and right",
  "pg.preview": "Notch preview",
  "pg.note": "Clock and date use your device's time. The other values are examples taken from the app's screenshots.",
  "settings.title": "A separate Gili Settings app",
  "settings.lede": "Since 4.2.1, settings live in their own app called Gili Settings. Seven pages in the left sidebar, live preview on the right.",
  "settings.tabs": "Gili Settings pages",
  "settings.tabsNav": "Tabs & Navigation",
  "settings.tabsText": "Reorder and toggle notch tabs with drag handles or arrows, with a live dock preview and an active-tab counter.",
  "settings.general": "General",
  "settings.appearance": "Appearance",
  "settings.notif": "Notifications",
  "settings.shortcuts": "Shortcuts",
  "settings.system": "System",
  "settings.generalText": "Interface language (English or Indonesia), launch with Windows, a startup greeting with your name, auto-compact mode that shrinks the notch while a browser is active, and the delay before a panel closes.",
  "settings.appearanceText": "Choose an anchored notch or a floating island, top or bottom position, dark/light/auto theme, font size, idle size, panel width, Gili Ears, and transparency.",
  "settings.idleText": "Decide what the closed notch shows in its left, center and right slots: clock, date, battery, CPU, RAM, net speed, ping, weather, to-do, FPS, a Smart slot, or nothing. A live preview and a swap button help you arrange them.",
  "settings.notifText": "Set notification duration and sound, move Windows notifications into Gili, test pop-ups, and toggle Volume Monitor, Clipboard Monitor, Media Player, sound effects, and Pomodoro.",
  "settings.shortcutsText": "Global shortcuts: open/close the notch, quick-add a task, quick note, jump to the music page, play/pause, focus mode, and hide the notch. All remappable.",
  "settings.systemText": "Check for updates, clean temporary files and the Windows cache, test the idle notification, or reset every setting to its default.",
  "cta.title": "Put GILI Notch on your PC",
  "cta.body": "Download GILI Notch 4.2.1, run the file, and the notch appears at the top edge of your screen. Questions before you install? Ask on Discord.",
  "cta.discord": "Ask on Discord",
  "cta.meta": "Windows .exe file, 18 MB",
  "cta.video": "Gili logo animation: a blue dome with waves, then the words gili, notch for windows",
  "support.title": "Support GILI Notch",
  "support.body": "If GILI Notch has earned its spot at the top of your screen, you can support its development by scanning the QRIS code.",
  "qris.title": "Pay with QRIS",
  "qris.alt": "QRIS code for supporting GILI Notch",
  "qris.scan": "Scan to pay.",
  "qris.how": "Open any e-wallet or mobile banking app that supports QRIS and point the camera at this code.",
  "qris.mobile": "Reading this on your phone? Save the image, then upload it from the gallery in your payment app.",
  "qris.save": "Save the QRIS image",
  "help.title": "Need help?",
  "help.body": "Bring your questions, bug reports and feature ideas to the Discord server.",
  "help.cta": "Join the Discord server",
  "footer.line": "GILI Notch 4.2.1 for Windows",
  "footer.nav": "Footer links",
  "footer.top": "Back to top",
  "lightbox.label": "Full-size screenshot",
  "lightbox.close": "Close",

  "alt.nowPlaying": "GILI Notch Now Playing panel playing DtMF by Bad Bunny, with a recently played list",
  "alt.lyrics": "Now Playing panel showing synced lyrics from LRCLIB with the current line highlighted",
  "alt.controlCenter": "GILI Notch Control Center with Wi-Fi, Bluetooth, Do Not Disturb, Hotspot, power mode, shortcuts, and brightness and volume sliders",
  "alt.volumeMixer": "Volume Mixer panel with the output device and separate volume sliders for Chrome, Discord, Steam and Wallpaper32",
  "alt.todo": "To-Do List panel with Today, Upcoming and All filters and an all tasks completed message",
  "alt.miniNote": "Mini Note panel with one pinned note and a search field",
  "alt.fileShelf": "File Shelf panel with a drag and drop area and a Choose files button",
  "alt.pomodoro": "Pomodoro panel with a 25:00 focus timer and Focus, Break and Long break modes",
  "alt.water": "Water panel with a 3.0 L goal, a 250 ml Drink button, an hourly chart, History and Settings",
  "alt.prayer": "GILI Notch Prayer panel: five daily prayer times for Malang with the next-prayer highlight and Mark buttons",
  "alt.systemMonitor": "System Monitor panel with CPU, GPU, Wi-Fi and Memory cards",
  "alt.settingsTabs": "Tabs and Navigation page in Gili Settings: live notch dock preview and a sortable tab list",
  "alt.settingsGeneral": "General and Behavior page in Gili Settings: language, Start with Windows, Startup Greeting, Greeting Name and Auto-compact mode",
  "alt.settingsAppearance": "Appearance and Style page in Gili Settings: anchored or floating shape, position, theme mode, font size, idle size and transparency",
  "alt.settingsIdle": "Idle Bar Layout page in Gili Settings: live preview and the item picker for the left, center and right slots",
  "alt.settingsNotif": "Notifications and Modules page in Gili Settings with duration, sound, and switches for Volume Monitor, Clipboard Monitor, Media Player, Sound Effects and Pomodoro",
  "alt.settingsShortcuts": "Keyboard Shortcuts page in Gili Settings: global hotkeys for the notch, tasks, notes, music and focus mode",
  "alt.settingsSystem": "System and About page in Gili Settings: Software Update, Clean Temporary Files, Test Idle Notification and Reset All Settings",

  "placeholder": "Link not set yet",
  "stage.loading": "Loading screenshot…",
  "stage.error": "The screenshot didn't load. Reload the page to try again.",
  "notch.closed": "GILI notch, closed. Click to open the {name} panel",
  "notch.open": "GILI notch, showing {name}. Click to close",
  "lightbox.loading": "Loading the full screenshot…",
  "lightbox.error": "The full screenshot didn't load. Close this window and try again.",

  "panel.nowPlaying": "The current track, playback controls and recently played.",
  "panel.controlCenter": "Wi-Fi, Bluetooth, power mode, brightness and volume.",
  "panel.todo": "Today's tasks and what's coming up.",
  "panel.miniNote": "Quick notes, opened with Ctrl + Shift + N.",
  "panel.fileShelf": "A holding spot for files before you drag them into another app.",
  "panel.pomodoro": "25-minute focus sessions and breaks.",
  "panel.water": "Your daily water log.",
  "panel.prayer": "Five daily prayer times with a countdown to the next one.",
  "panel.systemMonitor": "CPU, GPU, Wi-Fi and memory.",
  "panel.settings": "Language, appearance, idle slots, modules and more.",

  "slot.clock": "Clock",
  "slot.date": "Date",
  "slot.battery": "Battery",
  "slot.cpu": "CPU",
  "slot.ping": "Ping",
  "slot.weather": "Weather",
  "slot.empty": "Empty",
  "pg.anchored-top": "Anchored to the top",
  "pg.anchored-bottom": "Anchored to the bottom",
  "pg.floating-top": "Floating at the top",
  "pg.floating-bottom": "Floating at the bottom",
  "pg.summary": "{place}. Left: {left}, center: {center}, right: {right}.",
};

/* Indonesian strings that never appear in the initial HTML. */
const ID_EXTRA = {
  "alt.lyrics": "Panel Now Playing dengan lirik sinkron dari LRCLIB, baris yang sedang dinyanyikan disorot",
  "alt.volumeMixer": "Panel Volume Mixer dengan perangkat output dan slider volume terpisah untuk Chrome, Discord, Steam, dan Wallpaper32",
  "alt.settingsAppearance": "Halaman Appearance and Style di Gili Settings: bentuk anchored atau floating, posisi, mode tema, ukuran huruf, ukuran idle, dan transparansi",
  "alt.settingsIdle": "Halaman Idle Bar Layout di Gili Settings: pratinjau langsung dan pilihan isi untuk slot kiri, tengah, dan kanan",
  "alt.settingsNotif": "Halaman Notifications and Modules di Gili Settings: durasi, bunyi, dan sakelar Volume Monitor, Clipboard Monitor, Media Player, Sound Effects, dan Pomodoro",
  "alt.settingsShortcuts": "Halaman Keyboard Shortcuts di Gili Settings: hotkey global untuk notch, tugas, catatan, musik, dan mode fokus",
  "alt.settingsSystem": "Halaman System and About di Gili Settings: Software Update, Clean Temporary Files, Test Idle Notification, dan Reset All Settings",
  "alt.prayer": "Panel Prayer GILI Notch: jadwal shalat lima waktu untuk Malang dengan penanda shalat berikutnya dan tombol Mark",

  "placeholder": "Tautan belum diatur",
  "video.pause": "Jeda video",
  "stage.loading": "Memuat tangkapan layar…",
  "stage.error": "Tangkapan layar gagal dimuat. Muat ulang halaman untuk mencoba lagi.",
  "notch.closed": "Notch GILI, tertutup. Klik untuk membuka panel {name}",
  "notch.open": "Notch GILI, menampilkan {name}. Klik untuk menutup",
  "lightbox.loading": "Memuat tangkapan layar ukuran penuh…",
  "lightbox.error": "Tangkapan layar ukuran penuh gagal dimuat. Tutup jendela ini lalu coba lagi.",

  "panel.nowPlaying": "Lagu yang sedang diputar, kontrol pemutar, dan riwayat putar.",
  "panel.controlCenter": "Wi-Fi, Bluetooth, mode daya, kecerahan, dan volume.",
  "panel.todo": "Tugas hari ini dan yang akan datang.",
  "panel.miniNote": "Catatan cepat, dibuka dengan Ctrl + Shift + N.",
  "panel.fileShelf": "Tempat transit file sebelum kamu seret ke aplikasi lain.",
  "panel.pomodoro": "Sesi fokus 25 menit dan jeda istirahat.",
  "panel.water": "Catatan minum air harianmu.",
  "panel.prayer": "Jadwal shalat lima waktu dengan hitung mundur ke shalat berikutnya.",
  "panel.systemMonitor": "CPU, GPU, Wi-Fi, dan memori.",
  "panel.settings": "Bahasa, tampilan, slot idle, modul, dan lainnya.",

  "slot.clock": "Jam",
  "slot.date": "Tanggal",
  "slot.battery": "Baterai",
  "slot.cpu": "CPU",
  "slot.ping": "Ping",
  "slot.weather": "Cuaca",
  "slot.empty": "Kosong",
  "pg.anchored-top": "Menempel di atas",
  "pg.anchored-bottom": "Menempel di bawah",
  "pg.floating-top": "Mengambang di atas",
  "pg.floating-bottom": "Mengambang di bawah",
  "pg.summary": "{place}. Kiri: {left}, tengah: {center}, kanan: {right}.",
};

const PANELS = [
  { key: "nowPlaying", name: "Now Playing", file: "now-playing", w: 847, h: 365 },
  { key: "controlCenter", name: "Control Center", file: "control-center", w: 780, h: 515 },
  { key: "todo", name: "To-Do List", file: "todo", w: 780, h: 365 },
  { key: "miniNote", name: "Mini Note", file: "mini-note", w: 780, h: 440 },
  { key: "fileShelf", name: "File Shelf", file: "file-shelf", w: 780, h: 435 },
  { key: "pomodoro", name: "Pomodoro", file: "pomodoro", w: 780, h: 423 },
  { key: "water", name: "Water", file: "water", w: 780, h: 388 },
  { key: "prayer", name: "Prayer", file: "prayer", w: 780, h: 439 },
  { key: "systemMonitor", name: "System Monitor", file: "system-monitor", w: 780, h: 398 },
];

/* Sample values copied from the app screenshots; clock and date are live. */
const SLOT_VALUES = { battery: "79%", cpu: "28%", ping: "31ms", weather: "25°", empty: "" };
const SLOT_ORDER = ["clock", "date", "battery", "cpu", "ping", "weather", "empty"];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- i18n ---------- */

const DICT = { id: { ...ID_EXTRA }, en: EN };
let lang = "id";

function harvestIndonesian() {
  const id = DICT.id;
  id["meta.title"] = document.title;
  id["meta.description"] = $('meta[name="description"]').content;
  $$("[data-i18n]").forEach((el) => { id[el.dataset.i18n] ??= el.innerHTML.trim(); });
  $$("[data-i18n-aria]").forEach((el) => { id[el.dataset.i18nAria] ??= el.getAttribute("aria-label"); });
  $$("[data-i18n-alt]").forEach((el) => { id[el.dataset.i18nAlt] ??= el.getAttribute("alt"); });
}

function t(key, vars) {
  let str = DICT[lang][key] ?? DICT.id[key] ?? key;
  if (vars) str = str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  return str;
}

const onLangChange = [];

function applyLang(next) {
  lang = next === "en" ? "en" : "id";
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  $('meta[name="description"]').content = t("meta.description");
  $$("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  $$("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", t(el.dataset.i18nAlt)));
  $$(".lang-switch [data-lang]").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang)));
  onLangChange.forEach((fn) => fn());
}

function initLang() {
  harvestIndonesian();
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (_) { /* storage blocked, e.g. some file:// setups */ }
  const browser = (navigator.language || "").toLowerCase().startsWith("id") ? "id" : "en";
  applyLang(saved || browser);

  $$(".lang-switch [data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      try { localStorage.setItem(LANG_KEY, lang); } catch (_) { /* choice still applies for this visit */ }
    });
  });
}

/* ---------- Theme ---------- */

/* The inline script in <head> sets data-theme before first paint; this keeps it in sync afterwards. */
function initTheme() {
  const root = document.documentElement;
  const toggle = $("#theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const themeColor = $('meta[name="theme-color"]');
  const apply = (theme) => {
    root.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeColor.content = getComputedStyle(root).getPropertyValue("--bg").trim();
  };

  apply(root.dataset.theme === "dark" ? "dark" : "light");

  toggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (_) { /* choice still applies for this visit */ }
  });

  systemDark.addEventListener("change", (e) => {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (_) { /* fall through to the system setting */ }
    if (!saved) apply(e.matches ? "dark" : "light");
  });
}

/* ---------- Config links ---------- */

function isPlaceholder(url) {
  return !url || /PLACEHOLDER/i.test(url);
}

function initConfigLinks() {
  $$("[data-config-link]").forEach((link) => {
    const url = CONFIG[link.dataset.configLink];
    if (!isPlaceholder(url)) {
      link.href = url;
      return;
    }
    // Footer duplicates of the support buttons stay hidden until their URL is set.
    if (link.hasAttribute("data-plain-link")) {
      link.hidden = true;
      return;
    }
    link.setAttribute("aria-disabled", "true");
    link.removeAttribute("target");
    const note = document.createElement("span");
    note.className = "placeholder-note";
    note.dataset.i18n = "placeholder";
    note.textContent = t("placeholder");
    note.id = `ph-${Math.random().toString(36).slice(2, 8)}`;
    link.setAttribute("aria-describedby", note.id);
    link.parentElement.append(note);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      note.animate?.([{ transform: "translateX(0)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 220 });
    });
  });
}

/* ---------- Download count ---------- */

// 1,100 is the owner's starting total. The counter stores only clicks on the download button.
const DOWNLOAD_BASE = 1100;
const COUNTER_KEY = "gilinotch.github.io/downloads";
let downloadClicks = 0;

function formatDownloads(total) {
  return new Intl.NumberFormat(lang === "id" ? "id-ID" : "en-US").format(total);
}

function paintDownloads(clicks, live) {
  downloadClicks = clicks;
  const text = formatDownloads(DOWNLOAD_BASE + clicks);
  $$("[data-download-value]").forEach((el) => { if (el.textContent !== text) el.textContent = text; });
  $$("[data-download-live]").forEach((el) => el.classList.toggle("is-live", live));
}

async function counterRequest(action) {
  const response = await fetch(`https://abacus.jasoncameron.dev/${action}/${COUNTER_KEY}`);
  if (action === "get" && response.status === 404) return 0;
  if (!response.ok) throw new Error(String(response.status));
  const data = await response.json();
  return Number(data.value) || 0;
}

function initDownloadCount() {
  const refresh = () => {
    counterRequest("get").then((n) => paintDownloads(n, true)).catch(() => paintDownloads(downloadClicks, false));
  };
  refresh();
  setInterval(refresh, 20000);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") refresh();
  });
  $$('[data-config-link="DOWNLOAD_URL"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (link.getAttribute("aria-disabled") === "true") return;
      counterRequest("hit").then((n) => paintDownloads(n, true)).catch(() => {});
    });
  });
  onLangChange.push(() => paintDownloads(downloadClicks, document.querySelector("[data-download-live].is-live") !== null));
}

/* ---------- Header menu ---------- */

function initMenu() {
  const toggle = $(".menu-toggle");
  const nav = $("#site-nav");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 760px)").addEventListener("change", () => setOpen(false));
}

/* ---------- Live clock ---------- */

function formatClock(d) {
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }).format(d);
}
function formatDate(d) {
  const weekday = new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", { weekday: "short" }).format(d);
  return `${weekday}, ${d.getDate()}`;
}
function slotText(kind) {
  const now = new Date();
  if (kind === "clock") return formatClock(now);
  if (kind === "date") return formatDate(now);
  return SLOT_VALUES[kind] ?? "";
}
function tickClock() {
  $$("[data-live]").forEach((el) => { el.textContent = slotText(el.dataset.live); });
  renderPlayground?.();
}

/* ---------- Hero notch ---------- */

function initStage() {
  const stage = $("#hero-stage");
  const notch = $("#hero-notch");
  const shot = $(".notch-shot", notch);
  const status = $(".stage-status", stage);
  const pager = $("#stage-pager");
  const count = $(".stage-count");
  const name = $(".stage-name");
  const desc = $(".stage-caption-desc");
  let index = 0;
  let open = false;
  let token = 0;

  PANELS.forEach((p, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.index = String(i);
    b.addEventListener("click", () => show(i));
    pager.append(b);
  });

  const src = (p) => `assets/img/panels/${p.file}.webp`;

  function size(p) {
    const w = stage.clientWidth * 0.94;
    notch.style.setProperty("--pw", `${w}px`);
    notch.style.setProperty("--ph", `${(w * p.h) / p.w}px`);
  }

  function caption() {
    const p = PANELS[index];
    count.textContent = `${index + 1}/${PANELS.length}`;
    name.textContent = p.name;
    desc.textContent = t(`panel.${p.key}`);
    notch.setAttribute("aria-label", t(open ? "notch.open" : "notch.closed", { name: p.name }));
    $$("button", pager).forEach((b, i) => {
      b.setAttribute("aria-label", PANELS[i].name);
      if (i === index) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
  }

  function setStatus(key, state) {
    status.textContent = key ? t(key) : "";
    status.dataset.state = state || "";
    status.dataset.key = key || "";
  }

  function load(p, myToken) {
    const img = new Image();
    const slow = setTimeout(() => { if (myToken === token) setStatus("stage.loading", "loading"); }, 180);
    img.onload = () => {
      clearTimeout(slow);
      if (myToken !== token) return;
      shot.src = img.src;
      shot.alt = "";
      setStatus(null);
      const wait = reduceMotion.matches ? 0 : 320;
      setTimeout(() => { if (myToken === token && open) notch.classList.add("is-shown"); }, wait);
    };
    img.onerror = () => {
      clearTimeout(slow);
      if (myToken === token) setStatus("stage.error", "error");
    };
    img.src = src(p);
  }

  function show(i) {
    index = (i + PANELS.length) % PANELS.length;
    const p = PANELS[index];
    const myToken = ++token;
    const wasShown = notch.classList.contains("is-shown");
    open = true;
    notch.classList.remove("is-shown");
    stage.classList.add("is-open");
    notch.setAttribute("aria-expanded", "true");
    caption();
    const go = () => { if (myToken === token) { size(p); load(p, myToken); } };
    if (wasShown && !reduceMotion.matches) setTimeout(go, 200);
    else go();
  }

  function close() {
    token++;
    open = false;
    notch.classList.remove("is-shown");
    stage.classList.remove("is-open");
    notch.setAttribute("aria-expanded", "false");
    setStatus(null);
    caption();
  }

  notch.addEventListener("click", () => (open ? close() : show(index)));
  notch.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); }
  });
  $("#stage-next").addEventListener("click", () => show(index + 1));
  $("#stage-prev").addEventListener("click", () => show(index - 1));
  $(".demo").addEventListener("keydown", (e) => { if (e.key === "Escape" && open) { close(); notch.focus(); } });
  window.addEventListener("resize", () => { if (open) size(PANELS[index]); });

  PANELS.forEach((p) => { const pre = new Image(); pre.src = src(p); });

  onLangChange.push(() => {
    caption();
    if (status.dataset.key) setStatus(status.dataset.key, status.dataset.state);
  });
  caption();
}

/* ---------- Lyrics switch ---------- */

function initLyricsSwitch() {
  const sw = $("#lyrics-switch");
  const img = $("#media-img");
  const states = {
    false: { src: "assets/img/panels/now-playing.webp", full: "assets/img/original/now-playing.png", alt: "alt.nowPlaying" },
    true: { src: "assets/img/panels/lyrics.webp", full: "assets/img/original/lyrics.png", alt: "alt.lyrics" },
  };
  new Image().src = states.true.src;
  sw.addEventListener("click", () => {
    const on = sw.getAttribute("aria-checked") !== "true";
    sw.setAttribute("aria-checked", String(on));
    const s = states[on];
    img.src = s.src;
    img.dataset.full = s.full;
    img.dataset.i18nAlt = s.alt;
    img.alt = t(s.alt);
  });
}

/* ---------- Tabs ---------- */

function initTabs() {
  $$("[data-tabs]").forEach((group) => {
    const tabs = $$('[role="tab"]', group);
    const img = group.querySelector(".shot img") || group.closest("article, .settings-tour")?.querySelector(".shot img");

    function select(tab, focus) {
      tabs.forEach((t2) => {
        const on = t2 === tab;
        t2.setAttribute("aria-selected", String(on));
        t2.tabIndex = on ? 0 : -1;
        document.getElementById(t2.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
      if (img && tab.dataset.img) {
        img.src = tab.dataset.img;
        img.width = Number(tab.dataset.w);
        img.height = Number(tab.dataset.h);
        img.dataset.full = tab.dataset.full;
        img.dataset.i18nAlt = tab.dataset.altKey;
        img.alt = t(tab.dataset.altKey);
      }
    }

    tabs.forEach((tab, i) => {
      if (tab.dataset.img) new Image().src = tab.dataset.img;
      tab.addEventListener("click", () => select(tab, false));
      tab.addEventListener("keydown", (e) => {
        const last = tabs.length - 1;
        let next = null;
        if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
        if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = last;
        if (next !== null) { e.preventDefault(); select(tabs[next], true); }
      });
    });
  });
}

/* ---------- Carousel ---------- */

function initCarousel() {
  const track = $("#prod-track");
  const prev = $("[data-carousel-prev]");
  const next = $("[data-carousel-next]");
  const slides = $$(".slide", track);
  const maxScroll = () => track.scrollWidth - track.clientWidth;
  const stops = () => slides.map((s) => Math.min(s.offsetLeft - slides[0].offsetLeft, maxScroll()));
  const go = (left) => track.scrollTo({ left, behavior: reduceMotion.matches ? "auto" : "smooth" });
  const update = () => {
    prev.setAttribute("aria-disabled", String(track.scrollLeft <= 2));
    next.setAttribute("aria-disabled", String(track.scrollLeft >= maxScroll() - 2));
  };
  prev.addEventListener("click", () => {
    const before = stops().filter((x) => x < track.scrollLeft - 4);
    go(before.length ? before[before.length - 1] : 0);
  });
  next.addEventListener("click", () => {
    const after = stops().find((x) => x > track.scrollLeft + 4);
    go(after ?? maxScroll());
  });
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------- Playground ---------- */

let renderPlayground = null;

function initPlayground() {
  const form = $("#pg-form");
  const screen = $("#pg-screen");
  const summary = $("#pg-summary");
  const selects = $$("[data-slot-select]", form);
  const defaults = { left: "clock", center: "ping", right: "date" };

  function fillOptions() {
    selects.forEach((sel) => {
      const current = sel.value || defaults[sel.name];
      sel.innerHTML = "";
      SLOT_ORDER.forEach((kind) => {
        const opt = document.createElement("option");
        opt.value = kind;
        opt.textContent = t(`slot.${kind}`);
        sel.append(opt);
      });
      sel.value = current;
    });
  }

  renderPlayground = () => {
    const shape = form.elements.shape.value;
    const position = form.elements.position.value;
    screen.dataset.shape = shape;
    screen.dataset.position = position;
    const values = {};
    selects.forEach((sel) => {
      values[sel.name] = t(`slot.${sel.value}`);
      $(`[data-pg-slot="${sel.name}"]`, screen).textContent = slotText(sel.value);
    });
    summary.textContent = t("pg.summary", { place: t(`pg.${shape}-${position}`), ...values });
  };

  form.addEventListener("change", renderPlayground);
  $("#pg-swap").addEventListener("click", () => {
    const left = form.elements.left;
    const right = form.elements.right;
    [left.value, right.value] = [right.value, left.value];
    renderPlayground();
  });

  onLangChange.push(() => { fillOptions(); renderPlayground(); });
  fillOptions();
  renderPlayground();
}

/* ---------- Lightbox ---------- */

function initLightbox() {
  const dialog = $("#lightbox");
  const img = $("#lightbox-img");
  const caption = $("#lightbox-caption");
  const status = $("#lightbox-status");
  let opener = null;
  let statusKey = "";

  const setStatus = (key) => {
    statusKey = key || "";
    status.textContent = key ? t(key) : "";
  };

  $$("[data-zoom]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const source = $("img", btn);
      opener = btn;
      caption.textContent = source.alt;
      img.alt = source.alt;
      img.removeAttribute("src");
      setStatus("lightbox.loading");
      img.onload = () => setStatus(null);
      img.onerror = () => setStatus("lightbox.error");
      img.src = source.dataset.full || source.src;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else window.open(img.src, "_blank", "noopener");
    });
  });

  $("#lightbox-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => { opener?.focus(); });
  onLangChange.push(() => { if (statusKey) setStatus(statusKey); });
}

/* ---------- Videos ---------- */

/* Clips play only while on screen. With reduced motion they wait on a still frame until the visitor presses play. */
function initVideos() {
  $$("[data-video]").forEach((figure) => {
    const video = $("video", figure);
    const toggle = $(".video-toggle", figure);
    const steps = figure.dataset.steps ? $$("li", document.getElementById(figure.dataset.steps)) : [];
    let userPaused = reduceMotion.matches;
    let visible = !("IntersectionObserver" in window);

    const syncButton = () => {
      const playing = !video.paused;
      toggle.dataset.state = playing ? "playing" : "paused";
      toggle.setAttribute("aria-label", t(playing ? "video.pause" : "video.play"));
    };
    const syncSteps = () => {
      const now = video.currentTime;
      steps.forEach((li) => li.classList.toggle("is-active", now >= Number(li.dataset.from) && now < Number(li.dataset.to)));
    };
    const update = () => {
      if (visible && !userPaused) video.play().catch(() => { /* autoplay refused; the button still works */ });
      else video.pause();
    };

    if (reduceMotion.matches) {
      video.addEventListener("loadedmetadata", () => { video.currentTime = Number(figure.dataset.still) || 0; }, { once: true });
    }

    toggle.addEventListener("click", () => {
      userPaused = !video.paused;
      if (userPaused) video.pause();
      else video.play().catch(() => {});
    });
    video.addEventListener("play", syncButton);
    video.addEventListener("pause", syncButton);
    if (steps.length) {
      video.addEventListener("timeupdate", syncSteps);
      video.addEventListener("seeked", syncSteps);
    }

    if (!visible) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
      }, { threshold: 0.35 }).observe(figure);
    }

    onLangChange.push(syncButton);
    syncButton();
    update();
  });
}

/* ---------- Scroll reveal ---------- */

function initReveal() {
  const items = $$("[data-reveal]");
  if (!("IntersectionObserver" in window) || reduceMotion.matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

/* ---------- Boot ---------- */

initLang();
initTheme();
initConfigLinks();
initDownloadCount();
initMenu();
initStage();
initLyricsSwitch();
initTabs();
initCarousel();
initPlayground();
initLightbox();
initVideos();
initReveal();
tickClock();
onLangChange.push(tickClock);
setInterval(tickClock, 15000);
