# Vercel Monorepo

This monorepo uses [turborepo](https://turborepo.org/) to handle monorepo complexities, [NextJS](https://nextjs.org/) for the Frontend and .

The frontend uses NextJS and the backend uses AWS Lambda functions.



### Build

To build all apps and packages, run the following command in root:

```sh
npm run build
```

### Develop

To develop all apps and packages, run the following command in root:

```sh
npm run dev
```

### Deployment

### Web

Follow the [Vercel instructions](https://vercel.com/docs/concepts/git/monorepos#turborepo) for Turborepo.


### Server (Heroku)

Simply create an app on Heroku and link the git repository. Make sure to turn on auto-deploy.
