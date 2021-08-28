# kodenkel-typescript-showcase

This repository contains a minimal TypeScript web client application boilerplate/scaffold/skeleton/template (pick your choice of word).

I plan to update this repository in tandem with a tutorial series on my blog. The series is focusing on frameworkless web app development,
using only HTML, CSS and TypeScript. Some *libraries* might get included later on.

The main branch will always contain the pre-configured sandbox. Feature branches will contain the subject of each Part of the series.

## Part 1 - Setting up the sandbox, Singleton class

https://www.kodenkel.com/tutorial/getting-started-with-typescript-frameworkless-browser-application

Branch: main

## Part 2 - Writing to storage, Strategy pattern, factory method

https://www.kodenkel.com/tutorial/getting-started-with-typescript-frameworkless-browser-application-2

Branch: strategy_pattern_registry

<hr>

*Please check out the tutorial, this readme is meant to be short.*

Feel free to browse, inspect and clone.

![simple TypeScript project running in the browser](non-project-files/typescript-get-started-4.jpg)

## Setup

To fully set up this project for local development, you need the following dependencies already installed:

- NodeJs
- NPM (npmjs.com)

To set up the project the very first time (on Debian based distros):

````bash
apt-get install nodejs npm php
chmod +x build.sh start-server.sh
npm install
./build.sh
````

Afterwards, as you make changes, simply compile the project with "build.sh".

Use your favorite web server to serve up static content from the /dist directory.

If you happen to have PHP installed, like me, just run the included shell script:

````bash
./start-server.sh
````

Then, navigate to "http://localhost:8000" in a browser.

### Windows

On Windows install NodeJs, using the default installation options.

In a command prompt, whenever you make changes build the project with:

````
build.bat
````

Start the server (only once), and keep the command prompt window open:

````
start-server.bat
````

Then, navigate to "http://localhost:8000" in a browser.

## Entry point

Look at the TypeScript source in /app/Application.ts

Application is a singleton class. A constant instance is created in the same source file.

TypeScript transpiles our project and saves it in dist/application.js.

In dist/index.html (this is what we load in the browser, its in our document root) we simply require the compiled dist/application.js
