/**
 * @desc 用户信息
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/mtc/user/getInfo', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
