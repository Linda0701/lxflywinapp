/**
 * @desc 技术问题Top10
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 数据类型;0：FTC；1：MTC */
  dataType;
  /** 机型;0：C919；1：ARJ21 */
  aircraftType;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/mtc/technical-issue-track/top10', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
