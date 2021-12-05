"use strict";
function filterText(text, listOfBadWord) {
    for (let x = 0; x < listOfBadWord.length; x++) {
        let regExStr = `${listOfBadWord[x]}`;
        let regEx = new RegExp(regExStr, 'g');
        text = text.replace(regEx, maskingString(listOfBadWord[x]));
    }
    return text;
}
function maskingString(text) {
    let c = text.split('');
    for (let u = 0; u < c.length; u++) {
        if (u != 0 && u != c.length - 1) {
            c[u] = '*';
        }
    }
    return c.join("");
}
