# Shopping Time! With React + TypeScript + Vite 💅

I couldn't find a shopping app that I like, so fine - I'll make my own

## Quick Start

```bash
  npm i && npm run dev
```

## Setup

This project was created using the [`react-ts` template for Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
  npm create vite@latest shopping-list -- --template react-ts
```

Other requirements/suggestions:
- Prettier vscode extension

## Concepts
* routing and loaders ("render as you fetch")


## TODO
* sketch out UI feature requirements
  * shopping list
    * view items 
    * add item
    * edit item
    * delete item
    * check off item (not deleted, just a status change - it can be re-added easily)
    * toggle view: not purchased/all
    * filter by name, description, category, tags
    * sort by name, category
  * view item details
    * name
    * description
    * category
    * tags
  * view categories (user and system)
    * add, edit, delete categories
  * view tags (user and system) -- system tags?
    * add, edit, delete tags

* get db with migrations up and running
* keep refining models
  * shopping item category
  	* make this a computed? or maybe the ui is just dumb -- get systemCategories from the db and add any other values as custom categories in the db, but the ui won't know the difference
	  * ex: on insert or update, check if the category is in the db, if not, add it to the user's custom categories
    * create separate UI for user to manage categories separately (add, delete) -- if they delete a category, check if any items are using it, and if so, warn
* css:
  * use sass?
  * use tailwind? some other css framework?



# Default Stuff
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
