# README for Swagger setup on Express API

<div class="mdc">
<div class="ic">

Table of content

- [README for Swagger setup on Express API](#readme-for-swagger-setup-on-express-api)
  - [Introduction](#introduction)
  - [Dependencies](#dependencies)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Testing](#testing)

</div>
<div class="ic">

## Introduction

This guide is a step-by-step instruction on how to setup Swagger for API documentation in an Express API project. It assumes that you already have an Express API project set up. If not, you should do so before proceeding.

</div>
</div>

## Dependencies

The following packages are required for this setup:

- "swagger-jsdoc": "5.0.1"
- "swagger-ui-express": "^4.6.3"

## Installation

1. First, install the necessary packages using npm (node package manager) in your project root directory. You can do this by running the following command in your terminal:

    ```bash
    npm install swagger-jsdoc@5.0.1 swagger-ui-express@4.6.3
    ```

## Configuration

1. Create a new file named `swagger.js` inside the `./config` directory in your project root.

2. In this file, you will be setting up your Swagger definition. This will include paths to your API routes, information about your API such as the title and version, and configurations for your servers. Here's an example:

    ```javascript
    const swaggerJsdoc = require('swagger-jsdoc');

    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Express API with Swagger',
          version: '1.0.0',
        },
        servers: [
          {
            url: 'http://localhost:5500',
            description: 'Development server',
          },
          {
            url: 'https://sherifbutt.github.io/super-docs-documentation/',
            description: 'Production server',
          },
        ],
      },
      apis: ['./routes/*.js'], // path to your API routes files
    };

    const specs = swaggerJsdoc(options);
    module.exports = specs;
    ```

3. In the root directory of your project, create a `jsdocs.json` file with the following content:

    ```json
    {
      "super-docs": {
        "swagger": "./config/swagger.js",
        "productionServer": "https://sherifbutt.github.io/super-docs-documentation/",
        "developmentServer": "http://127.0.0.1:5500/docs/"
      }
    }
    ```

    If a key named `swagger` is provided, a top navigation menu will appear called "API".

## Usage

1. Now you can use swagger-ui-express to serve your API documentation. You need to set this up in your main server file, typically `app.js` or `server.js`:

    ```javascript
    const express = require('express');
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('./config/swagger.js');

    const app = express();

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // your other middlewares and routes go here

    app.listen(5500, () => {
      console.log('Listening on port 5500');
    });
    ```

    This will serve your Swagger UI API documentation on `/api-docs` route.

## Testing

You can now start your server and go to `http://localhost:5500/api-docs` to view your API documentation.

Please replace the URLs and the port according to your setup and make sure the URLs and paths match your actual API routes and servers.

If you have any issues, please open an issue or a pull request.