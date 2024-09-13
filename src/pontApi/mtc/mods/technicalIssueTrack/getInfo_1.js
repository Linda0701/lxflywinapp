/**
 * @desc 详情
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 技术问题id */
  id;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/mtc/technical-issue-track/{id}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
