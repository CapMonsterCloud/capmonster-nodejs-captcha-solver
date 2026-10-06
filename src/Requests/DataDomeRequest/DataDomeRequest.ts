import { TaskType } from '../../TaskType';
import { DataDomeRequestBase, DataDomeRequestBaseIn } from './DataDomeRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

export type DataDomeRequestIn = Pick<DataDomeRequestBaseIn, Exclude<keyof DataDomeRequestBaseIn, 'type' | '_class'>> & {
  proxy: ProxyInfoIn;
};
/**
 * DataDome recognition request.
 * Own proxy is required.
 * {@link https://docs.capmonster.cloud/docs/captchas/datadome/}
 */
export class DataDomeRequest extends DataDomeRequestBase {
  public declare class: 'DataDome';

  constructor({ proxy, ...argsObj }: DataDomeRequestIn) {
    super({ type: TaskType.CustomTask, _class: 'DataDome', ...argsObj });
    Object.assign(this, new ProxyInfo(proxy));
  }
}
