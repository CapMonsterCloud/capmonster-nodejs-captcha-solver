import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type ProsopoRequestBaseIn = {
  websiteURL: string;
  websiteKey: string;
  userAgent?: string;
} & CaptchaRequestBaseIn;

/**
 * Base Prosopo recognition request
 */
export abstract class ProsopoRequestBase extends CaptchaRequestBase {
  /**
   * The full URL of the CAPTCHA page.
   */
  public websiteURL!: string;

  /**
   * The value of the siteKey parameter found on the page.
   */
  public websiteKey!: string;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS.
   */
  public userAgent?: string;

  constructor({ type, nocache, websiteURL, websiteKey, userAgent }: ProsopoRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.websiteKey = websiteKey;
    this.userAgent = userAgent;
  }
}
