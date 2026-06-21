# Vue Migration of tavis.me

This workspace contains a Vue 3 migration of the original Next.js/React site. It is set up with Vite, TypeScript, Vue Router, ESLint, Prettier, and Yarn project policy configuration.

Status: verified locally with `yarn install`, `yarn build`, and `yarn dev`.

## Included

- Vue routes for Home, Bio, Mission, Projects, Services, Contact, and Resume
- Shared site components for header, hero, article, and footer
- Original site copy, links, and static assets migrated from the legacy site
- TypeScript and Vite configuration
- ESLint and Prettier setup
- VS Code task for `yarn dev`
- Yarn project configuration isolated from the parent workspace

## Local development

From the workspace root:

```sh
yarn install
yarn dev
```

The Vite dev server runs at:

```text
http://localhost:5173/
```

## Build

For a production build:

```sh
yarn build
```

## Notes

- A local `yarn.lock` file is included so this Vue app is treated as its own Yarn project rather than part of the parent `tavis.me` package.
- If Node and Yarn were installed through `nvm`, make sure your shell loads `nvm` so `node` and `yarn` are on `PATH` before running commands.

## Migration note

The migrated Vue app is complete at the route/content level. Additional enhancement work can focus on behavior parity details such as richer transition choreography and any remaining visual polish.
