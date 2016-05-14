'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = browserifyCreate;

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _watchify = require('watchify');

var _watchify2 = _interopRequireDefault(_watchify);

var _babelify = require('babelify');

var _babelify2 = _interopRequireDefault(_babelify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function browserifyCreate(entry, bundle) {
	var debug = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	var importsToIgnore = arguments[3];

	var b = (0, _browserify2.default)({
		cache: {},
		packageCache: {},
		entries: entry,
		debug: debug,
		plugin: [_watchify2.default]
	}).transform(_babelify2.default, {
		presets: ['es2015', 'react'],
		plugins: ['transform-object-rest-spread']
	});

	if (importsToIgnore) {
		importsToIgnore.forEach(function (i) {
			return b.ignore(i);
		});
	}

	b.on('update', bundle);
	b.on('log', console.log);

	return b;
}