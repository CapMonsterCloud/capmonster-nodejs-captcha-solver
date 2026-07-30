import { validateWebsiteURL } from './CaptchaRequestBase';

export type CommonCaptchaTask = {
  type: string;
  websiteURL?: string;
  nocache?: boolean;
  [key: string]: unknown;
};

export type CommonCaptchaRequestIn = {
  task: CommonCaptchaTask;
};

/**
 * Common captcha recognition request for passing a full task payload.
 */
export class CommonCaptchaRequest {
  public type: string;

  public websiteURL?: string;

  public nocache?: boolean;

  [key: string]: unknown;

  constructor({ task }: CommonCaptchaRequestIn) {
    if (task.type.trim().length === 0) {
      throw new Error('task.type must be a non-empty string');
    }

    if (task.websiteURL !== undefined) {
      validateWebsiteURL(task.websiteURL);
    }

    Object.assign(this, task);
    this.type = task.type;
  }
}

export class CommonCaptcha extends CommonCaptchaRequest {}
