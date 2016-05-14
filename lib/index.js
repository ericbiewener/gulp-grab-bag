'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initializeSettings = exports.jsTasks = undefined;

var _index = require('./javascript/tasks/index');

var _index2 = _interopRequireDefault(_index);

var _settings = require('./settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.jsTasks = _index2.default;
exports.initializeSettings = _settings.initializeSettings;