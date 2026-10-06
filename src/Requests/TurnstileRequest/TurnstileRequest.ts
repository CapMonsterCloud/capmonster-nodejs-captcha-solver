import { TaskType } from '../../TaskType';
import { TurnstileRequestBase, TurnstileRequestBaseIn } from './TurnstileRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

type TurnstileFields = Pick<TurnstileRequestBaseIn, Exclude<keyof TurnstileRequestBaseIn, 'type'>>;

export type TurnstileRequestIn =
  | (TurnstileFields & {
      cloudflareTaskType?: undefined;
      userAgent?: string;
      pageAction?: string;
      data?: string;
      proxy?: ProxyInfoIn;
    })
  | (TurnstileFields & {
      cloudflareTaskType: 'token';
      userAgent: string;
      pageAction: string;
      data: string;
      pageData: string;
      apiJsUrl?: string;
      proxy?: ProxyInfoIn;
    })
  | (TurnstileFields & {
      cloudflareTaskType: 'cf_clearance';
      htmlPageBase64: string;
      userAgent: string;
      data?: string;
      pageData?: string;
      pageAction?: string;
      apiJsUrl?: string;
      proxy: ProxyInfoIn;
    })
  | (TurnstileFields & {
      cloudflareTaskType: 'wait_room';
      htmlPageBase64: string;
      userAgent: string;
      proxy: ProxyInfoIn;
    });

/**
 * TurnstileTask, Cloudflare Challenge, and Cloudflare Waiting Room.
 * Own proxy is required for cf_clearance and wait_room.
 * {@link https://docs.capmonster.cloud/docs/captchas/turnstile-task/}
 */
export class TurnstileRequest extends TurnstileRequestBase {
  cloudflareTaskType?: 'token' | 'cf_clearance' | 'wait_room';
  userAgent?: string;
  pageAction?: string;
  htmlPageBase64?: string;
  data?: string;
  pageData?: string;
  apiJsUrl?: string;
  constructor(argsObj: TurnstileRequestIn) {
    super({ type: TaskType.TurnstileTask, ...argsObj });
    this.cloudflareTaskType = argsObj.cloudflareTaskType;
    this.userAgent = argsObj.userAgent;

    if (argsObj.cloudflareTaskType === 'cf_clearance') {
      this.htmlPageBase64 = argsObj.htmlPageBase64;
      this.data = argsObj.data;
      this.pageData = argsObj.pageData;
      this.apiJsUrl = argsObj.apiJsUrl;
      this.pageAction = argsObj.pageAction;
    } else if (argsObj.cloudflareTaskType === 'token') {
      this.pageAction = argsObj.pageAction;
      this.data = argsObj.data;
      this.pageData = argsObj.pageData;
      this.apiJsUrl = argsObj.apiJsUrl;
    } else if (argsObj.cloudflareTaskType === 'wait_room') {
      this.htmlPageBase64 = argsObj.htmlPageBase64;
    } else {
      this.pageAction = argsObj.pageAction;
      this.data = argsObj.data;
    }

    if (argsObj.proxy) {
      Object.assign(this, new ProxyInfo(argsObj.proxy));
    }
  }
}
