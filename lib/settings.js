"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initializeSettings = initializeSettings;
var settings = {};

function initializeSettings(options) {
	Object.assign(settings, options);
}

exports.default = settings;