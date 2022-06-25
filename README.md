# number.isnan <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

ES2015-compliant shim for Number.isNaN.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-number.isnan).

## Example

```js
Number.isNaN = require('number.isnan');
var assert = require('assert');

assert.notOk(Number.isNaN(undefined));
assert.notOk(Number.isNaN(null));
assert.notOk(Number.isNaN(false));
assert.notOk(Number.isNaN(true));
assert.notOk(Number.isNaN(0));
assert.notOk(Number.isNaN(42));
assert.notOk(Number.isNaN(Infinity));
assert.notOk(Number.isNaN(-Infinity));
assert.notOk(Number.isNaN('foo'));
assert.notOk(Number.isNaN(function () {}));
assert.notOk(Number.isNaN([]));
assert.notOk(Number.isNaN({}));

assert.ok(Number.isNaN(NaN));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/number.isnan
[npm-version-svg]: https://versionbadg.es/es-shims/number.isnan.svg
[deps-svg]: https://david-dm.org/es-shims/Number.isNaN.svg
[deps-url]: https://david-dm.org/es-shims/Number.isNaN
[dev-deps-svg]: https://david-dm.org/es-shims/Number.isNaN/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Number.isNaN#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/number.isnan.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/number.isnan.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/number.isnan.svg
[downloads-url]: https://npm-stat.com/charts.html?package=number.isnan
[codecov-image]: https://codecov.io/gh/es-shims/Number.isNaN/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Number.isNaN/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Number.isNaN
[actions-url]: https://github.com/es-shims/Number.isNaN/actions
