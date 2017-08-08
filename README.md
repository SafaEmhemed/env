# SE Developers | Student Information System Development Kit

# Version 2.0


## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
  1. [Developer Tools](#developer-tools)
  1. [Routing](#routing)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Build System](#build-system)
  1. [Configuration](#configuration)
  1. [Globals](#globals)
  1. [Styles](#styles)
  1. [Server](#server)
  1. [Production Optimization](#production-optimization)
1. [Learning Resources](#learning-resources)
1. [FAQ](#troubleshooting)

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [immutable](https://github.com/facebook/immutable-js/)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [React-flex-box-grid](http://roylee0704.github.io/react-flexbox-grid/)
* [React-helmet](https://github.com/nfl/react-helmet)
* [Socket.io](https://github.com/socketio/socket.io)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## Requirements
* node `^6.10.0`
* yarn `^0.17.0` or npm `^3.0.0`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `sis` by doing the following:

### Install from source

First, clone the project:

```bash
$ git clone http://5.196.189.7/enterprise/sis.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install             # Install project dependencies (same as `npm install`)
$ yarn run dev             # Compile and launch front-end (same as `npm run dev`)
$ yarn run dev-server      # Compile and launch back-end (same as `npm run dev-server`)
```
If everything works, you should see the back-end server running on default port `4000` and the front-end React Application running on default port `3000`

While developing, you will probably rely mostly on `npm run dev`; however, there are additional scripts at your disposal:

**Note:**You have to run both back-end and front-end server each in different console to handle the back-end requests. If you want to work on front-end only then you can run only the front-end server.

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`test`|run Grommet check.|
|`dev-server`|Runs the Back-end server|
|`dev`|Runs the Front-end Webpack-dev-server|
|`dist`|Compiles the front-end files|
|`dist-server`|Compiles the back-end files|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

### Please Read the [globals](#globals) Section

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications.

```
.
├── ــtests__                # Unit tests
├── config                   # Project and build configurations
├── logs                     # system logs
├── public                   # Static public assets (not imported anywhere in source code)
│   └── index.html           # Main HTML page container for app (Template)
├── server                   # Express application that provides webpack middleware
│   ├── middleware           # Server Middleware
│   ├── router               # Server routes
│   ├── utils                # Server helper modules
│   │   └── logger.js        # System logger module
│   ├── wrappers             # Server Wrappers
│   ├── config.js            # Back-end config file
│   ├── dev.js               # Server development entry point
│   └── server.js            # Server entry point
├── src  
│   ├── images               # Application Images
│   ├── js                   # Application Files
│   │   ├── store.js         # Create and instrument redux store
│   │   ├── App.js           # Application entry point
│   │   ├── index.js         # Application creation entry point
│   │   ├── history-init.js  # Browser history init
│   │   ├── actions          # Application Actions
│   │   ├── api              # Application API request module
│   │   ├── components       # Application general components
│   │   │   └── main.js      # CoreLayout which receives children for each route
│   │   ├── messages         # Application text (Translations)
│   │   │   ├── en-US.js     # Application English translation
│   │   │   └── ar-AR.js     # Application Arabic translation
│   │   ├── reducers         # Application Reducers
│   │   │   ├── location.js  # Location reducer
│   │   │   ├── root.js      # Create and instrument redux store
│   │   │   └── util.js      # Reducer registry and injection
│   │   ├── routes           # Application routes components
│   │   │   ├── index.js     # Application routes definition
│   │   │   ├── utils.js     # Application routes helper functions
│   │   │   ├── NotFound.js  # Application 404 not found components
│   │   │   └── HomePage     # Fractal route
│   ├── scss  
│   │   ├── index.scss           # Application-wide styles (generally settings)
│   │   └── themes               # Application Themes Main SCSS
```

## Development

#### Developer Tools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

However, adding the DevTools components to your project is simple. First, grab the packages from npm:

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

### Routing
We use `react-router` [route definitions](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/project.config.js`.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run deploy` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

### Static Deployments
If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. If you are unsure of how to do this, you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) helpful. The Express server that comes with the starter kit is able to be extended to serve as an API or whatever else you need, but that's entirely up to you.

## Build System

### Configuration

Default project configuration can be found in `~/config/default.js` and `~/server/config.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the actual webpack build configuration**.

Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src/js` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

The following aliases are available

|Alias|Real path|
|---|---|
|`css-base`|The `base.scss` file in the selected theme folder|
|`css-colors`|The `colors.scss` file in the selected theme folder|
|`config`|The system configuration file|
|`homepage`|The `homepage` route folder|
|`images`|The images path in `src` folder|
|`server`|The `server` folder|
|`api`|Alias for `~/server/router/api/routes`|

You can import system config file anywhere using this command:
```js
import Config from 'config';
```
You can import system api route file anywhere using this command:
```js
import Route from 'api/someroute';
```
You can import system base colors and base style using this command:
```js
import BaseCss from 'css-base';
import ColorsCss from 'css-colors';
```
Or in another scss file
```css
@import '~css-base';
@import '~css-colors';
```
And start using variables directly.

### Styles

Both `.scss` and `.css` file extensions are supported out of the box. After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.
Base css file can be imported as follows out of the box:
```js
import Scss from 'css-base';
```

### Server

This starter kit comes packaged with an Express server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Express app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) makes it easier to extend the starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base boilerplate.

### Production Optimization

Babel is configured to use [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined. In production, webpack will extract styles to a `.css` file, minify your JavaScript, and perform additional optimizations such as module deduplication.

## FAQ

Having trouble?
submit an issue. Please be considerate by only posting issues that are directly related to this project; questions about how to implement certain React or Redux features are both best suited for discussion.
