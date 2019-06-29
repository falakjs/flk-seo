"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert the given text to optimized seo string
 *
 * @param   string text
 * @see     https://stackoverflow.com/a/48000411/3380387
 * @returns string
 */
function seo(text) {
    return text
        .normalize('NFD') // Change diacritics
        .replace(/[\u0300-\u036f]/g, '') // Remove illegal characters
        .replace(/\s+/g, '-') // Change whitespace to dashes
        .toLowerCase() // Change to lowercase
        .replace(/&/g, '-and-') // Replace ampersand
        .replace(/[^a-z0-9\-|\u0600-\u06FF]/g, '') // Remove anything that is not a letter(English or Arabic), number or dash
        .replace(/-+/g, '-') // Remove duplicate dashes
        .replace(/^-*/, '') // Remove starting dashes
        .replace(/-*$/, ''); // Remove trailing dashes;
}
exports.seo = seo;
exports.default = seo;
