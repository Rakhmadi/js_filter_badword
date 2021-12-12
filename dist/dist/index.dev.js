"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskingString = exports.filterText = void 0;

function filterText(text, listOfBadWord) {
  for (var x = 0; x < listOfBadWord.length; x++) {
    var regExStr = "".concat(listOfBadWord[x]);
    var regEx = new RegExp(regExStr, 'g');
    text = text.replace(regEx, maskingString(listOfBadWord[x]));
  }

  return text;
}

exports.filterText = filterText;

function maskingString(text) {
  var c = text.split('');

  for (var u = 0; u < c.length; u++) {
    if (u != 0 && u != c.length - 1) {
      c[u] = '*';
    }
  }

  return c.join("");
}

exports.maskingString = maskingString;