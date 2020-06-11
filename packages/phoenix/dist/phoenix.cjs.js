'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("button", null, children);
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("p", null, children);
};

exports.Button = Button;
exports.Text = Text;
