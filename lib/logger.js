'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixedLogArguments = function prefixedLogArguments(args) {
	var a = ['[' + _date2.default.nowString() + ']'];
	for (var i = 0; i < args.length; i++) {
		a.push(args[i]);
	}
	return a;
};

var logger = {
	info: function info() {
		console.info.apply(console, prefixedLogArguments(arguments));
	},
	warn: function warn() {
		console.warn.apply(console, prefixedLogArguments(arguments));
	},
	error: function error() {
		console.error.apply(console, prefixedLogArguments(arguments));
	}
};

exports.default = {
	logger: logger
};