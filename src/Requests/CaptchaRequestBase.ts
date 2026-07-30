import { TaskType } from '../TaskType';

export type CaptchaRequestBaseIn = { type: TaskType; nocache?: boolean };

export function validateWebsiteURL(websiteURL: string): string {
  try {
    const url = new URL(websiteURL);

    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return websiteURL;
    }
  } catch {
    // Handled by the error below to keep one public validation message.
  }

  throw new Error('websiteURL must be a valid http or https URL');
}

/**
 * Base captcha recognition request
 */
export abstract class CaptchaRequestBase {
  /**
   * Gets recognition task type
   */
  public type: TaskType;

  /**
   * Set true if the site only accepts a portion of the tokens from CapMonster Cloud.
   * {@link https://zennolab.atlassian.net/wiki/spaces/APIS/pages/1832714243/What+if+the+site+only+accepts+a+portion+of+the+tokens+from+CapMonster+Cloud}
   */
  public nocache?: boolean;

  constructor({ type, nocache }: CaptchaRequestBaseIn) {
    this.type = type;
    this.nocache = nocache;
  }

  protected validateWebsiteURL(websiteURL: string): string {
    return validateWebsiteURL(websiteURL);
  }
}
