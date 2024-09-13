/**
 * @desc 会议附件
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 会议id */
  id;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/mtc/meeting-info/download/summary/{id}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
