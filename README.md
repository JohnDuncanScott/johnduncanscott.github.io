# Introduction
This code is for my personal website, which can be found here: http://johnduncanscott.github.io/. Please feel free to use this as a template for your own website. You can find a theme demo at https://johnduncanscott.github.io/#/themedemo.

If you enjoy this project, please consider [:hearts: buying me a beer :beer: :hearts:](https://johnduncanscott.github.io/#/tip) and starring :star: the project.

## Technology used
* Google Analytics 4
* React 17
* React Bootstrap 2.4
* Bootstrap 5
* Sass (SCSS)

# Customising

## Style
* `dark.scss` - contains all the styles
* `ThemeDemo.tsx` - unlinked page that lets you see how the different components will appear (`/#/themedemo`)

## .env variables
See https://create-react-app.dev/docs/adding-custom-environment-variables/. These are used in the app via `config.ts` where possible. `index.html` has to use the `%...%` format.
* `REACT_APP_DISPLAY_NAME` - your name you want displayed everywhere
* `REACT_APP_GITHUB_LINK` - your GitHub profile page
* `REACT_APP_LINKEDIN_LINK` - your LinkedIn profile page
* `REACT_APP_OCCUPATION` - your occupation
* `REACT_APP_TIP_LINK` - your donation / support / tip page

## Miscellaneous
* `FUNDING.yaml` - contains your donation / support / tip page. See https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository
* `manifest.json` - `name` contains your name
* `package.json` - `homepage` contains your website
* `views` - these contain your personal information

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the code to the GitHub webpage.

#### Troubleshooting
* `fatal: A branch named 'gh-pages' already exists.` - run `rm -rf node_modules/.cache/gh-pages` and try again
* `fatal: could not read Username for 'https://github.com': Invalid argument` - `git credential-manager-core` was updated in a later version of Git For Windows and the old version is no longer compatible. Re-installing Git For Windows fixed this
