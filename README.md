# Getting Started


## Falsch Parker

First, install dependencies:
```bash
yarn 
```

Create `.env.local` and copy there the content from `.env.local.example` with values replaced by the real ones.

Then just run the project:
```bash
yarn dev
```

Open http://localhost:3000 with your browser to see Falsch Parker web application.


## Sanity Studio

### Local development

We can easily work with Sanity Studio locally.
To do this you have to install dependencies:
```bash
yarn --cwd ./sanity
```

Then go to `sanity` folder, create `.env.local` file and copy there the content from `.env.local.example` with values replaced by the real ones.
To start Sanity Studio locally run:
```bash
yarn --cwd ./sanity dev
```

Open http://localhost:3333 with your browser to see Sanity Studio.

### Deploy

To have access to Studio from anywhere you should deploy it.
Just run:
```bash
yarn --cwd ./sanity deploy
```

Now you can open https://falschparker.sanity.studio and work with the content from there.