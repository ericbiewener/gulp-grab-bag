'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lib = require('./lib');

var _dist = require('./dist');

var _dist2 = _interopRequireDefault(_dist);

var _examples = require('./examples');

var _examples2 = _interopRequireDefault(_examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	lib: _lib.lib,
	libWatch: _lib.libWatch,
	dist: _dist2.default,
	examples: _examples2.default
};