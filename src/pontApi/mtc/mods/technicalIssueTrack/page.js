/**
 * @desc 技术问题分页
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
  /** 数据类型;0：FTC；1：MTC */
  dataType;
  /** 机型;0：C919；1：ARJ21 */
  aircraftType;
  /** 问题名称 */
  issueName;
  /** ATA */
  ata;
  /** 问题描述 */
  issueDsc;
  /** createBy */
  createBy;
  /** createTime */
  createTime;
  /** updateBy */
  updateBy;
  /** updateTime */
  updateTime;
  /** 非表字段查询，json类型如{"startTime": "2023-10-01 08:00:00", "endTime": "2023-10-01 17:00:00"} */
  params;
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
    pontCore.getUrl('/mtc/technical-issue-track/page', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
