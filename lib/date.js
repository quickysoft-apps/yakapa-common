'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var nowString = exports.nowString = function nowString() {
	return new Date().toJSON().slice(0, 19).replace(/T/g, ' ');
};