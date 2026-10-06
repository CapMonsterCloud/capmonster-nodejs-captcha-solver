import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type TenDIMetadata = {
  captchaUrl?: string;
  /**
   * Single-use Aid value from the target site.
   * Omit when the site does not return Aid. Obtain a new value for every task.
   */
  aidEncrypted?: string;
};

export type TenDIRequestBaseIn = {
  websiteURL: string;
  websiteKey: string;
  userAgent?: string;
  metadata?: TenDIMetadata;
  _class: string;
} & CaptchaRequestBaseIn;

/**
 * Base TenDI recognition request
 */
export abstract class TenDIRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with TenDI.
   */
  public websiteURL!: string;

  /**
   * TenDI website key.
   */
  public websiteKey!: string;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS
   */
  public userAgent?: string;

  /**
   * Additional metadata required to solve TenDI.
   */
  public metadata?: TenDIMetadata;

  /**
   * Class of captcha object
   */
  public class: string;

  constructor({ type, nocache, websiteURL, userAgent, websiteKey, metadata, _class }: TenDIRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.websiteKey = websiteKey;
    this.userAgent = userAgent;
    this.metadata = metadata;
    this.class = _class;
  }
}
