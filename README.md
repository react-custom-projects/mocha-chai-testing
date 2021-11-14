## This project uses `enzyme`, `mocha` and `chai` for testing

**_Note:_** All test files should be in `/src/test/` with the name of `ComponentName.test.js`.

### Required packages for testing:

- `enzyme` => is a JavaScript Testing utility for React
- `@wojtekmaj/enzyme-adapter-react-17` => Unofficial adapter for React 17 for Enzyme.
- `mocha` => is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
- `@babel/register` => uses Node's require() hook system to compile files on the fly when they are loaded.
- `ignore-styles` => a style hook to ignore style imports when running in Node.
- `chai` => is an assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- `chai-enzyme` => is a ***Chai.js*** assertions for ***enzyme***.
- `cheerio` => required by ***chai***.
- `nyc` => is an npm package for getting stats about the **test coverage** working hand to hand with `Mocha`.
- `@istanbuljs/nyc-config-babel` => Handy default configuration for instrumenting your babel-backed project with ***test coverage*** using `nyc` and `babel-plugin-istanbul`.
- `babel-plugin-istanbul` => A Babel plugin that instruments your code with `Istanbul coverage`. It can instantly be used with `karma-coverage` and `mocha` on Node.js (through `nyc`)

### .mocharc.yml file:

- Imports all the required packages for mocha.
- Specifies the name of the setup file.
- Specifies which files should be tested.

### .nycrc file:

- Extends babel configurations to use `@istanbuljs/nyc-config-babel`
- Set `check-coverage` to true.
- Set lines percentage to `60%`.
- Creates 2 report types:

    1-  `html` => outputs the coverage results as `html` in the `/coverage` directory.

    2- `text` => outputs the coverage results as `text` in the `CLI`

## Prerequisites:
- nodeJS > 14.X.X or Docker

## Installing / Getting Started:
### Development (locally):

- Clone repo => `git clone repo-url`
- `cd frontend`
- Install dependencies => `yarn install`
- Start the development server => `yarn start`

### Development (using Docker):

- Clone repo => `git clone repo-url`
- `cd frontend`
- Install dependencies (required for prettier) => `yarn install`
- Start the development server => `docker-compose up --build`

## Update environment variables:

Please keep in mind that environment variables configured using webpack which means that you need to re-run the corresponding environment script (yarn start, yarn run build) if you update the environment file.

## Configuring Prettier

This build relies on [Prettier formatter](https://prettier.io/) to enforce a code style. You can find steps on how to setup prettier formatter with WebStorm/PhpStorm [here](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher). Please refer to other tutorials if you are using a different IDE.

Notes:

- It's better to use the local `node_modules` version of prettier instead of a global one. This is to avoid version conflicts (in case the globally installed version does not match with the versions specified in `package.json`). So when setting up the file watcher when you follow the steps from the above link you can set `program` to `$ProjectFileDir$\node_modules\.bin\prettier` (warning this assumes that node_modules sits in the root of your project. This will need to change if your directory structure changes).
- You will have to create two file watchers. One for JSX files and one for JS files. The webpack build tools are already configured to work with `eslint` and `prettier`. The only thing needed is the two file watchers.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- All redux store related changes
- Any of the following errors:
  1. Linting errors.
  2. Code format errors (because of [prettier](https://prettier.io/))

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `yarn build`. 

### `yarn analyze-bundle`

It allows you to analyze the bundle size.

### `yarn test`

It runs all unit test files in `/src/test` directory.

### `yarn test:watch`

- It runs all unit test files in `/src/test` directory using watch mode.
- Will run all your tests once then again on every change of your source code

### `yarn test:coverage`

It runs test coverage with `60%` which is set in `.nycrc` file.
