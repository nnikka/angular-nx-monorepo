# Monorepo

1) remove default project
2) remove .nx cache

# Add apps to monorepo
npx nx g @nx/angular:app shell --directory=apps/shell
npx nx g @nx/angular:app mfe1 --directory=apps/mfe1

# Add module federation app Host
nx add @angular-architects/module-federation --project shell --type host --port 9300

# Add module federation app Remote
nx add @angular-architects/module-federation --project mfe1 --type remote --port 9301