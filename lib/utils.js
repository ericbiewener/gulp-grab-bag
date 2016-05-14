'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialog = undefined;

var _child_process = require('child_process');

var dialog = exports.dialog = {
  emit: function emit() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0, _child_process.exec)('osascript -e "display dialog \\"' + args.join('\n\n') + '\\""');
  },
  getLineAndColumnString: function getLineAndColumnString(error) {
    return error.loc && 'Line: ' + error.loc.line + '    Column: ' + error.loc.column;
  }
};