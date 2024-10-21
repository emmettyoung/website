# REPL gearup materials

This is the codebase for the REPL gearup. It looks very similar to that of the Mock gearup with the addition of a trivial `backend`. Use this backend to receive fetch requests and return data asynchrnously to your REPL.

Unlike the previous sprint, you should not use this gearup as your starter code for this sprint. Instead, use your Mock implementation; this gearup is only used to illustrate the use of `fetch` requests.

Your tasks can be found in the `REPLInput.tsx` and `App.spec.ts` files and are labeled with "TODO". First, make a fetch request that returns the student from the list of students based on the index passed in. Once this is done, right a test using Playwright to verify its functionality.

## Playwright tests

Notice in the `playwright.config.ts` file, there is a small change to the webServer field. In addition to running the frontend, it also starts up the backend. If possible, this would be a nice addition to your own implementation if you can run your backend automatically in your tests.

## How to setup and run
Once cloned:

### Setup REPL from root directory
`cd repl` — Change into the `repl` directory

`npm install` — Installs node_modules folder for dependencies

`npx install playwright` — Installs everything needed to run PlayWright

### Running Frontend
`npm start` — This starts a local server at port 8000 that compiles your code in real time.

### Running Backend
`node src/backend/trivial_backend.js` — This starts a local server at port 3232 that mocks a very simple backend with one static JSON output. Once it is run, feel free to visit 'http://localhost:3232' to see what gets returned.

*You may have to open multiple terminals to run the frontend and backend simultaneously*

### Running tests with Playwright
`npx playwright test` — Runs tests

`npx playwright show-report` — Shows a code breakdown of test progressions

`npx playwright test --ui`— Opens a UI that allows you to watch and trace your (failing) tests live in a browser

`npx playwright codegen <url>` — Opens a URL and generates tests with locators for elements on the page. 

-> NOTE: You still have to document your tests and add assertions. 

-> NOTE: If you are using your local server, you must start it before you try to use the codegen command.