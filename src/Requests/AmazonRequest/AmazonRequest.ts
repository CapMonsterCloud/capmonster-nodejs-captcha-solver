import { TaskType } from '../../TaskType';
import { AmazonCaptchaScriptIn, AmazonChallengeIn, AmazonInvisibleChallengeIn, AmazonRequestBase } from './AmazonRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

export type AmazonRequestIn = (
  | AmazonCaptchaScriptIn
  | AmazonChallengeIn
  | AmazonInvisibleChallengeIn
) & { proxy?: ProxyInfoIn };

function present(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function assertAmazonFlow(args: AmazonRequestIn): void {
  const websiteKey = 'websiteKey' in args && present(args.websiteKey);
  const captchaScript = 'captchaScript' in args && present(args.captchaScript);
  const challengeScript = 'challengeScript' in args && present(args.challengeScript);
  const context = 'context' in args && typeof args.context === 'string';
  const iv = 'iv' in args && typeof args.iv === 'string';

  const captchaFlow = websiteKey && captchaScript && !challengeScript && !context && !iv;
  const challengeFlow = challengeScript && websiteKey && context && iv;
  const invisibleFlow = challengeScript && context && iv && !websiteKey && !captchaScript;

  if (captchaFlow || challengeFlow || invisibleFlow) {
    return;
  }

  throw new Error(
    'AmazonRequest must use one documented flow: websiteKey + captchaScript, challengeScript + websiteKey + context + iv, or challengeScript + context + iv',
  );
}

/**
 * Amazon recognition request.
 * {@link https://docs.capmonster.cloud/docs/captchas/amazon-task/}
 */
export class AmazonRequest extends AmazonRequestBase {
  constructor(args: AmazonRequestIn) {
    assertAmazonFlow(args);

    super({
      type: TaskType.AmazonTask,
      nocache: args.nocache,
      websiteURL: args.websiteURL,
      cookieSolution: args.cookieSolution,
      userAgent: args.userAgent,
      websiteKey: 'websiteKey' in args ? args.websiteKey : undefined,
      captchaScript: 'captchaScript' in args ? args.captchaScript : undefined,
      challengeScript: 'challengeScript' in args ? args.challengeScript : undefined,
      context: 'context' in args ? args.context : undefined,
      iv: 'iv' in args ? args.iv : undefined,
    });

    if (args.proxy) {
      Object.assign(this, new ProxyInfo(args.proxy));
    }
  }
}
