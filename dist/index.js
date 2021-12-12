"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskingString = exports.filterText = void 0;
function filterText(text, listOfBadWord) {
    for (let x = 0; x < listOfBadWord.length; x++) {
        let regExStr = `${listOfBadWord[x]}`;
        let regEx = new RegExp(regExStr, 'g');
        text = text.replace(regEx, maskingString(listOfBadWord[x]));
    }
    return text;
}
exports.filterText = filterText;
function maskingString(text) {
    let c = text.split('');
    for (let u = 0; u < c.length; u++) {
        if (u != 0 && u != c.length - 1) {
            c[u] = '*';
        }
    }
    return c.join("");
}
exports.maskingString = maskingString;
