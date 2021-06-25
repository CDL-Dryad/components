# Development Workflow

### Prerequisites
- Node 14

### Instructions

1. Clone the package
```bash
$ git clone https://github.com/CDL-Dryad/components.git 
```

2. Install node dependencies
```bash
$ npm install
```

3. Start the Storybook (https://storybook.js.org) local server
```bash
$ npm run start
```
A new browser tab/window opens with main Storybook page for the frictionless-components project.

At the left side menu, click on Report link to see the current component rendering.

This npm command monitors the current status of the files and updates Storybook page accordingly to changes in the files.
It's simple to configure `npm run start` in IDE.

4. Running the tests
```bash
$ npm run test
```
This runs tests using `jest` with coverage, as defined in `package.json`.
It runs `npm run lint` also, to check good code formatting.

Obs.: all the commands `npm run <command>` are defined in `package.json`.

5. Committing changes

Committing changes will automatically run the tests.

6. Generating a new release and publishing in `npmjs.com` repository

When a new release is ready to be published, run
```bash
$ npm login # if you aren't logged in
$ npm version <version_number>
$ npm run build
$ npm publish --access public
```
Obs.: You can change the version manually in `package.json` instead of running `npm version <version_number>`

7. Updating frictionless-components in Dryad application
Make sure frictionless-components is correctly defined in `package.json` to catch its newest version.

Run
```bash
$ yarn install
```
in the root dir.

## Committing

It will run a bunch of tests and probably not allow you to commit.

Try running to autofix something that it hates for some reason.

`yarn prettier -w '{src,test}/**/*.ts*'`
