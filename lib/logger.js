'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.error = exports.warn = exports.info = undefined;

var _date = require('./date');

var date = _interopRequireWildcard(_date);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var prefixedLogArguments = function prefixedLogArguments(args) {
	var a = ['[' + date.nowString() + ']'];
	for (var i = 0; i < args.length; i++) {
		a.push(args[i]);
	}
	return a;
};

var info = exports.info = function info() {
	console.info.apply(console, prefixedLogArguments(arguments));
};

var warn = exports.warn = function warn() {
	console.warn.apply(console, prefixedLogArguments(arguments));
};

var error = exports.error = function error() {
	console.error.apply(console, prefixedLogArguments(arguments));
};