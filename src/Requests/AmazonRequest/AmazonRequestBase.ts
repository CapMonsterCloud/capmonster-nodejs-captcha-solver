import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

type AmazonRequestCommonIn = {
  websiteURL: string;
  cookieSolution?: boolean;
  userAgent?: string;
  nocache?: boolean;
};

/**
 * Captcha script flow: jsapi.js. https://docs.capmonster.cloud/docs/captchas/amazon-task/
 */
export type AmazonCaptchaScriptIn = AmazonRequestCommonIn & {
  websiteKey: string;
  captchaScript: string;
};

/**
 * Challenge flow: challenge.js plus gokuProps key, context, and iv.
 * captcha.js is optional when the page only loads a challenge.
 */
export type AmazonChallengeIn = AmazonRequestCommonIn & {
  challengeScript: string;
  websiteKey: string;
  context: string;
  iv: string;
  captchaScript?: string;
};

/**
 * Invisible captcha: only challenge.js is loaded.
 * context and iv are required and may be empty strings.
 */
export type AmazonInvisibleChallengeIn = AmazonRequestCommonIn & {
  challengeScript: string;
  context: string;
  iv: string;
};

export type AmazonRequestBaseIn =
  | (AmazonCaptchaScriptIn & CaptchaRequestBaseIn)
  | (AmazonChallengeIn & CaptchaRequestBaseIn)
  | (AmazonInvisibleChallengeIn & CaptchaRequestBaseIn);

type AmazonRequestStoredIn = AmazonRequestCommonIn &
  CaptchaRequestBaseIn & {
    challengeScript?: string;
    captchaScript?: string;
    websiteKey?: string;
    context?: string;
    iv?: string;
  };

/**
 * Base Amazon recognition request.
 */
export abstract class AmazonRequestBase extends CaptchaRequestBase {
  /**
   * Address of the page on which the captcha is recognized
   */
  public websiteURL!: string;

  /**
   * Link to challenge.js
   */
  public challengeScript?: string;

  /**
   * Link to captcha.js or jsapi.js
   */
  public captchaScript?: string;

  /**
   * Captcha apiKey, or window.gokuProps.key for the challenge flow.
   */
  public websiteKey?: string;

  /**
   * window.gokuProps.context. An empty string is valid for an invisible captcha.
   */
  public context?: string;

  /**
   * window.gokuProps.iv. An empty string is valid for an invisible captcha.
   */
  public iv?: string;

  /**
   * By default false. If you need to use cookies "aws-waf-token", specify the value true. Otherwise, what you will get in return is "captcha_voucher" and "existing_token".
   */
  public cookieSolution?: boolean = false;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS.
   */
  public userAgent?: string;

  constructor({
    type,
    nocache,
    websiteURL,
    challengeScript,
    captchaScript,
    websiteKey,
    context,
    iv,
    cookieSolution,
    userAgent,
  }: AmazonRequestStoredIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.challengeScript = challengeScript;
    this.captchaScript = captchaScript;
    this.websiteKey = websiteKey;
    this.context = context;
    this.iv = iv;
    this.cookieSolution = cookieSolution;
    this.userAgent = userAgent;
  }
}
