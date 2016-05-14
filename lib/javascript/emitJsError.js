'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = emitJsError;

var _utils = require('../utils');

function emitJsError(error) {
	console.log(error);
	_utils.dialog.emit('JS ERROR', error.filename, _utils.dialog.getLineAndColumnString(error), error);
}