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

# Create component with NX cli
nx g @nx/angular:component apps/mfe1/src/app/pg1/pg1 --style=scss




# LINKS & TUTORIALS

# Add lint restrictions to libs and apps
https://www.angulararchitects.io/en/blog/using-module-federation-with-monorepos-and-angular/