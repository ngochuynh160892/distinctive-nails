import { escapeHtml } from "../render.js";

const app = document.getElementById("app");
const NAV = [
  { id: "site", label: "Tiệm", group: "Nội dung" },
  { id: "hero", label: "Hero", group: "Nội dung" },
  { id: "about", label: "Giới thiệu", group: "Nội dung" },
  { id: "offerings", label: "Dịch vụ", group: "Dịch vụ" },
  { id: "gallery", label: "Gallery", group: "Media" },
  { id: "reviews", label: "Đánh giá", group: "Media" },
  { id: "settings", label: "Cài đặt", group: "Hệ thống" },
];

let state = null;
let section = "site";
let offerTab = "cards";
let settingsTab = "contact";
let error = "";
let dirty = false;
let saving = false;
let navOpen = false;
let toasts = [];
let savedJson = "";

function icon(name) {
  const icons = {
    shop: "M4 10h16v10H4zM4 10l8-6 8 6",
    star: "M12 3l2.5 6.5L21 10l-5 4 1.8 7L12 17l-5.8 4L8 14 3 10l6.5-.5z",
    info: "M12 4a8 8 0 100 16 8 8 0 000-16zm0 7v5m0-8h.01",
    grid: "M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z",
    image: "M4 5h16v14H4zM8 11l3 3 5-6",
    quote: "M7 8h5v5H8a4 4 0 01-1-7zm9 0h5v5h-4a4 4 0 01-1-7z",
    cog: "M12 8a4 4 0 100 8 4 4 0 000-8zm8 4h-2m-12 0H4m8-8v2m0 12v2",
  };
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="${icons[name]}" /></svg>`;
}

const NAV_ICONS = {
  site: "shop",
  hero: "star",
  about: "info",
  offerings: "grid",
  gallery: "image",
  reviews: "quote",
  settings: "cog",
};

function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function set(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const parent = keys.reduce((acc, key) => acc[key], obj);
  parent[last] = value;
}

function markDirty() {
  dirty = Boolean(state) && JSON.stringify(state) !== savedJson;
  const badge = document.querySelector("[data-dirty]");
  if (badge) badge.hidden = !dirty;
}

function showToast(message, { undo } = {}) {
  const id = Date.now();
  toasts.unshift({ id, message, undo });
  renderToasts();
  setTimeout(() => dismissToast(id), 5000);
}

function dismissToast(id) {
  toasts = toasts.filter((item) => item.id !== id);
  renderToasts();
}

function renderToasts() {
  let stack = document.querySelector(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  stack.innerHTML = toasts
    .map(
      (item) => `<div class="toast" role="status">
        <span>${escapeHtml(item.message)}</span>
        ${item.undo ? `<button type="button" data-undo="${item.id}">Hoàn tác</button>` : ""}
        <button type="button" data-dismiss-toast="${item.id}" aria-label="Đóng">✕</button>
      </div>`
    )
    .join("");
}

async function api(url, options = {}) {
  const headers = { ...(options.headers || {}) };
  if (!(options.body instanceof FormData)) headers["Content-Type"] = "application/json";
  const response = await fetch(url, { credentials: "include", ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}

function field(label, path, type = "text", options = {}) {
  const value = get(state, path) ?? "";
  const inputType = options.inputType || type;
  if (type === "textarea") {
    return `<label class="field">
      <span class="label">${label}</span>
      <textarea data-path="${path}" rows="4">${escapeHtml(value)}</textarea>
      ${options.hint ? `<span class="hint">${options.hint}</span>` : ""}
    </label>`;
  }
  return `<label class="field">
    <span class="label">${label}</span>
    <input type="${inputType}" data-path="${path}" value="${escapeHtml(value)}" ${
      options.autocomplete ? `autocomplete="${options.autocomplete}"` : ""
    } ${options.placeholder ? `placeholder="${escapeHtml(options.placeholder)}"` : ""} />
    ${options.hint ? `<span class="hint">${options.hint}</span>` : ""}
  </label>`;
}

function enabledRow(path, label) {
  const on = get(state, path) !== false;
  return `<div class="check-row">
    <label>
      <input type="checkbox" data-path="${path}" ${on ? "checked" : ""} />
      <span>${label}<br /><span class="hint">Áp dụng sau khi lưu</span></span>
    </label>
  </div>`;
}

function imageField(label, path) {
  const src = get(state, path) || "";
  return `<div class="field">
    <span class="label">${label}</span>
    <div class="dropzone" data-dropzone="${path}">
      ${src ? `<img src="${escapeHtml(src)}" alt="">` : ""}
      <p>${src ? "Kéo ảnh khác để thay" : "Kéo ảnh vào đây hoặc chọn file"}</p>
      <p class="hint">JPG, PNG, WEBP · tối đa 8 MB</p>
      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" data-upload="${path}" />
    </div>
    ${field("Đường dẫn ảnh", path, "text", { hint: "Hoặc dán URL /images/..." })}
  </div>`;
}

function tabs(items, active, attr) {
  return `<div class="tabs" role="tablist">
    ${items
      .map(
        ([id, label]) =>
          `<button type="button" role="tab" aria-selected="${id === active}" class="${
            id === active ? "is-active" : ""
          }" data-${attr}="${id}">${label}</button>`
      )
      .join("")}
  </div>`;
}

function emptyState(title, text, cta) {
  return `<div class="empty">
    <h3>${title}</h3>
    <p>${text}</p>
    ${cta || ""}
  </div>`;
}

function renderLogin() {
  app.innerHTML = `
    <a class="skip-link" href="#login">Bỏ qua đến form</a>
    <div class="login">
      <form class="login-card" id="login" data-login>
        <p class="eyebrow">Distinctive Nails</p>
        <h1>Đăng nhập admin</h1>
        <p class="lede">Chỉnh nội dung website tiệm nail.</p>
        ${error ? `<div class="alert alert-error" role="alert">${escapeHtml(error)}</div>` : ""}
        <div class="stack">
          <label class="field"><span class="label">Tài khoản</span><input name="username" value="admin" autocomplete="username" /></label>
          <label class="field"><span class="label">Mật khẩu</span><input name="password" type="password" autocomplete="current-password" /></label>
          <div class="alert alert-info">Mặc định lần đầu: admin / distinctive — hãy đổi sau khi vào.</div>
          <button class="btn btn-primary btn-block" type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  `;
}

function renderSkeleton() {
  app.innerHTML = `<div class="skeleton">
    <div class="skel" style="width:40%"></div>
    <div class="skel skel-card"></div>
    <div class="skel skel-card"></div>
  </div>`;
}

function pageTitle() {
  return NAV.find((item) => item.id === section)?.label || "Admin";
}

function shell(inner) {
  const groups = [...new Set(NAV.map((item) => item.group))];
  return `
    <a class="skip-link" href="#content">Bỏ qua đến nội dung</a>
    <div class="shell ${navOpen ? "nav-open" : ""}">
      <div class="overlay" data-nav-close></div>
      <aside class="sidebar">
        <div class="brand">
          <span class="mark">D</span>
          <div>
            <strong>Distinctive</strong>
            <small>Quản trị nội dung</small>
          </div>
        </div>
        <nav aria-label="Admin">
          ${groups
            .map((group) => {
              const items = NAV.filter((item) => item.group === group);
              return `<p class="nav-group">${group}</p>
                ${items
                  .map(
                    (item) => `<button type="button" class="nav-item ${
                      section === item.id ? "is-active" : ""
                    }" data-section="${item.id}" ${
                      section === item.id ? 'aria-current="page"' : ""
                    }>${icon(NAV_ICONS[item.id])}<span>${item.label}</span></button>`
                  )
                  .join("")}`;
            })
            .join("")}
        </nav>
        <div class="sidebar-foot">
          <a class="nav-item" href="/" target="_blank" rel="noopener">Xem website</a>
          <button type="button" class="nav-item" data-logout>Đăng xuất</button>
        </div>
      </aside>
      <div class="workspace">
        <header class="topbar">
          <div class="top-meta">
            <button class="menu-toggle" type="button" data-nav-toggle aria-label="Mở menu">${icon("grid")}</button>
            <h1>${pageTitle()}</h1>
            <span class="badge" data-dirty ${dirty ? "" : "hidden"}>Chưa lưu</span>
          </div>
          <div class="actions">
            <a class="btn btn-tertiary" href="/" target="_blank" rel="noopener">Xem trang</a>
            <button class="btn btn-primary" type="button" data-save ${saving ? "disabled" : ""}>
              ${saving ? "Đang lưu…" : "Lưu thay đổi"}
            </button>
          </div>
        </header>
        <div class="content" id="content">${inner}</div>
      </div>
    </div>
  `;
}

function renderSite() {
  return `<div class="card">
      <h2>Thông tin tiệm</h2>
      <div class="stack">
        ${field("Tên thương hiệu", "site.brandName")}
        ${field("Ký tự logo", "site.logoMark")}
        ${field("Điện thoại hiển thị", "site.phone", "text", { inputType: "tel", autocomplete: "tel" })}
        ${field("Số để gọi (tel)", "site.phoneTel", "text", { inputType: "tel", hint: "Ví dụ: +18436885605" })}
        ${field("Email", "site.email", "text", { inputType: "email", autocomplete: "email" })}
        ${field("Địa chỉ dòng 1", "site.addressLine1", "text", { autocomplete: "address-line1" })}
        ${field("Địa chỉ dòng 2", "site.addressLine2", "text", { autocomplete: "address-line2" })}
        ${field("Thành phố / khu vực", "site.city")}
      </div>
    </div>
    <div class="card">
      <h2>Giờ mở cửa & liên kết</h2>
      <div class="stack">
        ${field("Giờ ngắn (thanh trên)", "site.hoursShort")}
        ${field("Giờ đầy đủ", "site.hoursLong")}
        ${field("Chủ nhật", "site.hoursSunday")}
        ${field("Link đặt lịch", "site.bookingUrl", "text", { inputType: "url" })}
        ${field("Instagram URL", "site.instagramUrl", "text", { inputType: "url" })}
        ${field("Instagram handle", "site.instagramHandle", "text", { placeholder: "@distinctivenails.summerville" })}
        ${field("Facebook URL", "site.facebookUrl", "text", { inputType: "url" })}
        ${field("Dòng top bar", "site.topbarLeft")}
        ${field("Tagline footer", "site.footerTagline")}
      </div>
    </div>`;
}

function renderHero() {
  return `<div class="card">
      <h2>Nội dung hero</h2>
      <div class="stack">
        ${field("Eyebrow", "hero.eyebrow")}
        ${field("Tiêu đề", "hero.title")}
        ${field("Chữ nhấn (in nghiêng)", "hero.accent")}
        ${field("Mô tả", "hero.subtitle", "textarea")}
        ${field("Nút chính", "hero.primaryCta")}
        ${field("Nút phụ", "hero.secondaryCta")}
        ${field("Điểm Google", "hero.badgeValue")}
        ${field("Nhãn điểm", "hero.badgeLabel")}
      </div>
    </div>
    <div class="card">
      <h2>Ảnh</h2>
      ${imageField("Ảnh nail chính", "hero.image")}
      ${field("Mô tả ảnh chính (alt)", "hero.imageAlt")}
      ${imageField("Ảnh salon", "hero.salonImage")}
      ${field("Mô tả ảnh salon (alt)", "hero.salonAlt")}
    </div>
    <div class="card">
      <h2>Chữ chạy</h2>
      <div class="row-list">
        ${(state.marquee || [])
          .map(
            (item, index) => `<div class="row-line">
              <input class="inline-input" data-path="marquee.${index}" value="${escapeHtml(item)}" aria-label="Chữ chạy ${index + 1}" />
              <button class="btn btn-danger" type="button" data-remove="marquee" data-index="${index}">Xóa</button>
            </div>`
          )
          .join("")}
      </div>
      <button class="btn btn-secondary" type="button" data-add="marquee" style="margin-top:16px">Thêm chữ chạy</button>
    </div>`;
}

function renderAbout() {
  return `<div class="card">
      ${enabledRow("about.enabled", "Hiện mục Giới thiệu trên website")}
      <div class="stack" style="margin-top:16px">
        ${field("Eyebrow", "about.eyebrow")}
        ${field("Tiêu đề", "about.heading")}
        ${field("Đoạn 1", "about.paragraph1", "textarea")}
        ${field("Đoạn 2", "about.paragraph2", "textarea")}
      </div>
    </div>
    <div class="card">
      <h2>Điểm nổi bật</h2>
      <div class="row-list">
        ${(state.about.points || [])
          .map(
            (item, index) => `<div class="row-line">
              <input class="inline-input" data-path="about.points.${index}" value="${escapeHtml(item)}" />
              <button class="btn btn-danger" type="button" data-remove="about.points" data-index="${index}">Xóa</button>
            </div>`
          )
          .join("")}
      </div>
      <button class="btn btn-secondary" type="button" data-add="about.points" style="margin-top:16px">Thêm điểm</button>
    </div>
    <div class="card">
      <h2>Ảnh</h2>
      ${imageField("Ảnh lớn", "about.imageA")}
      ${field("Alt ảnh lớn", "about.imageAAlt")}
      ${imageField("Ảnh nhỏ", "about.imageB")}
      ${field("Alt ảnh nhỏ", "about.imageBAlt")}
    </div>`;
}

function renderServiceCards() {
  const items = state.services.items || [];
  return `${enabledRow("services.enabled", "Hiện thẻ dịch vụ trên website")}
    <div class="stack" style="margin-top:16px">
      ${field("Eyebrow", "services.eyebrow")}
      ${field("Tiêu đề", "services.heading")}
      ${field("Mô tả", "services.sub", "textarea")}
    </div>
    ${
      items.length
        ? items
            .map(
              (_item, index) => `<div class="card" style="margin-top:16px">
          <div class="row-line">
            <h2>Dịch vụ ${index + 1}</h2>
            <button class="btn btn-danger" type="button" data-remove="services.items" data-index="${index}">Xóa</button>
          </div>
          ${field("Tên", `services.items.${index}.title`)}
          ${field("Mô tả", `services.items.${index}.text`, "textarea")}
          ${field("Giá từ", `services.items.${index}.from`)}
        </div>`
            )
            .join("")
        : emptyState("Chưa có thẻ dịch vụ", "Thêm dịch vụ nổi bật để hiện trên trang chủ.")
    }
    <button class="btn btn-secondary" type="button" data-add="services.items" style="margin-top:16px">Thêm dịch vụ</button>`;
}

function renderMenu() {
  const cats = state.menu.categories || [];
  return `${enabledRow("menu.enabled", "Hiện bảng giá trên website")}
    <div class="stack" style="margin-top:16px">
      ${field("Eyebrow", "menu.eyebrow")}
      ${field("Tiêu đề", "menu.heading")}
      ${field("Mô tả", "menu.sub", "textarea")}
    </div>
    ${cats
      .map(
        (cat, cIndex) => `<div class="card" style="margin-top:16px">
        <div class="row-line">
          <h2>${escapeHtml(cat.label || "Tab")}</h2>
          <button class="btn btn-danger" type="button" data-remove="menu.categories" data-index="${cIndex}">Xóa tab</button>
        </div>
        ${field("ID tab", `menu.categories.${cIndex}.id`, "text", { hint: "Không dấu, ví dụ: nails" })}
        ${field("Tên tab", `menu.categories.${cIndex}.label`)}
        ${(cat.groups || [])
          .map(
            (group, gIndex) => `<div style="margin-top:16px">
              <div class="row-line">
                ${field("Tên nhóm", `menu.categories.${cIndex}.groups.${gIndex}.name`)}
                <button class="btn btn-danger" type="button" data-remove="menu.categories.${cIndex}.groups" data-index="${gIndex}">Xóa nhóm</button>
              </div>
              ${(group.items || []).length
                ? `<div class="table-wrap"><table>
                  <thead><tr><th>Dịch vụ</th><th class="num">Giá</th><th></th></tr></thead>
                  <tbody>
                    ${(group.items || [])
                      .map(
                        (_item, iIndex) => `<tr>
                          <td><input class="inline-input" data-path="menu.categories.${cIndex}.groups.${gIndex}.items.${iIndex}.name" value="${escapeHtml(
                            _item.name || ""
                          )}" /></td>
                          <td class="num"><input class="inline-input" data-path="menu.categories.${cIndex}.groups.${gIndex}.items.${iIndex}.price" value="${escapeHtml(
                            _item.price || ""
                          )}" /></td>
                          <td><button class="btn btn-danger" type="button" data-remove="menu.categories.${cIndex}.groups.${gIndex}.items" data-index="${iIndex}">Xóa</button></td>
                        </tr>`
                      )
                      .join("")}
                  </tbody>
                </table></div>`
                : emptyState("Nhóm trống", "Thêm dòng giá cho nhóm này.")}
              <button class="btn btn-secondary" type="button" data-add="menu.categories.${cIndex}.groups.${gIndex}.items" style="margin-top:12px">Thêm dòng giá</button>
            </div>`
          )
          .join("")}
        <button class="btn btn-secondary" type="button" data-add="menu.categories.${cIndex}.groups" style="margin-top:12px">Thêm nhóm</button>
      </div>`
      )
      .join("")}
    <button class="btn btn-secondary" type="button" data-add="menu.categories" style="margin-top:16px">Thêm tab bảng giá</button>`;
}

function renderOfferings() {
  return `${tabs(
    [
      ["cards", "Thẻ dịch vụ"],
      ["menu", "Bảng giá"],
    ],
    offerTab,
    "offertab"
  )}
  ${offerTab === "menu" ? renderMenu() : renderServiceCards()}`;
}

function renderGallery() {
  const filters = state.gallery.filters || [];
  const images = state.gallery.images || [];
  return `<div class="card">
      ${enabledRow("gallery.enabled", "Hiện gallery trên website")}
      <div class="stack" style="margin-top:16px">
        ${field("Eyebrow", "gallery.eyebrow")}
        ${field("Tiêu đề", "gallery.heading")}
        ${field("Mô tả", "gallery.sub", "textarea", { hint: "Dùng {instagram} để chèn handle" })}
      </div>
    </div>
    <div class="card">
      <h2>Bộ lọc</h2>
      ${(filters || [])
        .map(
          (_f, index) => `<div class="filter-row">
            ${field("ID", `gallery.filters.${index}.id`)}
            ${field("Nhãn", `gallery.filters.${index}.label`)}
            <button class="btn btn-danger" type="button" data-remove="gallery.filters" data-index="${index}">Xóa</button>
          </div>`
        )
        .join("")}
      <button class="btn btn-secondary" type="button" data-add="gallery.filters">Thêm bộ lọc</button>
    </div>
    <div class="card">
      <div class="row-line">
        <h2>Ảnh gallery</h2>
      </div>
      <div class="dropzone" data-gallery-drop>
        <p>Kéo nhiều ảnh vào đây hoặc chọn file</p>
        <p class="hint">JPG, PNG, WEBP · tối đa 8 MB / ảnh</p>
        <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" data-gallery-upload />
      </div>
      ${
        images.length
          ? `<div class="gallery-grid">${images
              .map((image, index) => {
                const cats = image.categories || [];
                return `<article class="media-card">
                  <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "")}" />
                  <div class="body">
                    ${field("Alt", `gallery.images.${index}.alt`)}
                    <div class="chips">
                      ${filters
                        .filter((item) => item.id !== "all")
                        .map(
                          (filter) => `<label>
                            <input type="checkbox" data-cat="${index}" value="${escapeHtml(filter.id)}" ${
                            cats.includes(filter.id) ? "checked" : ""
                          } />
                            ${escapeHtml(filter.label)}
                          </label>`
                        )
                        .join("")}
                    </div>
                    <button class="btn btn-danger" type="button" data-remove="gallery.images" data-index="${index}">Xóa ảnh</button>
                  </div>
                </article>`;
              })
              .join("")}</div>`
          : emptyState("Chưa có ảnh", "Tải ảnh nail art để hiện trên website.")
      }
    </div>`;
}

function renderReviews() {
  const items = state.reviews.items || [];
  return `<div class="card">
      ${enabledRow("reviews.enabled", "Hiện đánh giá trên website")}
      <div class="stack" style="margin-top:16px">
        ${field("Eyebrow", "reviews.eyebrow")}
        ${field("Tiêu đề", "reviews.heading")}
      </div>
    </div>
    ${
      items.length
        ? items
            .map(
              (_item, index) => `<div class="card">
          ${field("Trích dẫn", `reviews.items.${index}.quote`, "textarea")}
          ${field("Tên", `reviews.items.${index}.author`)}
          ${field("Vai trò", `reviews.items.${index}.role`)}
          <button class="btn btn-danger" type="button" data-remove="reviews.items" data-index="${index}">Xóa</button>
        </div>`
            )
            .join("")
        : emptyState("Chưa có đánh giá", "Thêm nhận xét khách để hiện trên trang chủ.")
    }
    <button class="btn btn-secondary" type="button" data-add="reviews.items">Thêm đánh giá</button>`;
}

function renderSettings() {
  return `${tabs(
    [
      ["contact", "Liên hệ"],
      ["gift", "Gift card"],
      ["seo", "SEO & mật khẩu"],
    ],
    settingsTab,
    "settingstab"
  )}
  ${
    settingsTab === "gift"
      ? `<div class="card">
      ${enabledRow("gift.enabled", "Hiện gift card trên website")}
      <div class="stack" style="margin-top:16px">
        ${field("Eyebrow", "gift.eyebrow")}
        ${field("Tiêu đề", "gift.heading")}
        ${field("Nội dung", "gift.text", "textarea")}
        ${field("Nút chính", "gift.primaryCta", "text", { hint: "Dùng {phone} để chèn số điện thoại" })}
        ${field("Nút phụ", "gift.secondaryCta")}
      </div>
    </div>`
      : settingsTab === "seo"
        ? `<div class="card">
      <h2>SEO</h2>
      <div class="stack">
        ${field("Title trang", "site.title")}
        ${field("Meta description", "site.description", "textarea")}
        ${field("Canonical URL", "site.canonical", "text", { inputType: "url" })}
        ${field("Google Ads ID", "site.googleAdsId")}
      </div>
    </div>
    <div class="card">
      <h2>Đổi mật khẩu</h2>
      <div class="stack">
        <label class="field"><span class="label">Mật khẩu hiện tại</span><input type="password" name="current" autocomplete="current-password" /></label>
        <label class="field"><span class="label">Mật khẩu mới</span><input type="password" name="next" autocomplete="new-password" /><span class="hint">Ít nhất 6 ký tự</span></label>
        <button class="btn btn-primary" type="button" data-password>Cập nhật mật khẩu</button>
      </div>
    </div>`
        : `<div class="card">
      ${enabledRow("visit.enabled", "Hiện mục liên hệ trên website")}
      <div class="stack" style="margin-top:16px">
        ${field("Eyebrow", "visit.eyebrow")}
        ${field("Tiêu đề", "visit.heading")}
        ${field("Mô tả", "visit.text", "textarea")}
        ${field("Nút book", "visit.bookCta")}
        ${field("Query Google Maps", "site.mapsQuery")}
      </div>
    </div>`
  }`;
}

const views = {
  site: renderSite,
  hero: renderHero,
  about: renderAbout,
  offerings: renderOfferings,
  gallery: renderGallery,
  reviews: renderReviews,
  settings: renderSettings,
};

function renderApp() {
  const y = document.querySelector(".content")?.scrollTop ?? 0;
  app.innerHTML = shell(views[section]());
  const content = document.querySelector(".content");
  if (content) content.scrollTop = y;
}

function emptyFor(path) {
  if (path.endsWith("items") && path.includes("menu")) return { name: "New item", price: "$0" };
  if (path.endsWith("groups")) return { name: "New group", items: [{ name: "New item", price: "$0" }] };
  if (path === "menu.categories") {
    return { id: `tab-${Date.now()}`, label: "New tab", groups: [{ name: "Group", items: [] }] };
  }
  if (path === "services.items") return { title: "New service", text: "", from: "From $0" };
  if (path === "reviews.items") return { quote: "", author: "", role: "" };
  if (path === "about.points" || path === "marquee") return "";
  if (path === "gallery.filters") return { id: "new", label: "New" };
  if (path === "gallery.images") return { src: "", alt: "", categories: [] };
  return {};
}

async function loadContent() {
  state = await api("/api/content");
  savedJson = JSON.stringify(state);
  dirty = false;
  renderApp();
}

async function save() {
  if (saving || !state) return;
  saving = true;
  renderApp();
  try {
    await api("/api/content", { method: "PUT", body: JSON.stringify(state) });
    savedJson = JSON.stringify(state);
    dirty = false;
    showToast("Đã lưu thay đổi");
  } catch (err) {
    showToast(err.message);
  } finally {
    saving = false;
    renderApp();
  }
}

function validateImage(file) {
  if (!file.type.startsWith("image/")) throw new Error("Chỉ nhận file ảnh");
  if (file.size > 8 * 1024 * 1024) throw new Error("Ảnh tối đa 8 MB");
}

async function uploadFile(file) {
  validateImage(file);
  const body = new FormData();
  body.append("file", file);
  const data = await api("/api/upload", { method: "POST", body, headers: {} });
  showToast("Đã tải ảnh lên");
  return data.url;
}

function bind() {
  app.addEventListener("submit", async (event) => {
    const form = event.target.closest("[data-login]");
    if (!form) return;
    event.preventDefault();
    error = "";
    const submit = form.querySelector("button[type=submit]");
    submit.disabled = true;
    submit.textContent = "Đang đăng nhập…";
    try {
      await api("/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: form.username.value,
          password: form.password.value,
        }),
      });
      renderSkeleton();
      await loadContent();
    } catch (err) {
      error = err.message;
      renderLogin();
    }
  });

  app.addEventListener("click", async (event) => {
    if (event.target.closest("[data-nav-toggle]")) {
      navOpen = !navOpen;
      document.querySelector(".shell")?.classList.toggle("nav-open", navOpen);
      return;
    }
    if (event.target.closest("[data-nav-close]")) {
      navOpen = false;
      document.querySelector(".shell")?.classList.remove("nav-open");
      return;
    }
    const sectionBtn = event.target.closest("[data-section]");
    if (sectionBtn) {
      section = sectionBtn.dataset.section;
      navOpen = false;
      renderApp();
      return;
    }
    const offer = event.target.closest("[data-offertab]");
    if (offer) {
      offerTab = offer.dataset.offertab;
      renderApp();
      return;
    }
    const setting = event.target.closest("[data-settingstab]");
    if (setting) {
      settingsTab = setting.dataset.settingstab;
      renderApp();
      return;
    }
    if (event.target.closest("[data-logout]")) {
      await api("/api/logout", { method: "POST", body: "{}" });
      state = null;
      dirty = false;
      renderLogin();
      return;
    }
    if (event.target.closest("[data-save]")) {
      await save();
      return;
    }
    if (event.target.closest("[data-password]")) {
      const current = app.querySelector('input[name="current"]')?.value || "";
      const next = app.querySelector('input[name="next"]')?.value || "";
      try {
        await api("/api/password", { method: "PUT", body: JSON.stringify({ current, next }) });
        showToast("Đã đổi mật khẩu");
      } catch (err) {
        showToast(err.message);
      }
      return;
    }
    const add = event.target.closest("[data-add]");
    if (add) {
      get(state, add.dataset.add).push(emptyFor(add.dataset.add));
      markDirty();
      renderApp();
      return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) {
      const path = remove.dataset.remove;
      const index = Number(remove.dataset.index);
      const list = get(state, path);
      const item = list.splice(index, 1)[0];
      markDirty();
      renderApp();
      showToast("Đã xóa", {
        undo: () => {
          list.splice(index, 0, item);
          markDirty();
          renderApp();
        },
      });
    }
  });

  app.addEventListener("input", (event) => {
    const path = event.target.dataset.path;
    if (!path) return;
    if (event.target.type === "checkbox" && !event.target.dataset.cat) {
      set(state, path, event.target.checked);
    } else {
      set(state, path, event.target.value);
    }
    markDirty();
  });

  app.addEventListener("change", async (event) => {
    try {
      if (event.target.dataset.cat) {
        const index = Number(event.target.dataset.cat);
        const id = event.target.value;
        const cats = state.gallery.images[index].categories || [];
        state.gallery.images[index].categories = event.target.checked
          ? [...new Set([...cats, id])]
          : cats.filter((item) => item !== id);
        markDirty();
        return;
      }
      if (event.target.dataset.upload) {
        const file = event.target.files?.[0];
        if (!file) return;
        const url = await uploadFile(file);
        set(state, event.target.dataset.upload, url);
        markDirty();
        renderApp();
        return;
      }
      if (event.target.dataset.galleryUpload !== undefined) {
        const file = event.target.files?.[0];
        if (!file) return;
        const url = await uploadFile(file);
        state.gallery.images.unshift({ src: url, alt: file.name.replace(/\.[^.]+$/, ""), categories: [] });
        markDirty();
        renderApp();
      }
    } catch (err) {
      showToast(err.message);
    }
  });

  ["dragover", "dragleave", "drop"].forEach((type) => {
    app.addEventListener(type, async (event) => {
      const zone = event.target.closest("[data-dropzone], [data-gallery-drop]");
      if (!zone) return;
      event.preventDefault();
      zone.classList.toggle("is-over", type === "dragover");
      if (type !== "drop") return;
      zone.classList.remove("is-over");
      const file = event.dataTransfer?.files?.[0];
      if (!file) return;
      try {
        const url = await uploadFile(file);
        if (zone.dataset.dropzone) set(state, zone.dataset.dropzone, url);
        else state.gallery.images.unshift({ src: url, alt: file.name.replace(/\.[^.]+$/, ""), categories: [] });
        markDirty();
        renderApp();
      } catch (err) {
        showToast(err.message);
      }
    });
  });
}

document.addEventListener("click", (event) => {
  const undo = event.target.closest("[data-undo]");
  if (undo) {
    const item = toasts.find((toast) => String(toast.id) === undo.dataset.undo);
    item?.undo?.();
    dismissToast(item.id);
    return;
  }
  const close = event.target.closest("[data-dismiss-toast]");
  if (close) dismissToast(Number(close.dataset.dismissToast));
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    save();
  }
  if (event.key === "Escape") {
    navOpen = false;
    document.querySelector(".shell")?.classList.remove("nav-open");
  }
});

window.addEventListener("beforeunload", (event) => {
  if (!dirty) return;
  event.preventDefault();
  event.returnValue = "";
});

bind();
renderSkeleton();

async function boot() {
  try {
    const me = await api("/api/me");
    if (me.authenticated) await loadContent();
    else renderLogin();
  } catch {
    renderLogin();
  }
}

boot();
