import { isNode } from './Utils';
import { nodeRequire } from './nodeRequire';

let createDebugger = (_: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => ({
    [_]: args,
  });
};
if (isNode && typeof process === 'object' && 'env' in process && process.env.DEBUG) {
  createDebugger = nodeRequire('debug');
}

export const debugNet = createDebugger('cmc-net');
export const debugHttp = createDebugger('cmc-http');
export const debugTask = createDebugger('cmc-task');
export const debugErrorConverter = createDebugger('cmc-errconv');

export default { debugNet, debugHttp, debugTask, debugErrorConverter };
