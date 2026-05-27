'use strict';

/**
 * Convierte un texto en un slug apto para URLs.
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Restringe un número al rango [min, max].
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Formatea un número de bytes en una cadena legible (KB, MB, ...).
 * @param {number} bytes
 * @param {number} [decimals=1]
 * @returns {string}
 */
function formatBytes(bytes, decimals = 1) {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${parseFloat(value.toFixed(decimals))} ${units[i]}`;
}

/**
 * Trunca un texto a una longitud máxima, añadiendo un sufijo si se recorta.
 * @param {string} text
 * @param {number} max
 * @param {string} [suffix='…']
 * @returns {string}
 */
function truncate(text, max, suffix = '…') {
  const str = String(text);
  if (str.length <= max) return str;
  return str.slice(0, Math.max(0, max - suffix.length)) + suffix;
}

/**
 * Pone en mayúscula la primera letra de cada palabra.
 * @param {string} text
 * @returns {string}
 */
function capitalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/\b\p{L}/gu, (ch) => ch.toUpperCase());
}

module.exports = { slugify, clamp, formatBytes, truncate, capitalize };
