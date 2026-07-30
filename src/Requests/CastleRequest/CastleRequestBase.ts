import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type CastleMetadata = {
  /**
   * Link to cw.js
   * @example "https://s.rsg.sc/auth/js/20251234bgef/build/cw.js"
   */
  wUrl: string;
  /**
   * Link to csw.js
   * @example "https://s.rsg.sc/auth/js/20251213bgef/build/csw.js"
   */
  swUrl: string;
  /**
   * Number of tokens (1..49). Default is 1.
   */
  count?: number;
};

export type CastleRequestBaseIn = {
  /**
   * The URL of the page where Castle is located.
   */
  websiteURL: string;
  /**
   * Publishable Key, the Castle identifier.
   * @example "pk_1Tk5Yzr1WFzxrJCh7WzMZzY1rHpaOtdK"
   */
  websiteKey: string;
  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS
   */
  userAgent?: string;
  /**
   * Additional metadata required to solve Castle.
   */
  metadata: CastleMetadata;
  _class: string;
} & CaptchaRequestBaseIn;

/**
 * Base Castle recognition request
 */
export abstract class CastleRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with Castle.
   */
  public websiteURL!: string;

  /**
   * Castle website key (Publishable Key).
   */
  public websiteKey!: string;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS
   */
  public userAgent?: string;

  /**
   * The object that contains additional data about the captcha (wUrl, swUrl, count).
   */
  public metadata!: CastleMetadata;

  /**
   * Class of captcha object
   */
  public class: string;

  constructor({ type, nocache, websiteURL, websiteKey, userAgent, metadata, _class }: CastleRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.websiteKey = websiteKey;
    this.userAgent = userAgent;
    this.metadata = metadata;
    this.class = _class;
  }
}
