import { TaskType } from '../../TaskType';
import { ImpervaRequestBase, ImpervaRequestBaseIn } from './ImpervaRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

export type ImpervaRequestIn = Pick<ImpervaRequestBaseIn, Exclude<keyof ImpervaRequestBaseIn, 'type' | '_class'>> & {
  proxy?: ProxyInfoIn;
};

/**
 * Imperva (Incapsula) recognition request.
 * {@link https://docs.capmonster.cloud/docs/captchas/incapsula/}
 */
export class ImpervaRequest extends ImpervaRequestBase {
  public declare class: 'Imperva';

  constructor({ proxy, ...argsObj }: ImpervaRequestIn) {
    super({ type: TaskType.CustomTask, _class: 'Imperva', ...argsObj });

    if (proxy) {
      Object.assign(this, new ProxyInfo(proxy));
    }
  }
}
