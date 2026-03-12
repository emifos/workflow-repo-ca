# Workflow CA

This repository contains a forked venue listing web application.The original project allows users to browse venues, view venue details, and authenticate by registering or logging in.

The focus of this assignment is to improve the development workflow and code quality of the project. Tools such as ESLint and Prettier are configured to maintain consistent code standards, while Husky and lint-staged are used to run checks before commits. Unit tests are implemented with Vitest, and end-to-end tests are created with Playwright.

## Features

- ESLint configuration for globals in the test files.
- Prettier for automatic code formatting
- Pre-commit hooks with Husky and lint-staged
- Unit testing with Vitest
- End-to-end testing with Playwright
- Environment variables for secure login testing
- Automated checks run before commits to ensure code is properly formatted.

## Prerequisites

- Node.js (v20+)
- npm

## Getting started

### Installation

```
npm install
```

### Running the project

```
npm start
```

### Running tests

### Vitest

```
npm run test
```

### Playwright

```
npm run e2e
```

## Environment variables

Create a .env file in the root directory:

```
TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=your-password
```

## Available Scripts

- `npm start` - Start development server
- `npm run start` - Start with Live Server
- `npm run build` - Build for production
- `npm run test` - Run unit tests with Vitest
- `npm run e2e` - Run end-to-end tests with playwright
- `npm run e2e:ui` - Run playwright tests in UI mode
- `npm run e2e:headed` - Run end-to-end tests with visible browser
- `npm run e2e:debug` - Run playwright in debug mode

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Vitest
- Playwright
- Husky

## Author

https://github.com/emifos
