'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _campaign = require('./lib/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _report = require('./lib/report');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopAds = function PopAds(apiKey) {
  _classCallCheck(this, PopAds);

  this.campaign = new _campaign2.default(apiKey);
  this.report = new _report2.default(apiKey);
};

exports.default = PopAds;