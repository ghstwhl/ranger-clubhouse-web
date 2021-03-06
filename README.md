# Clubhouse 2.0 - A Single Page Application (SPA) frontend

[![Build Status](https://github.com/burningmantech/ranger-clubhouse-web/workflows/CI%2fCD/badge.svg)](https://github.com/burningmantech/ranger-clubhouse-web/actions)

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Yarn](https://yarnpkg.org/)
* [Ember CLI](https://ember-cli.com/)
* Google Chrome or Firefox is recommended since the Ember Inspector extension is supported for both browsers.
  Safari and Windows IE Edge are supported.
  Windows IE11 and lesser versions *are not* supported.
* [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en): useful for inspecting Ember Data objects, routes, URL names, etc.

## Installation

* `git clone https://github.com/burningmantech/ranger-clubhouse-web` this repository
* `cd ranger-clubhouse-web`
* `yarn install`
* Install the Clubhouse API server - see https://github.com/burningmantech/ranger-clubhouse-api/blob/master/README.md for more information

## Running / Development

* Start the frontend : `ember serve`

* Make sure the API server is running, see ranger-clubhouse-api/README.md

* Visit the clubhouse app at [http://localhost:4200](http://localhost:4200).
Make sure the browser's javascript console is opened - you will be spending a lot
of time looking at that window during development.

* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).
(Tests are coming)

## API Server Endpoint

The API endpoint is specified in app/config/environment.js

For the development environment this is http://localhost:8000/

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test` runs all tests once, launching and quitting a browser
* `ember test --filter=unit` runs all tests whose module declaration includes “unit”
* `ember test --server` runs tests when changes are made
* Visiting http://localhost:4200/tests in a browser will run tests (optionally filtered) when changes are made to any code or test

Ember uses [QUnit](https://api.qunitjs.com/) for tests.
[qunit-dom](http://qunit-dom.com/) is included in the testing framework to provide higher level assertions for QUnit.

ember-cli-custom-assertions](https://github.com/dockyard/ember-cli-custom-assertions) has been included by the Ranger Tech Team so custom assertions can be used.
Look at the [tests/assertions] directory to see what custom assertions are available.

### Linting

* `yarn run lint:js`
* `yarn run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
