# React Select `exports` field test

This is a collection of apps consuming React Select to test that [this PR](https://github.com/JedWatson/react-select/pull/5559) works correctly everywhere

## How was it tested?
- Using [this](https://github.com/gdiazdelaserna/react-select/tree/chore/add-exports-field-in-package-json) React Select fork branch I created a package tarball in my local file system (running `npm pack --pack-destination ~/packages`)
- Then I installed that local package in each of the apps (running `npm i ~/packages/react-select-5.7.0.tgz`)
- In each of the apps I'm importing:
  - `import Select from "react-select"` to test that a root import works
  - `import CreatableSelect from "react-select/creatable";` to test that a subpath import works

## Apps

### Create React App
- Version 5
- Uses Webpack 5 under the hood
- Includes TypeScript

### Next.js
- Version 13

### Vite
- Version 4
- Declared as ES module (`"type": "module"` field in `package.json`)

### Webpack
- Version 5
- Declared as ES module (`"type": "module"` field in `package.json`)
- This app not only proves that the changes in the PR don't affect React Select's consumption by Webpack 5, but also that it fixes the issue when consuming it from a JavaScript module (i.e. using the latest version of React Select from NPM breaks this app)
