'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function Base(apiKey) {
  _classCallCheck(this, Base);

  this.apiKey = apiKey;
  this.baseUrl = 'https://www.popads.net';
};

exports.default = Base;