# About Schedool
Schedool is a todo app that allows you to not just schedule your to-dos but also set the priority levels 

## Technology Used

- ReactJS
- Redux
- Formik
- React Router DOM
- SASS

## Table of Contents

- [Setup](#Setup)
- [Folder Structure](#folder-structure)
- [Reuseable Components](#reuseable-components)
- [Modularized Pages](#modularized-pages)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

## Setup

To setup the app,

1. Clone the app to your local machine and run `npm install`
2. Then run `npm start`

## Folder Structure

The structure should look like this:

```
schedool/
  config
  node_modules/
  public/
    index.html
    favicon.ico
    load.csss
  scripts/
    build.js
    start.js
    test.js
  src/
    app
    config
    pages
    redux
    routes
    scss
    shared
    index.js
    serviceWorker.js
  .env
  .gitignore
  package.json
  README.md
  server.js
```

## Reuseable Components

The reuseable components in this app can be found in the **_shared_** folder.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

