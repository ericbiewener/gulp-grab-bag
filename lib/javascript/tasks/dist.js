'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	function bundle() {
		console.log('JS dist');

		b.bundle().on('error', _emitJsError2.default).pipe((0, _vinylSourceStream2.default)(paths.bundleName + '.js')).pipe((0, _vinylBuffer2.default)()).pipe(_gulp2.default.dest(paths.dist)).pipe((0, _gulpRename2.default)(paths.bundleName + '.min.js')).pipe((0, _gulpUglify2.default)({ mangle: true })).pipe(_gulp2.default.dest(paths.dist));
	}

	for (var _len = arguments.length, importsToIgnore = Array(_len), _key = 0; _key < _len; _key++) {
		importsToIgnore[_key] = arguments[_key];
	}

	var paths = _settings2.default.paths,
	    b = (0, _browserifyCreate2.default)(paths.entry, bundle, false, importsToIgnore);

	return bundle;
};

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _vinylSourceStream = require('vinyl-source-stream');

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

var _vinylBuffer = require('vinyl-buffer');

var _vinylBuffer2 = _interopRequireDefault(_vinylBuffer);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _browserifyCreate = require('../browserifyCreate');

var _browserifyCreate2 = _interopRequireDefault(_browserifyCreate);

var _emitJsError = require('../emitJsError');

var _emitJsError2 = _interopRequireDefault(_emitJsError);

var _settings = require('../../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }