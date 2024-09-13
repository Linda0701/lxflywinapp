/**
 * @desc 会议分页
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 会议名称 */
  name;
  /** 委员会类型（0:FTC委员会 1:MTC委员会） */
  committeeType;
  /** 飞机类型（0:ARJ21-700 1:C919） */
  modelType;
  /** pageSize */
  pageSize;
  /** pageNum */
  pageNum;
  /** orderByColumn */
  orderByColumn;
  /** isAsc */
  isAsc;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/mtc/meeting-info/page', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
