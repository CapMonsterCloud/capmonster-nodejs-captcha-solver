import { TaskType } from '../../TaskType';
import { FriendlyRequestBase, FriendlyRequestBaseIn } from './FriendlyRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

export type FriendlyRequestIn = Pick<FriendlyRequestBaseIn, Exclude<keyof FriendlyRequestBaseIn, 'type' | '_class'>> & {
  proxy?: ProxyInfoIn;
};

/**
 * Friendly Captcha recognition request.
 * {@link https://docs.capmonster.cloud/docs/captchas/friendly-task/}
 */
export class FriendlyRequest extends FriendlyRequestBase {
  public declare class: 'friendly';

  constructor({ proxy, ...argsObj }: FriendlyRequestIn) {
    super({ type: TaskType.CustomTask, _class: 'friendly', ...argsObj });

    if (proxy) {
      Object.assign(this, new ProxyInfo(proxy));
    }
  }
}
