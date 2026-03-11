# firebird.ro Website

**Live site:** [https://firebird.ro](https://firebird.ro)

## Overview

This is the source code for **firebird.ro**, the Romanian community website for the [Firebird open-source database](https://www.firebirdsql.org/). It provides news, documentation, downloads, community resources, and support information in Romanian.

The project is a single-page application (SPA) built with React and `react-router-dom`, featuring the following pages:

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page |
| `/documentatie` | Documentation | Firebird documentation resources |
| `/descarcari` | Downloads | Links to download Firebird |
| `/comunitate` | Community | Community resources and events |
| `/suport` | Support | Support channels and help |
| `/dezvoltare` | Development | Development resources |

## Project Structure

```
firebird.ro_website/
├── public/               # Static assets and HTML template
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/       # Shared UI components
│   │   ├── Header.js     # Site-wide navigation header
│   │   ├── Header.css
│   │   ├── Footer.js     # Site-wide footer
│   │   └── Footer.css
│   ├── pages/            # One component per route
│   │   ├── Home.js
│   │   ├── Documentation.js
│   │   ├── Downloads.js
│   │   ├── Community.js
│   │   ├── Support.js
│   │   └── Development.js
│   ├── App.js            # Root component with router configuration
│   ├── App.css
│   ├── index.js          # Application entry point
│   └── index.css
├── package.json
└── README.md
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
