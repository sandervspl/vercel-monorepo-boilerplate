# Netlify Monorepo

This monorepo uses [turborepo](https://turborepo.org/) and [pnpm](https://pnpm.io) as a packages manager.

The frontend uses NextJS and the backend uses AWS Lambda functions.



### Build

To build all apps and packages, run the following command:

```sh
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm run dev
```

### Deploy to Netlify

To deploy both on Netlify, add two sites: web and server

### Web

Base Directory: `apps/web`
Build command: `npm run build`
Publish directory: `apps/web/.next`


### Server

Base Directory: `apps/server`
Build command: `npm run build`
Publish directory: `apps/server/dist`
Functions directory: `apps/server/dist`
