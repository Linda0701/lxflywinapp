type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace mtc {}
}

declare namespace API {
  export namespace mtc {
    /**
     * 会议接口
     */
    export namespace biz_meeting_info {
      /**
       * undefined
       * /meeting-info/download/summary/{id}
       */
      export namespace downloadSummary {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * undefined
       * /meeting-info/page
       */
      export namespace list_2 {
        export class Params {
          /** bo */
          bo: any;
          /** pageQuery */
          pageQuery: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * undefined
       * /meeting-info/{id}
       */
      export namespace getInfo_1 {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }

    /**
     * 技术问题接口
     */
    export namespace biz_technical_issue_track {
      /**
       * undefined
       * /technical-issue-track/page
       */
      export namespace list {
        export class Params {
          /** bo */
          bo: any;
          /** pageQuery */
          pageQuery: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * undefined
       * /technical-issue-track/statistic
       */
      export namespace statistic {
        export class Params {
          /** dataType */
          dataType: any;
          /** aircraftType */
          aircraftType: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * undefined
       * /technical-issue-track/top10
       */
      export namespace top10 {
        export class Params {
          /** dataType */
          dataType: any;
          /** aircraftType */
          aircraftType: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * undefined
       * /technical-issue-track/top10Ata
       */
      export namespace top10Ata {
        export class Params {
          /** dataType */
          dataType: any;
          /** aircraftType */
          aircraftType: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * undefined
       * /technical-issue-track/{id}
       */
      export namespace getInfo {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }
    }
  }
}
