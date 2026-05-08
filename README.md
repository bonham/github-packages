# GitHub Packages Monorepo

A minimal TypeScript + ESM monorepo learning project with two packages published to GitHub Packages.

## Packages

- **`@bonham/calc-core`** - Calculator class
- **`@bonham/calc-utils`** - Math utility functions

## Development

```bash
npm install
npm run build
npm test
npm run test:watch
```

## Publishing

Tag a release and push to trigger the publish workflow:

```bash
git tag v1.0.0
git push --tags
```
