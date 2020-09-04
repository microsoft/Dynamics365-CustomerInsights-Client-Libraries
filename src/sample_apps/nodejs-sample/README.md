---
page_type: sample
languages:
- javascript
products:
- @microsoft/customerinsights
- express
- msal.js
description: "A simple NodeJS application calling Dynamics 365 Customer Insights API via the client library. Using msal.js (w/ AAD v2 endpoint) for authentication."
---

# NodeJs Sample Application

A simple NodeJS application which demonstrates how to include the [@microsoft/customerinsights](https://www.npmjs.com/package/@microsoft/customerinsights) package and use it to make requests to the Customer Insights API.
This application also has a sample on how to configure [MSAL.JS Core](https://www.npmjs.com/package/msal) to login, logout, and acquire an access token for use in the Customer Insights API.

**Note:** A quickstart guide covering pre-requisite to getting started can be found [here](https://developer.ci.ai.dynamics.com/).

## Contents

| File/folder                  | Description                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `.vscode/launch.json`        | A launch configuration for attaching debugger to local server in VS Code.                                                                 |
| `routes/customerinsights.js` | Routes for the front-end to request data from Customer Insights via the client libraries.                                                 |
| `routes/index.js`            | A single route for the main page.                                                                                                         |
| `static/css/font/`           | Contains fonts for displaying some icons in the UI.                                                                                       |
| `static/css/layout.css`      | Contains shared CSS for the entire app.                                                                                                   |
| `static/js/authConfig.js`    | Contains configuration parameters for the sample. Make sure to replace the placeholder value before running.                              |
| `static/js/authPopup.js`     | Main authentication logic resides here (using Popup flow).                                                                                |
| `static/js/ci.js`            | Logic for interacting with the NodeJS customerinsights.js routes.                                                                         |
| `static/js/index.js`         | UI logic for the main page.                                                                                                               |
| `static/js/layout.js`        | UI logic for the shared layout.                                                                                                           |
| `views/error.pub`            |  UI of a simple error page.                                                                                                               |
| `views/index.pub`            |  UI of the sample.                                                                                                                        |
| `views/layout.pub`           |  Shared layout UI.                                                                                                                        |
| `.gitignore`                 | Defines what to ignore at commit time.                                                                                                    |
| `package.json`               | Package manifest for npm.                                                                                                                 |
| `README.md`                  | This README file.                                                                                                                         |
| `secrets.js`                 | Contains the secret API Subscription Key to be used with requests to the API. Make sure to replace the placeholder value before running.  |
| `server.js`                  | Implements a simple Node server to serve the sample app.                                                                                  |

## Prerequisites

[Node](https://nodejs.org/en/) must be installed to run this sample.

## Setup

1. Follow the instructions for getting started [here](https://developer.ci.ai.dynamics.com/).
2. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.

## Running the sample

1. Open the [static/js/authConfig.js](./static/js/authConfig.js) file and replace the string `<add your client id here>` with the client id from your app registration (see getting started instructions for more details).
2. Open the [secrets.js](./secrets.js) file and replace the string `<put customer insights api subscription key here>` with the subscription key from your Customer Insights environment (see getting started instructions for more details).
3. To start the sample application, run `npm start`.
4. Finally, open a browser to [http://localhost:3000](http://localhost:3000).

## Key points

This sample demonstrates the following Customer Insights interactions:

* Signing in with MSAL and providing authorization token + subscription key with requests.
* Retrieving all Customer Insights instances.
* Querying for all entities of a particular type (and displaying in table + pop-up).
* Searching with a term on entities that support search (Customer in the sample). 

## Contributing

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](./CONTRIBUTING.md).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.