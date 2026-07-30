import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type FriendlyMetadata = {
  apiGetLib: string;
};

export type FriendlyRequestBaseIn = {
  websiteURL: string;
  websiteKey: string;
  userAgent?: string;
  metadata: FriendlyMetadata;
  _class: string;
} & CaptchaRequestBaseIn;

/**
 * Base Friendly Captcha recognition request
 */
export abstract class FriendlyRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with Friendly Captcha.
   */
  public websiteURL!: string;

  /**
   * Friendly Captcha sitekey.
   */
  public websiteKey!: string;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS
   */
  public userAgent?: string;

  /**
   * Additional metadata required to solve Friendly Captcha.
   */
  public metadata!: FriendlyMetadata;

  /**
   * Class of captcha object
   */
  public class: string;

  constructor({ type, nocache, websiteURL, websiteKey, userAgent, metadata, _class }: FriendlyRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.websiteKey = websiteKey;
    this.userAgent = userAgent;
    this.metadata = metadata;
    this.class = _class;
  }
}
