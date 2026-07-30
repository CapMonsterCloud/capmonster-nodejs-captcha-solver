import { TaskType } from '../../TaskType';
import { AlibabaRequestBase, AlibabaRequestBaseIn } from './AlibabaRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

export type AlibabaRequestIn = Pick<AlibabaRequestBaseIn, Exclude<keyof AlibabaRequestBaseIn, 'type' | '_class'>> & {
  proxy?: ProxyInfoIn;
};

/**
 * Alibaba Captcha recognition request.
 * {@link https://docs.capmonster.cloud/docs/captchas/alibaba-task/}
 */
export class AlibabaRequest extends AlibabaRequestBase {
  public declare class: 'alibaba';

  constructor({ proxy, ...argsObj }: AlibabaRequestIn) {
    super({ type: TaskType.CustomTask, _class: 'alibaba', ...argsObj });

    if (proxy) {
      Object.assign(this, new ProxyInfo(proxy));
    }
  }
}
