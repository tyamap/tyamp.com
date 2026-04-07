# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn develop        # Start dev server at localhost:8000
yarn start          # Start dev server at localhost:8080
yarn build          # Production build
yarn serve          # Serve production build locally
yarn clean          # Clear Gatsby cache
yarn typecheck      # TypeScript type check (no emit)
```

## Environment Variables

Copy `.env` and fill in real values for each environment:

- `.env.development` — used by `gatsby develop`
- `.env.production` — used by `gatsby build`

Required variables: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `GTM_ID`, `GATSBY_RECAPTCHA_SITEKEY`, `GATSBY_FORM_ENDPOINT`

## Architecture

This is a **Gatsby 5 + TypeScript** personal branding site for tyamap.com. Content is sourced from **Contentful** (CMS) and RSS feeds (Zenn, Note).

### Internationalization

Pages are duplicated per locale using `gatsby-plugin-i18n`:
- English: `src/pages/foo.tsx` → `/foo`
- Japanese: `src/pages/foo.ja.tsx` → `/ja/foo`

Each locale has its own layout component:
- `src/components/layout/en.tsx` — English layout (uses components in `src/components/layout/`)
- `src/components/layout/ja.tsx` — Japanese layout (uses components in `src/components/layout/ja/`)

### Layout Structure

Every page wraps its content in `<Layout>`. The layout renders:
1. `Header` — fixed top bar with site title, language toggle, dark/light toggle, contact link
2. `Aside` — left sidebar (profile info from Contentful)
3. `Tabs` — navigation tabs (Overview, Projects, Works, Posts, Contact) with badge counts from Contentful/RSS
4. `Main` — page content slot

Color scheme (dark/light) is stored in `localStorage` under the key `"color-scheme"` via Mantine's `useLocalStorage`.

### Data Hooks

GraphQL static queries are encapsulated in hooks under `src/hooks/`:
- `useProfile` — profile data from Contentful
- `useProjects` — OSS projects from Contentful
- `useClientWorks` — client work count from Contentful
- `useFeedPosts` — blog posts from RSS feeds (Zenn + Note)
- `useSiteMetadata` — site metadata from `gatsby-config.ts`

### Path Aliases

`src/` is aliased as a root import path via `gatsby-plugin-root-import`. Use `src/components/...` instead of relative paths.

### Special Pages

`src/pages/saikuru/` contains standalone pages (privacy policy, terms) for the SAIKURU mobile app — these use the main `Layout` but are not part of the tab navigation.

### GraphQL Types

Type generation is enabled (`graphqlTypegen: true`). Generated types are under `Queries.*` namespace. Run `yarn develop` once to regenerate after schema changes.
