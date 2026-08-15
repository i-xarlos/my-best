# Show Off My Best

Personal portfolio site for **Carlos** — Senior Platform & Framework Engineer.

> Hybrid Windows platforms · React Native Windows · WebView2 · .NET

## Tech Stack

- [Vite](https://vitejs.dev/) — Build tool
- [TanStack Start](https://tanstack.com/start) — Full-stack React framework
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Radix UI](https://www.radix-ui.com/) — Accessible UI primitives

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/
│   └── ui/          # Reusable UI components (Radix + shadcn/ui)
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── routes/          # TanStack Router file-based routes
│   ├── __root.tsx   # Root layout
│   └── index.tsx    # Home page (portfolio)
├── router.tsx       # Router configuration
├── server.ts        # SSR entry
├── start.ts         # App entry
└── styles.css       # Global styles
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Bun](https://bun.sh/) (recommended) or npm/yarn

### Install & Run

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Lint & Format

```bash
bun run lint
bun run format
```

## Sections

| Section     | Description                                          |
| ----------- | ---------------------------------------------------- |
| Hero        | Intro, role highlights and call-to-action            |
| About       | Platform engineer philosophy and approach            |
| Specialties | Six core focus areas — architecture to performance   |
| Stack       | Microsoft ecosystem, JS/TS and engineering practices |
| Experience  | Career timeline with key roles                       |
| Contact     | Email, LinkedIn, GitHub, Twitter and phone           |

## Links

- **GitHub:** [i-xarlos/my-best](https://github.com/i-xarlos/my-best)
- **Author:** Carlos — [@Xarlos\_](https://twitter.com/Xarlos_) · [LinkedIn](https://www.linkedin.com/in/ixarlos/)
- **Contact:** ixarlos@gmail.com

## Deployment

Automatically deployed to GitHub Pages on every push to `main` via GitHub Actions.

**Live site:** [https://i-xarlos.github.io/my-best/](https://i-xarlos.github.io/my-best/)

### Setup

1. Go to **GitHub → Settings → Pages → Source**
2. Select **GitHub Actions**
3. Push to `main` — the workflow handles the rest

### How it works

- `bun run build` generates static HTML via TanStack Start prerender
- Output goes to `dist/client/`
- GitHub Actions uploads and deploys to Pages

## License

Private repository. All rights reserved.
