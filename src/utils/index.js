import config from './config';
import request from './request';

export {
  config, request
}

export const UUIDGeneratorBrowser = () =>
([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
  (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
);

/**
 * @param {Number} n 数值
 * @param {Number} decimals 小数点
 * @return {Number}
 */
export const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
