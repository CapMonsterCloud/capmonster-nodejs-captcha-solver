/**
 * Turnstile recognition response
 */
export type TurnstileResponse = {
  /**
   * Token for Turnstile and Cloudflare Challenge (token).
   */
  token?: string;
  /**
   * Cookie for Cloudflare Challenge (cf_clearance) and Waiting Room.
   */
  cf_clearance?: string;
  userAgent?: string;
};
