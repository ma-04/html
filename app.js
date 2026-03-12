const chapters = [
  {
    id: "chapter-core",
    index: "01",
    nav: "Sovereign Core",
    label: "Core promise",
    themeClass: "",
    word: "OWNERSHIP",
    accent: "#60e9ff",
    accentRgb: "96, 233, 255",
    eyebrow: "Chapter 01 / Sovereign Core",
    title: "Deploy enterprise-grade, domain-specific LLMs within your own VPC.",
    lead: "Full data sovereignty. Zero data leakage. Complete model ownership.",
    body:
      "Deploy domain-trained models where your data already lives. Keep prompts, checkpoints, evaluator loops, and telemetry inside infrastructure you control end to end.",
    bullets: [
      "Private retrieval, tuning, audit, and policy enforcement stay inside the customer boundary.",
      "Evaluator loops, prompt libraries, and checkpoint promotion compound into enterprise-owned IP.",
      "IAM, network policy, logging, and residency inherit the controls security teams already trust.",
    ],
    stats: [
      { value: 100, suffix: "%", label: "Model ownership retained" },
      { value: 0, suffix: "", label: "Third-party prompt retention" },
      { value: 21, suffix: " days", label: "First private launch window" },
    ],
    visual: "orbital",
  },
  {
    id: "chapter-depth",
    index: "02",
    nav: "Regulated Depth",
    label: "Vertical fit",
    themeClass: "",
    word: "REGULATED",
    accent: "#8ba0ff",
    accentRgb: "139, 160, 255",
    eyebrow: "Chapter 02 / Regulated Depth",
    title: "Regulated knowledge stays attached to the systems that govern it.",
    lead: "Different domains change the source systems, not the sovereignty model.",
    body:
      "Healthcare, finance, and public-sector teams use different source systems, but they all need the same guarantee: domain reasoning built from private context without exporting that context.",
    bullets: [
      "Switch between sector narratives without changing the deployment model.",
      "Show buyers the data sources, guardrails, and ownership outcomes that fit their environment.",
      "Keep vertical specificity without falling back to generic shared-API messaging.",
    ],
    stats: [
      { value: 3, suffix: "", label: "Regulated sectors in view" },
      { value: 1, suffix: "", label: "Private deployment model" },
      { value: 24, suffix: "/7", label: "Audit coverage expectation" },
    ],
    visual: "sectors",
  },
  {
    id: "chapter-boundary",
    index: "03",
    nav: "Boundary Proof",
    label: "Security architecture",
    themeClass: "",
    word: "BOUNDARY",
    accent: "#b6ff66",
    accentRgb: "182, 255, 102",
    eyebrow: "Chapter 03 / Boundary Proof",
    title: "A zero-leakage promise only works if the boundary is real.",
    lead: "Security posture becomes tangible when buyers can switch the operating boundary themselves.",
    body:
      "Security buyers need to inspect the boundary, not trust a slogan. Switch the operating mode and show what changes in custody, egress, observability, and review.",
    bullets: [
      "Single-tenant, regional, and air-gapped postures update instantly.",
      "Topology, control surfaces, and residency implications shift together.",
      "The message stays anchored in customer-held weight custody and internal observability.",
    ],
    stats: [
      { value: 96, suffix: "/100", label: "Reference security posture" },
      { value: 3, suffix: "", label: "Boundary modes shown" },
      { value: 1, suffix: "", label: "Customer-owned control plane" },
    ],
    visual: "boundary",
  },
  {
    id: "chapter-economics",
    index: "04",
    nav: "Ownership Economics",
    label: "Economic proof",
    themeClass: "chapter--editorial",
    word: "VALUE",
    accent: "#ff9a5a",
    accentRgb: "255, 154, 90",
    eyebrow: "Chapter 04 / Ownership Economics",
    title: "The economics improve when your corrections make your model smarter.",
    lead: "A shared API can answer questions. It cannot preserve the value created by your own review loops.",
    body:
      "Once the model estate is private, every correction, benchmark, and specialist tuning cycle becomes durable enterprise IP instead of vendor training exhaust.",
    bullets: [
      "Live controls update the retained-value model in real time.",
      "Outputs highlight displaced spend, removed review drag, and retained internal IP.",
      "The economic case stays tied to ownership rather than generic automation savings.",
    ],
    stats: [
      { value: 34, suffix: "%", label: "Illustrative value retained" },
      { value: 8, suffix: " mo", label: "Typical payback band" },
      { value: 4, suffix: "x", label: "Internal asset compounding" },
    ],
    visual: "economics",
  },
  {
    id: "chapter-launch",
    index: "05",
    nav: "Launch Sequence",
    label: "Rollout motion",
    themeClass: "chapter--poster",
    word: "ROLL OUT",
    accent: "#00f0b5",
    accentRgb: "0, 240, 181",
    eyebrow: "Chapter 05 / Launch Sequence",
    title: "From pilot to global rollout, the operating model stays yours.",
    lead: "The final scene closes with pace, control, and a plan buyers can picture.",
    body:
      "Pilot, production, or global rollout: the deployment model stays customer-owned from the first private corpus through the last promoted checkpoint.",
    bullets: [
      "Timeline phases update dynamically with each rollout scenario.",
      "Execution planning stays tied to ownership, residency, and operator scope.",
      "The page ends on rollout confidence, not a generic CTA wall.",
    ],
    stats: [
      { value: 30, suffix: " days", label: "Pilot motion" },
      { value: 90, suffix: " days", label: "Global rollout motion" },
      { value: 100, suffix: "%", label: "Customer ownership at every stage" },
    ],
    visual: "launch",
  },
];

const sectorDataset = {
  healthcare: {
    title: "Clinical reasoning beside protected records",
    copy:
      "Keep patient context, clinical prompts, and evaluator corrections inside the same boundary as the source systems that already govern them.",
    cards: [
      ["Private corpus", "EHR notes, radiology summaries, guideline retrieval"],
      ["Guardrails", "Role-aware access, citation grounding, policy review"],
      ["Ownership outcome", "Every corrected answer improves customer-held assets"],
    ],
    highlights: [
      ["Prompt retention stays disabled", "No public shared inference plane sees patient-linked interactions."],
      ["Policy enforcement stays local", "Clinical workflows inherit the same IAM and logging strategy as the surrounding systems."],
      ["Tuning remains proprietary", "Preference data and evaluator feedback deepen an internal clinical checkpoint."],
    ],
  },
  finance: {
    title: "Research and risk workflows without external exposure",
    copy:
      "Model behavior adapts to proprietary memos, committee language, and policy constraints while alpha and client-sensitive context remain in-network.",
    cards: [
      ["Private corpus", "Research notes, risk policies, committee decisions"],
      ["Guardrails", "Internal review chains, approval copy, entitlement-aware retrieval"],
      ["Ownership outcome", "Analyst prompts and corrections build a firm-owned intelligence layer"],
    ],
    highlights: [
      ["No shared prompt surface", "Deal context and strategy prompts never transit a vendor API."],
      ["Release cadence stays internal", "Checkpoint promotion follows enterprise governance, not external model churn."],
      ["Logs remain buyer-held", "Every action maps to internal audit systems and operator identities."],
    ],
  },
  public: {
    title: "Policy-grounded assistants in sovereign operating zones",
    copy:
      "Serve directives, memos, and guidance through a private model layer that preserves residency, operator scope, and agency-specific oversight.",
    cards: [
      ["Private corpus", "Policy libraries, memos, agency knowledge stores"],
      ["Guardrails", "Clearance-aware retrieval, answer controls, internal review loops"],
      ["Ownership outcome", "Agency-specific tuning and evaluator logic stay under customer custody"],
    ],
    highlights: [
      ["Residency is architectural", "Source systems, checkpoints, and logs remain in sovereign environments."],
      ["Oversight stays internal", "Security teams review the same private evidence chain they already govern."],
      ["Model lineage stays controlled", "Approved checkpoints are promoted only through customer-run processes."],
    ],
  },
};

const boundaryDataset = {
  single: {
    score: 92,
    title: "Single-tenant VPC",
    copy:
      "A dedicated customer boundary with private endpoints, internal logs, and customer-enforced IAM.",
    topology: [
      ["Identity", "Enterprise SSO and role claims gate every operator and workload."],
      ["Inference", "Requests hit private endpoints instead of a public shared model plane."],
      ["Audit", "Usage traces and evaluator output land in customer-held stores only."],
    ],
    controls: [
      ["Weight custody", "Customer-owned model registry and promotion workflow."],
      ["Telemetry path", "Customer SIEM only, with no vendor-side prompt analytics."],
      ["Residency rule", "Single-region pinning with inherited network segmentation."],
    ],
  },
  regional: {
    score: 96,
    title: "Regional dual VPC",
    copy:
      "Mirrored private control planes give buyers redundancy without sacrificing custody over weights, logs, or policy enforcement.",
    topology: [
      ["Identity", "Regional access policies keep operator scope mapped to customer IAM."],
      ["Inference", "Dual private VPCs support failover without crossing into shared public surfaces."],
      ["Audit", "Logs and evaluator history replicate between customer-owned stores."],
    ],
    controls: [
      ["Weight custody", "Private registry replication between approved regions."],
      ["Telemetry path", "Customer SIEM and observability stack only."],
      ["Residency rule", "Region-pinned operations with sovereign failover."],
    ],
  },
  airgap: {
    score: 99,
    title: "Air-gapped enclave",
    copy:
      "Maximum isolation for environments that need checkpoint movement, tuning, and review to happen without internet-reachable paths.",
    topology: [
      ["Identity", "Local directory and enclave-specific operator process."],
      ["Inference", "Weights, prompts, retrieval, and serving remain fully enclosed."],
      ["Audit", "Review and evidence stay inside the same controlled facility boundary."],
    ],
    controls: [
      ["Weight custody", "Offline checkpoint transfer under customer process only."],
      ["Telemetry path", "No external egress."],
      ["Residency rule", "Facility-bound operating model."],
    ],
  },
};

const economicsDataset = {
  banking: {
    base: 5200,
    title: "Banking and capital markets",
  },
  pharma: {
    base: 6100,
    title: "Pharma and life sciences",
  },
  insurance: {
    base: 4600,
    title: "Insurance operations",
  },
};

const launchDataset = {
  pilot: {
    legal: {
      brief:
        "Pilot a private legal reasoning system with secure retrieval, reviewable prompts, and customer-held evaluators in 30 days.",
      stats: [
        ["Residency", "1 region"],
        ["Operator scope", "80 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Week 1", "Map source systems, entitlements, and privileged matter boundaries."],
        ["Week 2", "Build private retrieval over contracts, memos, and policy libraries."],
        ["Week 3", "Run evaluator passes with counsel reviewers and tighten answer constraints."],
        ["Week 4", "Launch to a limited group behind customer IAM and logging."],
      ],
    },
    manufacturing: {
      brief:
        "Launch a plant-intelligence pilot with manuals, maintenance logs, and operator-safe reasoning inside your VPC in 30 days.",
      stats: [
        ["Residency", "1 region"],
        ["Operator scope", "120 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Week 1", "Pick plants, manuals, and source systems for the first private corpus."],
        ["Week 2", "Build retrieval over procedures, anomalies, and service documentation."],
        ["Week 3", "Tune prompts with engineering review and plant safety constraints."],
        ["Week 4", "Launch to a pilot shift with internal observability and fallback paths."],
      ],
    },
    public: {
      brief:
        "Deliver a sovereign public-sector assistant with policy-grounded retrieval and internal review inside 30 days.",
      stats: [
        ["Residency", "1 sovereign zone"],
        ["Operator scope", "60 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Week 1", "Define approved sources, security roles, and policy domains."],
        ["Week 2", "Stand up private retrieval over memos, directives, and knowledge systems."],
        ["Week 3", "Run evaluator suites with policy experts and tighten controls."],
        ["Week 4", "Release to a controlled cohort with buyer-held oversight."],
      ],
    },
  },
  production: {
    legal: {
      brief:
        "Move legal workflows to production in 60 days with private checkpoint management, internal review flows, and customer-held audit evidence.",
      stats: [
        ["Residency", "2 regions"],
        ["Operator scope", "240 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Days 1-15", "Map source systems, entitlements, and privileged matter access inside the VPC."],
        ["Days 16-30", "Deploy retrieval, policy controls, and reviewer workflows for legal teams."],
        ["Days 31-45", "Promote customer-owned checkpoints with benchmark and red-team evidence."],
        ["Days 46-60", "Launch production endpoints behind internal gateways and logging."],
      ],
    },
    manufacturing: {
      brief:
        "Reach production manufacturing support in 60 days with private retrieval, OT-aware controls, and company-owned tuning loops.",
      stats: [
        ["Residency", "2 regions"],
        ["Operator scope", "320 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Days 1-15", "Connect manuals, work instructions, and quality findings inside the private estate."],
        ["Days 16-30", "Configure routing, operator policies, and plant-specific prompt scaffolds."],
        ["Days 31-45", "Benchmark failure-mode reasoning and promote tuned checkpoints."],
        ["Days 46-60", "Deploy production assistants to engineering and support teams."],
      ],
    },
    public: {
      brief:
        "Deploy a policy-grounded public-sector assistant in 60 days with sovereign operations, reviewable logs, and complete model custody.",
      stats: [
        ["Residency", "2 sovereign zones"],
        ["Operator scope", "180 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Days 1-15", "Confirm approved sources, security roles, and residency requirements."],
        ["Days 16-30", "Build retrieval, moderation, and workflow integrations inside the boundary."],
        ["Days 31-45", "Run evaluator suites and governance review on customer-held evidence."],
        ["Days 46-60", "Launch secure production access with internal operator training."],
      ],
    },
  },
  global: {
    legal: {
      brief:
        "Roll out a global private legal intelligence program with regional estates, private registry replication, and unified governance in 90 days.",
      stats: [
        ["Residency", "3 regions"],
        ["Operator scope", "750 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Days 1-20", "Align regional document stores, residency rules, and counsel entitlements."],
        ["Days 21-45", "Deploy mirrored private retrieval and checkpoint management per region."],
        ["Days 46-70", "Validate behavior with region-specific evaluator suites and reviews."],
        ["Days 71-90", "Launch with customer-owned governance across all regions."],
      ],
    },
    manufacturing: {
      brief:
        "Deploy a global manufacturing intelligence layer with regional VPC estates, plant-specific retrieval, and customer-held checkpoint promotion in 90 days.",
      stats: [
        ["Residency", "4 regions"],
        ["Operator scope", "1100 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Days 1-20", "Partition plants, manuals, and operator roles by region and unit."],
        ["Days 21-45", "Build private retrieval and registry workflows for each site cluster."],
        ["Days 46-70", "Benchmark failure-mode reasoning with site experts."],
        ["Days 71-90", "Go live with multi-region private failover and audit control."],
      ],
    },
    public: {
      brief:
        "Stand up a multi-region sovereign public-sector deployment with customer-operated control planes and policy-specific evaluation in 90 days.",
      stats: [
        ["Residency", "4 sovereign zones"],
        ["Operator scope", "520 users"],
        ["Ownership", "100% retained"],
      ],
      phases: [
        ["Days 1-20", "Partition agencies, policy sets, and access requirements by sovereign environment."],
        ["Days 21-45", "Deploy private retrieval, logging, and checkpoint governance per zone."],
        ["Days 46-70", "Run agency-specific evaluator reviews and signoff."],
        ["Days 71-90", "Launch the sovereign model program with customer-held operations."],
      ],
    },
  },
};

const app = document.querySelector("#app");
const rail = document.querySelector("[data-rail]");
const activeIndexNode = document.querySelector("[data-active-index]");
const activeTitleNode = document.querySelector("[data-active-title]");
const progressNode = document.querySelector("[data-progress]");

function renderStats(stats) {
  return stats
    .map(
      (stat, index) => `
        <article class="metric-card" data-reveal style="--delay:${120 + index * 80}ms;">
          <strong data-count="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</strong>
          <span>${stat.label}</span>
        </article>
      `
    )
    .join("");
}

function renderBullets(bullets) {
  return bullets
    .map(
      (item, index) => `
        <li data-reveal style="--delay:${300 + index * 70}ms;">${item}</li>
      `
    )
    .join("");
}

function renderActions(chapter, index) {
  const isLast = index === chapters.length - 1;
  const primaryTarget = isLast ? chapters[0].id : chapters[index + 1].id;
  const primaryLabel = isLast ? "Back to top" : "Next scene";

  return `
    <div class="chapter__actions" data-reveal style="--delay:520ms;">
      <button class="scene-link" type="button" data-scroll="${primaryTarget}">${primaryLabel}</button>
      <button class="scene-link scene-link--ghost" type="button" data-scroll="chapter-economics">Jump to economics</button>
    </div>
  `;
}

function renderOrbital() {
  const nodes = [
    ["Weights", "50%", "15%"],
    ["RAG", "78%", "30%"],
    ["Audit", "84%", "55%"],
    ["Tuning", "26%", "78%"],
    ["IAM", "18%", "52%"],
  ];

  return `
    <div class="stage-card orbital-board" data-reveal style="--delay:220ms;">
      <div class="orbital-core">
        <div class="orbital-halo orbital-halo--outer"></div>
        <div class="orbital-halo orbital-halo--middle"></div>
        <div class="orbital-center">
          <span>Owned</span>
          <strong>VPC</strong>
        </div>
        ${nodes
          .map(
            ([label, x, y]) => `
              <div class="orbit-node" style="--node-x:${x}; --node-y:${y};">
                ${label}
              </div>
            `
          )
          .join("")}
      </div>
      <div class="orbital-strip">
        <article class="signal-panel">
          <span>Inference plane</span>
          <strong>Private by default</strong>
          <p>Requests, retrieval, and policy middleware stay inside the same customer boundary.</p>
        </article>
        <article class="signal-panel">
          <span>Feedback loop</span>
          <strong>Compounds internally</strong>
          <p>Every evaluator pass and human correction deepens a customer-owned asset base.</p>
        </article>
        <article class="signal-panel">
          <span>Security stance</span>
          <strong>No shared prompt surface</strong>
          <p>Data-leakage risk drops because the operating model is private, not merely promised to be private.</p>
        </article>
      </div>
    </div>
  `;
}

function renderSectorBoard() {
  return `
    <div class="stage-card sector-board" data-sector-module data-reveal style="--delay:220ms;">
      <div class="chip-row">
        <button class="is-active" type="button" data-sector="healthcare">Healthcare</button>
        <button type="button" data-sector="finance">Finance</button>
        <button type="button" data-sector="public">Public sector</button>
      </div>
      <div class="sector-layout">
        <div class="stacked-cards">
          <article class="stack-card">
            <span>Why this matters</span>
            <strong>Private context remains attached to the controls that already govern it.</strong>
            <p>Each vertical keeps its own source systems, but the ownership model remains identical.</p>
          </article>
          <article class="stack-card">
            <span>Buyer takeaway</span>
            <strong>One platform, multiple regulated narratives.</strong>
            <p>The page can shift sector language without losing a consistent product identity.</p>
          </article>
        </div>
        <div class="sector-pane">
          <span data-sector-kicker>Healthcare</span>
          <strong data-sector-title>Clinical reasoning beside protected records</strong>
          <p data-sector-copy></p>
          <div class="sector-grid" data-sector-cards></div>
          <ul class="detail-list" data-sector-highlights></ul>
        </div>
      </div>
    </div>
  `;
}

function renderBoundaryBoard() {
  return `
    <div class="stage-card boundary-board" data-boundary-module data-reveal style="--delay:220ms;">
      <div class="boundary-head">
        <div class="score-ring" data-boundary-ring data-score="96/100" style="--score:96;"></div>
        <div class="boundary-pane">
          <span data-boundary-title>Regional dual VPC</span>
          <strong>Security posture made inspectable</strong>
          <p data-boundary-copy></p>
        </div>
      </div>
      <div class="chip-row">
        <button type="button" data-boundary="single">Single-tenant</button>
        <button class="is-active" type="button" data-boundary="regional">Regional dual VPC</button>
        <button type="button" data-boundary="airgap">Air-gapped</button>
      </div>
      <div class="boundary-grid" data-boundary-topology></div>
      <ul class="detail-list" data-boundary-controls></ul>
    </div>
  `;
}

function renderEconomicsBoard() {
  return `
    <div class="stage-card economics-board" data-economics-module data-reveal style="--delay:220ms;">
      <div class="chip-row">
        <button class="is-active" type="button" data-scenario="banking">Banking</button>
        <button type="button" data-scenario="pharma">Pharma</button>
        <button type="button" data-scenario="insurance">Insurance</button>
      </div>
      <div class="slider-stack" style="margin-top: 1rem;">
        <label class="slider-row">
          <div class="slider-head">
            <strong>Knowledge workers</strong>
            <span data-output="workers">180</span>
          </div>
          <input type="range" min="60" max="500" step="10" value="180" data-input="workers" />
        </label>
        <label class="slider-row">
          <div class="slider-head">
            <strong>Daily requests</strong>
            <span data-output="requests">42000</span>
          </div>
          <input type="range" min="10000" max="120000" step="2000" value="42000" data-input="requests" />
        </label>
        <label class="slider-row">
          <div class="slider-head">
            <strong>Refreshes per quarter</strong>
            <span data-output="refresh">3</span>
          </div>
          <input type="range" min="1" max="6" step="1" value="3" data-input="refresh" />
        </label>
      </div>
      <div class="results-grid" style="margin-top: 1rem;">
        <article class="mini-card">
          <span>Annual value retained</span>
          <strong data-result="retained">$0</strong>
        </article>
        <article class="mini-card">
          <span>Payback</span>
          <strong data-result="payback">0 mo</strong>
        </article>
        <article class="mini-card">
          <span>Leakage paths removed</span>
          <strong data-result="risk">0</strong>
        </article>
        <article class="mini-card">
          <span>Ownership score</span>
          <strong data-result="ownership">0%</strong>
        </article>
      </div>
      <div class="bar-stack">
        <article class="bar-card">
          <div class="bar-card__head">
            <strong>Vendor spend displaced</strong>
            <span data-bar-label="vendor">$0</span>
          </div>
          <div class="bar-track"><div class="bar-fill" data-bar="vendor"></div></div>
        </article>
        <article class="bar-card">
          <div class="bar-card__head">
            <strong>Review overhead removed</strong>
            <span data-bar-label="review">$0</span>
          </div>
          <div class="bar-track"><div class="bar-fill" data-bar="review"></div></div>
        </article>
        <article class="bar-card">
          <div class="bar-card__head">
            <strong>Internal IP retained</strong>
            <span data-bar-label="ip">$0</span>
          </div>
          <div class="bar-track"><div class="bar-fill" data-bar="ip"></div></div>
        </article>
      </div>
    </div>
  `;
}

function renderLaunchBoard() {
  return `
    <div class="stage-card launch-board" data-launch-module data-reveal style="--delay:220ms;">
      <div class="launch-head">
        <div>
          <span style="display:block; margin-bottom:0.5rem; font:700 0.72rem/1 'SFMono-Regular','IBM Plex Mono',Consolas,monospace; letter-spacing:0.08em; text-transform:uppercase;">Rollout speed</span>
          <div class="chip-row">
            <button class="is-active" type="button" data-speed="pilot">Pilot / 30 days</button>
            <button type="button" data-speed="production">Production / 60 days</button>
            <button type="button" data-speed="global">Global / 90 days</button>
          </div>
        </div>
        <div>
          <span style="display:block; margin-bottom:0.5rem; font:700 0.72rem/1 'SFMono-Regular','IBM Plex Mono',Consolas,monospace; letter-spacing:0.08em; text-transform:uppercase;">Industry pack</span>
          <div class="chip-row">
            <button class="is-active" type="button" data-industry="legal">Legal</button>
            <button type="button" data-industry="manufacturing">Manufacturing</button>
            <button type="button" data-industry="public">Public sector</button>
          </div>
        </div>
      </div>
      <div class="launch-pane" style="margin-top: 1rem;">
        <span>Execution brief</span>
        <strong data-launch-brief-title>Private rollout plan</strong>
        <p data-launch-brief></p>
      </div>
      <div class="launch-grid" data-launch-stats></div>
      <div class="launch-grid" data-launch-phases style="margin-top: 1rem;"></div>
    </div>
  `;
}

function renderVisual(chapter) {
  switch (chapter.visual) {
    case "orbital":
      return renderOrbital();
    case "sectors":
      return renderSectorBoard();
    case "boundary":
      return renderBoundaryBoard();
    case "economics":
      return renderEconomicsBoard();
    case "launch":
      return renderLaunchBoard();
    default:
      return "";
  }
}

function renderChapter(chapter, index) {
  return `
    <section
      class="chapter ${chapter.themeClass}"
      id="${chapter.id}"
      data-chapter="${chapter.id}"
      data-index="${chapter.index}"
      data-title="${chapter.nav}"
      style="--chapter-accent:${chapter.accent}; --chapter-accent-rgb:${chapter.accentRgb};"
    >
      <div class="chapter__watermark" aria-hidden="true">${chapter.word}</div>
      <div class="chapter__inner">
        <div class="chapter__copy">
          <div class="chapter__eyebrow" data-reveal>${chapter.eyebrow}</div>
          <h2 class="chapter__title" data-reveal style="--delay:80ms;">${chapter.title}</h2>
          <p class="chapter__lead" data-reveal style="--delay:140ms;">${chapter.lead}</p>
          <p class="chapter__body" data-reveal style="--delay:220ms;">${chapter.body}</p>
          <div class="chapter__stats">${renderStats(chapter.stats)}</div>
          <ul class="chapter__list">${renderBullets(chapter.bullets)}</ul>
          ${renderActions(chapter, index)}
        </div>
        <div class="chapter__stage">
          ${renderVisual(chapter)}
        </div>
      </div>
    </section>
  `;
}

function renderApp() {
  app.innerHTML = chapters.map(renderChapter).join("");
  rail.innerHTML = chapters
    .map(
      (chapter) => `
        <button class="rail__button" type="button" data-target="${chapter.id}">
          <span class="rail__index">${chapter.index}</span>
          <span class="rail__label">
            <strong>${chapter.nav}</strong>
            <small>${chapter.label}</small>
          </span>
        </button>
      `
    )
    .join("");
}

function scrollToChapter(id) {
  const node = document.getElementById(id);
  if (node) {
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function animateCounter(node) {
  if (node.dataset.animated === "true") {
    return;
  }

  node.dataset.animated = "true";
  const target = Number(node.dataset.count || 0);
  const suffix = node.dataset.suffix || "";
  const duration = 620;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.round(target * progress);
    node.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function setTheme(chapterId) {
  const chapter = chapters.find((item) => item.id === chapterId);
  if (!chapter) {
    return;
  }

  document.documentElement.style.setProperty("--accent", chapter.accent);
  document.documentElement.style.setProperty("--accent-rgb", chapter.accentRgb);
  activeIndexNode.textContent = chapter.index;
  activeTitleNode.textContent = chapter.nav;

  document.querySelectorAll(".rail__button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === chapter.id);
  });

  const section = document.getElementById(chapter.id);
  if (section) {
    section.querySelectorAll("[data-count]").forEach(animateCounter);
  }
}

function initNavigation() {
  rail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-target]");
    if (!button) {
      return;
    }
    scrollToChapter(button.dataset.target);
  });

  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-scroll]");
    if (!trigger) {
      return;
    }
    scrollToChapter(trigger.dataset.scroll);
  });
}

function initObservers() {
  const sections = [...document.querySelectorAll("[data-chapter]")];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      sections.forEach((section) => {
        section.classList.toggle("is-active", section === visible.target);
      });

      setTheme(visible.target.dataset.chapter);
    },
    {
      rootMargin: "-30% 0px -30% 0px",
      threshold: [0.15, 0.35, 0.55, 0.75],
    }
  );

  sections.forEach((section) => observer.observe(section));
  setTheme(chapters[0].id);
  sections[0].classList.add("is-active");
}

function initSectorModule() {
  document.querySelectorAll("[data-sector-module]").forEach((module) => {
    const buttons = [...module.querySelectorAll("[data-sector]")];
    const kicker = module.querySelector("[data-sector-kicker]");
    const title = module.querySelector("[data-sector-title]");
    const copy = module.querySelector("[data-sector-copy]");
    const cards = module.querySelector("[data-sector-cards]");
    const highlights = module.querySelector("[data-sector-highlights]");

    function render(key) {
      const item = sectorDataset[key];
      kicker.textContent = key === "public" ? "Public sector" : key[0].toUpperCase() + key.slice(1);
      title.textContent = item.title;
      copy.textContent = item.copy;
      cards.innerHTML = item.cards
        .map(
          ([label, value]) => `
            <article class="mini-card">
              <span>${label}</span>
              <strong>${value}</strong>
            </article>
          `
        )
        .join("");
      highlights.innerHTML = item.highlights
        .map(
          ([label, value]) => `
            <li>
              <strong>${label}</strong>
              <small>${value}</small>
            </li>
          `
        )
        .join("");

      buttons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.sector === key);
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => render(button.dataset.sector));
    });

    render("healthcare");
  });
}

function initBoundaryModule() {
  document.querySelectorAll("[data-boundary-module]").forEach((module) => {
    const buttons = [...module.querySelectorAll("[data-boundary]")];
    const ring = module.querySelector("[data-boundary-ring]");
    const title = module.querySelector("[data-boundary-title]");
    const copy = module.querySelector("[data-boundary-copy]");
    const topology = module.querySelector("[data-boundary-topology]");
    const controls = module.querySelector("[data-boundary-controls]");

    function render(key) {
      const item = boundaryDataset[key];
      ring.style.setProperty("--score", item.score);
      ring.dataset.score = `${item.score}/100`;
      title.textContent = item.title;
      copy.textContent = item.copy;
      topology.innerHTML = item.topology
        .map(
          ([label, value]) => `
            <article class="mini-card">
              <span>${label}</span>
              <strong>${value}</strong>
            </article>
          `
        )
        .join("");
      controls.innerHTML = item.controls
        .map(
          ([label, value]) => `
            <li>
              <strong>${label}</strong>
              <small>${value}</small>
            </li>
          `
        )
        .join("");

      buttons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.boundary === key);
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => render(button.dataset.boundary));
    });

    render("regional");
  });
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function initEconomicsModule() {
  document.querySelectorAll("[data-economics-module]").forEach((module) => {
    const scenarioButtons = [...module.querySelectorAll("[data-scenario]")];
    const inputs = {
      workers: module.querySelector('[data-input="workers"]'),
      requests: module.querySelector('[data-input="requests"]'),
      refresh: module.querySelector('[data-input="refresh"]'),
    };
    const outputs = {
      workers: module.querySelector('[data-output="workers"]'),
      requests: module.querySelector('[data-output="requests"]'),
      refresh: module.querySelector('[data-output="refresh"]'),
    };
    const results = {
      retained: module.querySelector('[data-result="retained"]'),
      payback: module.querySelector('[data-result="payback"]'),
      risk: module.querySelector('[data-result="risk"]'),
      ownership: module.querySelector('[data-result="ownership"]'),
    };
    const bars = {
      vendor: module.querySelector('[data-bar="vendor"]'),
      review: module.querySelector('[data-bar="review"]'),
      ip: module.querySelector('[data-bar="ip"]'),
    };
    const barLabels = {
      vendor: module.querySelector('[data-bar-label="vendor"]'),
      review: module.querySelector('[data-bar-label="review"]'),
      ip: module.querySelector('[data-bar-label="ip"]'),
    };
    let currentScenario = "banking";

    function recalculate() {
      const scenario = economicsDataset[currentScenario];
      const workers = Number(inputs.workers.value);
      const requests = Number(inputs.requests.value);
      const refresh = Number(inputs.refresh.value);
      const spend = workers * scenario.base + requests * 18 + refresh * 220000;
      const retained = Math.round(spend * 0.34);
      const payback = Math.max(4, Math.round(18 - workers / 38 - refresh));
      const risk = Math.round(4 + requests / 18000 + refresh * 0.85);
      const ownership = Math.min(100, 88 + refresh + Math.round(workers / 160));
      const vendor = Math.round(retained * 0.42);
      const review = Math.round(retained * 0.23);
      const ip = Math.round(retained * 0.35);
      const max = Math.max(vendor, review, ip);

      outputs.workers.textContent = workers;
      outputs.requests.textContent = requests;
      outputs.refresh.textContent = refresh;
      results.retained.textContent = formatCurrency(retained);
      results.payback.textContent = `${payback} mo`;
      results.risk.textContent = risk;
      results.ownership.textContent = `${ownership}%`;

      [
        ["vendor", vendor],
        ["review", review],
        ["ip", ip],
      ].forEach(([key, value]) => {
        bars[key].style.setProperty("--size", `${Math.max(16, (value / max) * 100)}%`);
        barLabels[key].textContent = formatCurrency(value);
      });
    }

    scenarioButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentScenario = button.dataset.scenario;
        scenarioButtons.forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        recalculate();
      });
    });

    Object.values(inputs).forEach((input) => input.addEventListener("input", recalculate));
    recalculate();
  });
}

function initLaunchModule() {
  document.querySelectorAll("[data-launch-module]").forEach((module) => {
    const speedButtons = [...module.querySelectorAll("[data-speed]")];
    const industryButtons = [...module.querySelectorAll("[data-industry]")];
    const briefTitle = module.querySelector("[data-launch-brief-title]");
    const brief = module.querySelector("[data-launch-brief]");
    const stats = module.querySelector("[data-launch-stats]");
    const phases = module.querySelector("[data-launch-phases]");
    let currentSpeed = "pilot";
    let currentIndustry = "legal";

    function render() {
      const item = launchDataset[currentSpeed][currentIndustry];
      const speedLabel =
        currentSpeed === "pilot"
          ? "Pilot"
          : currentSpeed === "production"
            ? "Production"
            : "Global";
      const industryLabel =
        currentIndustry === "public"
          ? "Public sector"
          : currentIndustry === "manufacturing"
            ? "Manufacturing"
            : "Legal";

      briefTitle.textContent = `${speedLabel} rollout / ${industryLabel}`;
      brief.textContent = item.brief;
      stats.innerHTML = item.stats
        .map(
          ([label, value]) => `
            <article class="mini-card">
              <span>${label}</span>
              <strong>${value}</strong>
            </article>
          `
        )
        .join("");
      phases.innerHTML = item.phases
        .map(
          ([label, value]) => `
            <article class="launch-phase">
              <span>${label}</span>
              <p>${value}</p>
            </article>
          `
        )
        .join("");

      speedButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.speed === currentSpeed);
      });
      industryButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.industry === currentIndustry);
      });
    }

    speedButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentSpeed = button.dataset.speed;
        render();
      });
    });

    industryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentIndustry = button.dataset.industry;
        render();
      });
    });

    render();
  });
}

function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
  progressNode.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function initProgress() {
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function initAmbient() {
  const canvas = document.getElementById("ambient");
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  let activeColor = chapters[0].accentRgb;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    const count = width < 720 ? 14 : 24;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.6 + 0.7,
    }));
  }

  function parseRgb(value) {
    return value.split(",").map((item) => Number(item.trim()));
  }

  function frame() {
    context.clearRect(0, 0, width, height);
    const [r, g, b] = parseRgb(activeColor);

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.08)`;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();

      for (let j = i + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 180) {
          context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.06 - distance / 3000})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    }

    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);

  const themeObserver = new MutationObserver(() => {
    activeColor = getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim() || chapters[0].accentRgb;
  });

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style"],
  });

  resize();
  frame();
}

renderApp();
initNavigation();
initSectorModule();
initBoundaryModule();
initEconomicsModule();
initLaunchModule();
initObservers();
initProgress();
initAmbient();
