import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type HuntMetadata = {
  /**
   * The full link to the api.js file.
   * Example:
   * https://www.example.com/hd-api/external/apps/<hash>/api.js
   */
  apiGetLib: string;
  /**
   * The `data` parameter (required only in some solving modes).
   */
  data?: string;
  /**
   * Full widget URL. Do not send together with `data`.
   */
  widgetUrl?: string;
};

export type HuntRequestBaseIn = {
  /**
   * The URL of the page where the Hunt CAPTCHA is located.
   */
  websiteURL: string;
  /**
   * Browser User-Agent.
   */
  userAgent?: string;
  /**
   * Additional metadata required to solve Hunt.
   */
  metadata: HuntMetadata;
  _class: string;
} & CaptchaRequestBaseIn;

/**
 * Base Hunt recognition request
 */
export abstract class HuntRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with Hunt.
   */
  public websiteURL!: string;

  /**
   * Browser User-Agent.
   */
  public userAgent?: string;

  /**
   * Additional data about the captcha (apiGetLib, data).
   */
  public metadata!: HuntMetadata;

  /**
   * Class of captcha object
   */
  public class!: string;

  constructor({ type, nocache, websiteURL, userAgent, metadata, _class }: HuntRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.userAgent = userAgent;
    this.metadata = metadata;
    this.class = _class;
  }
}
