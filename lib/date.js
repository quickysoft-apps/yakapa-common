'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nowString = function nowString() {
  return new Date().toJSON().slice(0, 19).replace(/T/g, ' ');
};

exports.default = {
  nowString: nowString
};