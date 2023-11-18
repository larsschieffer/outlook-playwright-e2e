# E2E Testing With Playwright For Outlook Add-ins

A small POC to demonstrate how to write E2E tests
with [Playwright](https://playwright.dev/), which need to access Outlook.com

## Installation

I used [pnpm](https://pnpm.io/) as package manager during development,
but npm should work, too.

### Dependencies

```shell
pnpm install
```

### Account Details

You have to provide your Outlook credentials
in an `.env` file in the root directory.
The following content is required.

```BASIC
USERNAME='your-outlook-email'
PASSWORD='your-outlook-password'
```

## Run Tests

```shell
$ pnpm exec playwright test --project='chromium'
Running 3 tests using 2 workers
  3 passed (11.9s)

To open last HTML report run:

  pnpm exec playwright show-report
```

## Add-in Usage

This repository only contains the required structure for authentication and
primitive navigation in Outlook. Now it is your time to fill the missing
pieces to access your Outlook add-in.
