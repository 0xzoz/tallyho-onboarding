# Tally Ho Onboarding

This library is used to help onboard new Tally Ho users. It allows you to ask the Tally Ho extension to redirect users back to your page after onboarding has finished.

This library will register the current page as having initiated onboarding, so that Tally Ho knows where to redirect the user after onboarding. Note that the page will be automatically reloaded a single time once a Tally Ho installation is detected, in order to facilitate this registration.

> This package was originally used with [Metamask's](https://metamask.io) [onboarding package](https://docs.metamask.io/guide/onboarding-library.html)

## Installation

`@tallyho-onboarding` is made available as either a CommonJS module, and ES6 module, or an ES5 bundle.

- ES6 module: `import TallyHoOnboarding from '@tallyho-onboarding'`
- ES5 module: `const TallyHoOnboarding = require('@tallyho-onboarding')`
- ES5 bundle: `dist/tallyho-onboarding.bundle.js` (this can be included directly in a page)



## API

Assuming `import TallyHoOnboarding from '@tallyho-onboarding'`, the following API is available.

### Static methods

#### `TallyHoOnboarding.isTallyHoInstalled()`

Returns `true` if the Tally Ho provider is detected, or `false` otherwise. 

### Static properties

#### `TallyHoOnboarding.FORWARDER_MODE`

A set of constants for each of the available forwarder modes.

| Constant   | Description                                                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `INJECT`   | Inject a `iframe` to that will refresh until Tally Ho has installed                                                                    |
| `OPEN_TAB` | Open a tab to a new page that will refresh until Tally Ho has installed—this is only useful if the client app has disallowed `iframes` |

### Constructor

#### `new TallyHoOnboarding()`

The constructor accepts an optional options bag with the following:

| Option            | Description                                                                                                 |
| :---------------- | :---------------------------------------------------------------------------------------------------------- |
| `forwarderOrigin` | Override the forwarder URL, useful for testing. **Optional**, defaults to `'https://fwd.metamask.io'`.      |
| `forwarderMode`   | One of the available forwarder modes. **Optional**, defaults to `TallyHoOnboarding.FORWARDER_MODE.INJECT`. |

### Instance methods

#### `startOnboarding()`

Starts onboarding by opening the MetaMask download page and waiting for Tally Ho to be installed. Once the Tally Ho extension installation is detected, a message will be sent to Tally Ho to register the current site as the onboarding initiator.

#### `stopOnboarding()`

Stops onboarding registration, including removing the injected `iframe` (if any).

## Contributing

### Setup

- Install [Node.js](https://nodejs.org) version 12
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v1](https://yarnpkg.com/en/docs/install)
- Run `yarn setup` to install dependencies and run any requried post-install scripts
  - **Warning:** Do not use the `yarn` / `yarn install` command directly. Use `yarn setup` instead. The normal install command will skip required post-install scripts, leaving your development environment in an invalid state.

### Linting

Run `yarn lint` to run the linter.

### Release & Publishing

The project follows the same release process as the other libraries in the Tally Ho organization:

1. Create a release branch
   - For a typical release, this would be based on `main`
   - To update an older maintained major version, base the release branch on the major version branch (e.g. `1.x`)
2. Update the changelog
3. Update version in package.json file (e.g. `yarn version --minor --no-git-tag-version`)
4. Create a pull request targeting the base branch (e.g. `main` or `1.x`)
5. Code review and QA
6. Once approved, the PR is squashed & merged
7. The commit on the base branch is tagged
8. The tag can be published as needed

## License

This project is available under the [MIT license](./LICENSE).
