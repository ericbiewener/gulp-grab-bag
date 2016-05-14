'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.libOnce = libOnce;
exports.lib = lib;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

var _settings = require('../../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function libOnce() {
	var paths = _settings2.default.paths;

	return function () {
		console.log('JS lib');

		_gulp2.default.src(paths.entryGlob).pipe((0, _gulpBabel2.default)({
			presets: ['es2015', 'react'],
			plugins: ['transform-object-rest-spread']
		})).pipe(_gulp2.default.dest(paths.lib));
	};
}

function lib() {
	var paths = _settings2.default.paths,
	    fn = libOnce();

	return function () {
		_gulp2.default.watch(paths.entryGlob, fn);
		fn();
	};
}