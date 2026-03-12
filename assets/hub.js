(() => {
  const catalog = window.STORY_DESIGNS || [];
  const grid = document.querySelector("[data-design-grid]");

  if (!grid || !catalog.length) {
    return;
  }

  grid.innerHTML = catalog
    .map(
      (design, index) => `
        <article class="card" style="--card-accent-rgb:${design.accentRgb};">
          <div class="card__head">
            <div>
              <div class="card__label">0${index + 1} / ${design.note}</div>
              <strong class="card__name">${design.name}</strong>
            </div>
            <div class="swatch" aria-hidden="true">
              <span></span>
              <span style="opacity:0.66;"></span>
              <span style="opacity:0.38;"></span>
            </div>
          </div>
          <p class="card__copy">${design.preview}</p>
          <div class="card__preview">
            <div class="card__mini">
              <strong>Shared foundation</strong>
              <p>Full-page scrolling, dynamic modules, fixed chapter rail, and interactive proof panels.</p>
            </div>
            <div class="card__stack">
              <div>Five scroll scenes</div>
              <div>Private VPC narrative</div>
              <div>Shift + left/right switches variant</div>
            </div>
          </div>
          <div class="card__actions">
            <a class="button" href="./designs/${design.file}">Open design</a>
            <a class="button button--ghost" href="./designs/${design.file}#chapter-economics">Jump to economics</a>
          </div>
        </article>
      `
    )
    .join("");
})();
