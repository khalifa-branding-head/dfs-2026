# Repository Foundation & Git Strategy
## Technical Guidelines and Repository Directory Structures

This document specifies the folder layouts, file naming conventions, Git branching models, and asset pipeline configurations for the Dubai FinTech Summit redesign project.

---

## 1. Repository Directory Structure

The project codebase is organized as follows to ensure strict separation of design systems, pages, and build pipelines:

```
difc/ (Project root)
├── docs/ (Approved documentation, blueprints, and plans)
│   ├── Repository-Foundation.md
│   ├── Design-Tokens.md
│   ├── Editorial-Principles.md
│   └── ...
├── public/ (Static visual assets)
│   └── favicon.svg
├── src/ (Primary construction codebase)
│   ├── assets/ (Asset files)
│   │   ├── fonts/ (woff2 local font files)
│   │   ├── icons/ (SVG outline vector glyphs)
│   │   └── images/ (Optimized WebPs/AVIFs)
│   ├── components/ (Reusable visual components - BEM structured)
│   │   ├── dfs-button.css
2.   │   ├── dfs-card.css
│   │   └── ...
│   ├── styles/ (Global styling and tokens)
│   │   ├── tokens.css (Design tokens variable properties)
│   │   └── global.css (Global typography resets and accessibility defaults)
│   └── main.js (Main JavaScript entry hydration script)
├── index.html (Main DOM structure entry point)
├── package.json (Vite configurations and dependencies)
└── vite.config.js (Vite compiler optimizations config)
```

---

## 2. File & Component Naming Conventions

All CSS classes, custom components, and layouts must follow the Block-Element-Modifier (BEM) naming methodology:

* **Prefix**: Every custom stylesheet class name must begin with the `dfs-` prefix.
* **Syntax Structure**:
  - `dfs-[BlockName]`: Represents the root component selector (e.g. `dfs-card`, `dfs-button`).
  - `dfs-[BlockName]__[ElementName]`: Represents a child node (e.g. `dfs-card__title`, `dfs-nav__link`).
  - `dfs-[BlockName]--[ModifierName]`: Represents a variant or modifier state (e.g. `dfs-button--primary`, `dfs-card--highlighted`).
* **Utility States**: Use `is-` and `has-` prefixes for temporary JS-driven states (e.g. `is-active`, `is-disabled`, `has-error`).

---

## 3. Git Branching Strategy

To manage concurrent feature builds and maintain production stability, the repository uses a structured Git branching strategy:

```
main (Production deployment - Cloudflare cached edge)
  ▲
  │ (Release merge after final QA & validation walkthroughs)
  │
release/v[version] (Staging QA and visual regression checks)
  ▲
  │ (Integration merge when features are completed)
  │
develop (Primary integration branch for engineers)
  ▲
  │ (Feature merge following PR review sign-offs)
  │
feature/dfs-[component-name] (Isolated component construction)
```

### Pull Request & Code Review Checkpoints
* Branches must branch from `develop` using the prefix: `feature/dfs-[component-name]`.
* Pull requests (PRs) merging into `develop` or `release/` require:
  - Successful local building (no compile errors).
  - Passing score on automated syntax lint checks.
  - Review and approval from at least one senior developer or the Tech Lead.
* Direct pushes to `main` and `develop` are permanently blocked under branch protection rules.
