import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type RecaptchaV3EnterpriseRequestBaseIn = {
  websiteURL: string;
  websiteKey: string;
  userAgent?: string;
  minScore?: number;
  pageAction?: string;
} & CaptchaRequestBaseIn;

/**
 * Base Recaptcha V3 Enterprise recognition request
 */
export abstract class RecaptchaV3EnterpriseRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with Google ReCaptcha
   */
  public websiteURL!: string;

  /**
   * The ReCaptcha v3 site key on the target page.
   * https://www.google.com/recaptcha/enterprise.js?render=THIS_ONE
   */
  public websiteKey!: string;

  /**
   * Browser's User-Agent which is used in emulation.
   * It is required that you use a signature of a modern browser,
   * otherwise Google will ask you to "update your browser".
   */
  public userAgent?: string;

  // The action name passed to grecaptcha.execute().
  public pageAction?: string;

  //  Can have a value from 0.1 to 0.9
  public minScore?: number;

  constructor({ type, nocache, websiteURL, websiteKey, userAgent, pageAction, minScore }: RecaptchaV3EnterpriseRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.websiteKey = websiteKey;
    this.userAgent = userAgent;
    this.pageAction = pageAction;
    this.minScore = minScore;
  }
}
