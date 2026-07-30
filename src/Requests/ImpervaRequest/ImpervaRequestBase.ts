import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type ImpervaMetadata = {
  /**
   * Incapsula JS resource path or URL.
   * @example "_Incapsula_Resource?SWJIYLWA=719d34d31c8e3a6e6fffd425f7e032f3"
   */
  incapsulaScriptUrl: string;
  /**
   * Cookies from the Incapsula challenge page (`document.cookie` or `Set-Cookie` header).
   * @example "incap_ses_1166_2930313=...; visid_incap_2930313=..."
   */
  incapsulaCookies: string;
  /**
   * Reese84 fingerprint endpoint (request path ending with `?d=site.com`).
   */
  reese84UrlEndpoint?: string;
};

export type ImpervaRequestBaseIn = {
  websiteURL: string;
  metadata: ImpervaMetadata;
  userAgent?: string;
  _class: string;
} & CaptchaRequestBaseIn;

/**
 * Base Imperva (Incapsula) recognition request.
 * {@link https://docs.capmonster.cloud/docs/captchas/incapsula/}
 */
export abstract class ImpervaRequestBase extends CaptchaRequestBase {
  /**
   * Address of the main page where Incapsula is located.
   */
  public websiteURL!: string;

  public metadata: ImpervaMetadata;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS.
   */
  public userAgent?: string;

  /**
   * Class of captcha object.
   */
  public class: string;

  constructor({ type, nocache, websiteURL, userAgent, metadata, _class }: ImpervaRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = this.validateWebsiteURL(websiteURL);
    this.metadata = metadata;
    this.userAgent = userAgent;
    this.class = _class;
  }
}
