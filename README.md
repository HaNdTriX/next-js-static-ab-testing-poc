# Next.js Static AB Testing (POC)

This repository shows a proof of concept to solve AB testing without invalid initial paints. This fixes cumulative layout shifts when combining static site rendering and cookie based ab testing.

It applies the following pattern:

1. Generate a static page
2. On the client show/hide via CSS before initial paint.
3. Let the browser paint
4. Let react hydrate

## Install

```sh
yarn
```

## Developemnt

```sh
yarn dev
```

## Production

```sh
yarn build && yarn start
```
