type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace mtc {}
}

declare namespace API {
  export namespace mtc {
    /**
     * MTC-02-会议信息接口
     */
    export namespace meetingInfo {
      /**
       * 会议附件
       * /mtc/meeting-info/download/summary/{id}
       */
      export namespace downloadSummary {
        export class Params {
          /** 会议id */
          id;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 会议分页
       * /mtc/meeting-info/page
       */
      export namespace list {
        export class Params {
          /** bo */
          bo;
          /** pageQuery */
          pageQuery;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 详情
       * /mtc/meeting-info/{id}
       */
      export namespace getInfo_2 {
        export class Params {
          /** 会议id */
          id;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * SYS-02-用户信息接口
     */
    export namespace sysUser {
      /**
       * 用户信息
       * /mtc/user/getInfo
       */
      export namespace getInfo {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 用户路由
       * /mtc/user/getRouters
       */
      export namespace getRouters {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * MTC-01-技术问题接口
     */
    export namespace technicalIssueTrack {
      /**
       * 技术问题分页
       * /mtc/technical-issue-track/page
       */
      export namespace page {
        export class Params {
          /** bo */
          bo;
          /** pageQuery */
          pageQuery;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 技术问题统计
       * /mtc/technical-issue-track/statistic
       */
      export namespace statistic {
        export class Params {
          /** 数据类型;0：FTC；1：MTC */
          dataType;
          /** 机型;0：C919；1：ARJ21 */
          aircraftType;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 技术问题Top10
       * /mtc/technical-issue-track/top10
       */
      export namespace top10 {
        export class Params {
          /** 数据类型;0：FTC；1：MTC */
          dataType;
          /** 机型;0：C919；1：ARJ21 */
          aircraftType;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * ATA技术问题Top10
       * /mtc/technical-issue-track/top10Ata
       */
      export namespace top10Ata {
        export class Params {
          /** 数据类型;0：FTC；1：MTC */
          dataType;
          /** 机型;0：C919；1：ARJ21 */
          aircraftType;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 详情
       * /mtc/technical-issue-track/{id}
       */
      export namespace getInfo_1 {
        export class Params {
          /** 技术问题id */
          id;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * SYS-01-token信息接口
     */
    export namespace token {
      /**
       * 登录生成token
       * /mtc/token/gen/{jobNum}
       */
      export namespace login {
        export class Params {
          /** 工号 */
          jobNum;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 刷新token
       * /mtc/token/refresh/{jobNum}
       */
      export namespace refresh {
        export class Params {
          /** 工号 */
          jobNum;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }
  }
}
