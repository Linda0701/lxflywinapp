/**
 * @desc 刷新token
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 工号 */
  jobNum;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/mtc/token/refresh/{jobNum}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
