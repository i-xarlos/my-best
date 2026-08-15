# Agent Guidelines

## Project Conventions

### Task Management

Use the `todowrite` tool to track progress for any multi-step task (3+ actions). Always create a todo list before starting complex work.

### Code Quality

- TypeScript strict mode enabled (`strict: true`)
- `noUnusedLocals: true` and `noUnusedParameters: true` enforced
- Run `npm run lint` and `npx tsc --noEmit` before committing
- Run `npm run format` to auto-fix formatting

### Build & Deploy

- Build: `npm run build`
- Dev: `npm run dev`
- Deploy via GitHub Actions to GitHub Pages

### File Conventions

- Routes use TanStack Router file-based routing
- UI components in `src/components/ui/` (when added)
- Shared hooks in `src/hooks/`
- Utilities in `src/lib/`
