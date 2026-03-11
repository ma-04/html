(() => {
  const pages = [
    {
      file: "aurora-mesh.html",
      label: "Aurora Mesh",
      tone: "Futuristic gradient command center",
      interaction: "Industry mode switcher",
      accent: "#79f3d4",
      summary:
        "A soft-glow landing page that rotates instantly between regulated sectors and their private deployment proof points.",
      highlights: [
        "Dynamic industry metrics",
        "Ownership scorecards",
        "Private data source mapping",
      ],
    },
    {
      file: "atlas-console.html",
      label: "Atlas Console",
      tone: "Blueprint-style systems view",
      interaction: "Architecture stage explorer",
      accent: "#5e87ff",
      summary:
        "A light technical layout that explains how sovereign LLM deployment works across ingest, tuning, deployment, and audit.",
      highlights: [
        "Interactive architecture stages",
        "Capacity planning slider",
        "Operator ownership panel",
      ],
    },
    {
      file: "ledger-wave.html",
      label: "Ledger Wave",
      tone: "Warm editorial revenue case",
      interaction: "ROI calculator",
      accent: "#ff9961",
      summary:
        "A business-led design that quantifies retained IP, avoided leakage, and payback speed for a private-domain LLM estate.",
      highlights: [
        "Live savings calculator",
        "Scenario-based assumptions",
        "Animated value bars",
      ],
    },
    {
      file: "boundary-grid.html",
      label: "Boundary Grid",
      tone: "Dark security operations room",
      interaction: "Boundary mode switcher",
      accent: "#b4ff6a",
      summary:
        "A zero-leakage narrative built around trust boundaries, attack-surface reduction, and policy controls inside your own VPC.",
      highlights: [
        "Security posture ring",
        "Threat neutralization board",
        "Topology-aware controls",
      ],
    },
    {
      file: "signal-brief.html",
      label: "Signal Brief",
      tone: "Poster-like deployment sprint",
      interaction: "Launch plan builder",
      accent: "#00e1ff",
      summary:
        "A high-contrast campaign page that builds a launch plan by rollout speed and industry while keeping model ownership in-house.",
      highlights: [
        "Deployment timeline planner",
        "Industry play selectors",
        "Expandable objection handling",
      ],
    },
  ];

  window.LLMDesignPages = pages;

  const currentFile = window.location.pathname.split("/").pop();
  const currentIndex = pages.findIndex((page) => page.file === currentFile);

  if (currentIndex === -1) {
    return;
  }

  const prev = pages[(currentIndex - 1 + pages.length) % pages.length];
  const next = pages[(currentIndex + 1) % pages.length];

  const dock = document.createElement("nav");
  dock.className = "design-dock";
  dock.setAttribute("aria-label", "Design browser");
  dock.innerHTML = `
    <div class="design-dock__row">
      <div class="design-dock__meta">
        <span>5 concepts</span>
        <span>${pages[currentIndex].label}</span>
        <span>Arrow keys browse</span>
      </div>
      <a class="design-dock__home" href="../index.html">All designs</a>
    </div>
    <div class="design-dock__row">
      <a class="design-dock__pager" href="./${prev.file}" aria-label="Previous design">Prev</a>
      <div class="design-dock__cluster">
        ${pages
          .map(
            (page, index) => `
              <a class="design-dock__link ${index === currentIndex ? "is-active" : ""}" href="./${page.file}">
                ${page.label}
              </a>
            `
          )
          .join("")}
      </div>
      <a class="design-dock__pager" href="./${next.file}" aria-label="Next design">Next</a>
    </div>
  `;

  document.body.classList.add("has-design-dock");
  document.body.appendChild(dock);

  window.addEventListener("keydown", (event) => {
    const active = document.activeElement;
    const tag = active ? active.tagName : "";
    const isEditable =
      active &&
      (active.isContentEditable ||
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        tag === "BUTTON");

    if (isEditable) {
      return;
    }

    if (event.key === "ArrowLeft") {
      window.location.href = `./${prev.file}`;
    }

    if (event.key === "ArrowRight") {
      window.location.href = `./${next.file}`;
    }
  });
})();
