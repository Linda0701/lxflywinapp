/**
 * @desc 用户路由
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/mtc/user/getRouters', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
