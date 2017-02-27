'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Campaign = function (_Base) {
  _inherits(Campaign, _Base);

  function Campaign() {
    _classCallCheck(this, Campaign);

    return _possibleConstructorReturn(this, (Campaign.__proto__ || Object.getPrototypeOf(Campaign)).apply(this, arguments));
  }

  _createClass(Campaign, [{
    key: 'getAll',
    value: function getAll() {
      var url = this.baseUrl + '/api/campaign_list';
      var p = _request2.default.get(url).query({ key: this.apiKey }).set('Accept', 'application/json').end();
      return p.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'start',
    value: function start(_ref) {
      var campaign_id = _ref.campaign_id;

      var url = this.baseUrl + '/api/campaign_start';
      var p = _request2.default.get(url).query({
        key: this.apiKey,
        campaign_id: campaign_id
      }).set('Accept', 'application/json').end();
      return p.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'pause',
    value: function pause(_ref2) {
      var campaign_id = _ref2.campaign_id;

      var url = this.baseUrl + '/api/campaign_pause';
      var p = _request2.default.get(url).query({
        key: this.apiKey,
        campaign_id: campaign_id
      }).set('Accept', 'application/json').end();
      return p.then(function (res) {
        return res.body;
      });
    }
  }]);

  return Campaign;
}(_base2.default);

exports.default = Campaign;