const PROXY = {
  proxyType: 'http',
  proxyAddress: '8.8.8.8',
  proxyPort: 8080,
  proxyLogin: 'proxyLoginHere',
  proxyPassword: 'proxyPasswordHere',
};

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/**
 * Builds request fixtures from a loaded SDK namespace (CJS or ESM).
 */
function buildRequestFixtures(sdk) {
  return [
    {
      name: 'RecaptchaV2Request',
      docs: 'https://docs.capmonster.cloud/docs/captchas/recaptcha-v2/',
      create: () =>
        new sdk.RecaptchaV2Request({
          websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
          websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
        }),
      expected: { type: 'NoCaptchaTask' },
    },
    {
      name: 'RecaptchaV2EnterpriseRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/recaptcha-v2-enterprise/',
      create: () =>
        new sdk.RecaptchaV2EnterpriseRequest({
          websiteURL: 'https://example.com',
          websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
        }),
      expected: { type: 'RecaptchaV2EnterpriseTask' },
    },
    {
      name: 'RecaptchaV3ProxylessRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/recaptcha-v3/',
      create: () =>
        new sdk.RecaptchaV3ProxylessRequest({
          websiteURL: 'https://example.com',
          websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
        }),
      expected: { type: 'RecaptchaV3TaskProxyless' },
    },
    {
      name: 'RecaptchaV3EnterpriseRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/recaptcha-v3-enterprise/',
      create: () =>
        new sdk.RecaptchaV3EnterpriseRequest({
          websiteURL: 'https://example.com',
          websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
        }),
      expected: { type: 'RecaptchaV3EnterpriseTask' },
    },
    {
      name: 'TurnstileRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/turnstile-task/',
      create: () =>
        new sdk.TurnstileRequest({
          websiteURL: 'https://tsinvisble.zlsupport.com',
          websiteKey: '0x4AAAAAAABUY0VLtOUMAHxE',
        }),
      expected: { type: 'TurnstileTask' },
    },
    {
      name: 'HCaptchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/hcaptcha/',
      create: () =>
        new sdk.HCaptchaRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
        }),
      expected: { type: 'HCaptchaTask' },
    },
    {
      name: 'FunCaptchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/funcaptcha/',
      create: () =>
        new sdk.FunCaptchaRequest({
          websiteURL: 'https://example.com',
          websitePublicKey: '69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC',
          proxy: PROXY,
        }),
      expected: { type: 'FunCaptchaTask' },
    },
    {
      name: 'GeeTestRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/geetest/',
      create: () =>
        new sdk.GeeTestRequest({
          websiteURL: 'https://example.com',
          gt: '81dc9bdb52d04dc20036dbd8313ed055',
          version: 3,
        }),
      expected: { type: 'GeeTestTask' },
    },
    {
      name: 'ImageToTextRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/image-to-text/',
      create: () => new sdk.ImageToTextRequest({ body: 'base64image' }),
      expected: { type: 'ImageToTextTask' },
    },
    {
      name: 'AmazonRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/amazon-task/',
      create: () =>
        new sdk.AmazonRequest({
          websiteURL: 'https://site.com',
          websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
          challengeScript: 'https://example.com/challenge.js',
          captchaScript: 'https://example.com/captcha.js',
          context: 'context',
          iv: 'iv',
        }),
      expected: { type: 'AmazonTask' },
    },
    {
      name: 'BinanceRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/binance/',
      create: () =>
        new sdk.BinanceRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'bizId',
          validateId: 'validateId',
        }),
      expected: { type: 'BinanceTask' },
    },
    {
      name: 'ProsopoRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/prosopo/',
      create: () =>
        new sdk.ProsopoRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
        }),
      expected: { type: 'ProsopoTask' },
    },
    {
      name: 'YidunRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/yidun/',
      create: () =>
        new sdk.YidunRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
        }),
      expected: { type: 'YidunTask' },
    },
    {
      name: 'MTCaptchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/mtcaptcha/',
      create: () =>
        new sdk.MTCaptchaRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
        }),
      expected: { type: 'MTCaptchaTask' },
    },
    {
      name: 'DataDomeRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/datadome/',
      create: () =>
        new sdk.DataDomeRequest({
          websiteURL: 'https://example.com',
          metadata: { captchaUrl: 'https://geo.captcha-delivery.com/captcha/?initialCid=1', datadomeCookie: 'datadome=1' },
          proxy: PROXY,
        }),
      expected: { type: 'CustomTask', class: 'DataDome' },
    },
    {
      name: 'ImpervaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/incapsula/',
      create: () =>
        new sdk.ImpervaRequest({
          websiteURL: 'https://example.com',
          metadata: { incapsulaScriptUrl: '_Incapsula_Resource?SWJIYLWA=1', incapsulaCookies: 'incap_ses=1' },
          proxy: PROXY,
        }),
      expected: { type: 'CustomTask', class: 'Imperva' },
    },
    {
      name: 'TenDIRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/tendi/',
      create: () =>
        new sdk.TenDIRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
        }),
      expected: { type: 'CustomTask', class: 'TenDI' },
    },
    {
      name: 'BasiliskRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/Basilisk-task/',
      create: () =>
        new sdk.BasiliskRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
        }),
      expected: { type: 'CustomTask', class: 'Basilisk' },
    },
    {
      name: 'TemuRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/temu/',
      create: () =>
        new sdk.TemuRequest({
          websiteURL: 'https://example.com',
          metadata: { cookie: 'region=1; anti_content=abc' },
        }),
      expected: { type: 'CustomTask', class: 'Temu' },
    },
    {
      name: 'CastleRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/castle/',
      create: () =>
        new sdk.CastleRequest({
          websiteURL: 'https://example.com/castle',
          websiteKey: 'pk_test_123',
          metadata: {
            wUrl: 'https://s.rsg.sc/auth/js/20251234bgef/build/cw.js',
            swUrl: 'https://s.rsg.sc/auth/js/20251213bgef/build/csw.js',
          },
        }),
      expected: { type: 'CustomTask', class: 'Castle' },
    },
    {
      name: 'AltchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/altcha-task/',
      create: () =>
        new sdk.AltchaRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'websiteKey',
          metadata: { challenge: 'c', iterations: '1', salt: 's', signature: 'sig' },
        }),
      expected: { type: 'CustomTask', class: 'altcha' },
    },
    {
      name: 'FriendlyRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/friendly-captcha/',
      create: () =>
        new sdk.FriendlyRequest({
          websiteURL: 'https://example.com',
          websiteKey: 'FFMGEMAD2K3JJ35P',
          userAgent: UA,
          metadata: { apiGetLib: 'https://cdn.jsdelivr.net/npm/friendly-challenge@0.9.15/widget.module.min.js' },
        }),
      expected: { type: 'CustomTask', class: 'friendly' },
    },
    {
      name: 'TSPDRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/tspd/',
      create: () =>
        new sdk.TSPDRequest({
          websiteURL: 'https://example.com/tspd',
          userAgent: UA,
          metadata: { tspdCookie: 'TS386a400d029=example', htmlPageBase64: 'html-base64' },
          proxy: PROXY,
        }),
      expected: { type: 'CustomTask', class: 'tspd' },
    },
    {
      name: 'HuntRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/hunt-task/',
      create: () =>
        new sdk.HuntRequest({
          websiteURL: 'https://example.com/page-with-hunt',
          userAgent: UA,
          metadata: {
            apiGetLib: 'https://example.com/hd-api/external/apps/hash/api.js',
            widgetUrl: 'https://captcha.example.com/widget?hash=widget-hash',
          },
          proxy: PROXY,
        }),
      expected: { type: 'CustomTask', class: 'HUNT' },
      extra: ['metadata.widgetUrl'],
    },
    {
      name: 'AlibabaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/alibaba-task/',
      create: () =>
        new sdk.AlibabaRequest({
          websiteURL: 'https://www.example.com',
          userAgent: UA,
          metadata: {
            punishUrl: 'https://example.com:443/_____tmd_____/punish?x5secdata=x&x5step=2&action=captcha&pureCaptcha=',
            cookieRequired: true,
          },
        }),
      expected: { type: 'CustomTask', class: 'alibaba' },
      extra: ['metadata.punishUrl', 'metadata.cookieRequired'],
    },
    {
      name: 'ComplexImageRecaptchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/complex-image/',
      create: () =>
        new sdk.ComplexImageRecaptchaRequest({
          imageUrls: ['https://example.com/image.png'],
          metaData: { Grid: '3x3', Task: 'Click on traffic lights' },
        }),
      expected: { type: 'ComplexImageTask', class: 'recaptcha' },
    },
    {
      name: 'ComplexImageHCaptchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/complex-image/',
      create: () =>
        new sdk.ComplexImageHCaptchaRequest({
          imageUrls: ['https://example.com/image.png'],
          metaData: { Grid: '3x3', Task: 'Please click each image containing a mountain' },
        }),
      expected: { type: 'ComplexImageTask', class: 'hcaptcha' },
    },
    {
      name: 'ComplexImageFunCaptchaRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/complex-image/',
      create: () =>
        new sdk.ComplexImageFunCaptchaRequest({
          imageUrls: ['https://example.com/image.png'],
          metaData: { Task: 'Pick the duck' },
        }),
      expected: { type: 'ComplexImageTask', class: 'funcaptcha' },
    },
    {
      name: 'ComplexImageTaskRecognitionRequest',
      docs: 'https://docs.capmonster.cloud/docs/captchas/complex-image-recognition/',
      create: () =>
        new sdk.ComplexImageTaskRecognitionRequest({
          imagesBase64: ['/9xwee/'],
          metaData: { Task: 'oocl_rotate' },
        }),
      expected: { type: 'ComplexImageTask', class: 'recognition' },
    },
    {
      name: 'CommonCaptcha',
      docs: 'https://docs.capmonster.cloud/docs/methods/',
      create: () =>
        new sdk.CommonCaptcha({
          task: {
            type: 'RecaptchaV2Task',
            websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
            websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
          },
        }),
      expected: { type: 'RecaptchaV2Task' },
    },
  ];
}

module.exports = { PROXY, UA, buildRequestFixtures };
