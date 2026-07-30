# Zennolab CapMonsterCloud JS Client

Official JS client library for [capmonster.cloud](https://capmonster.cloud/) captcha recognition service

## Installation

Via [NPM](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client):

    npm i @zennolab_com/capmonstercloud-client

## Usage with Node (with or without Typescript)

```javascript
const { CapMonsterCloudClientFactory, ClientOptions, RecaptchaV2Request } = require('@zennolab_com/capmonstercloud-client');

async function run() {
  const cmcClient = CapMonsterCloudClientFactory.Create(new ClientOptions({ clientKey: '<your capmonster.cloud API key>' }));
  console.log(await cmcClient.getBalance());

  const recaptchaV2Request = new RecaptchaV2Request({
    websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
  });

  console.log(await cmcClient.Solve(recaptchaV2Request));
}

run()
  .then(() => {
    console.log('DONE');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```

## Usage with CommonCaptcha

Use `CommonCaptcha` when you want to pass a full task payload directly, for example when a new captcha type is not yet covered by a dedicated request class.

```javascript
const { CapMonsterCloudClientFactory, ClientOptions, CommonCaptcha } = require('@zennolab_com/capmonstercloud-client');

async function run() {
  const cmcClient = CapMonsterCloudClientFactory.Create(new ClientOptions({ clientKey: '<your capmonster.cloud API key>' }));

  const commonCaptcha = new CommonCaptcha({
    task: {
      type: 'RecaptchaV2Task',
      websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
      websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
    },
  });

  console.log(await cmcClient.Solve(commonCaptcha));
}

run();
```

## Usage with Browser (with or without Typescript)

Browser implementation use [fetch](https://caniuse.com/fetch) instead of [http(s)](https://nodejs.org/api/http.html).
For browser usage you need some Module Bundler (e.g. [Webpack](https://webpack.js.org/)).

```javascript
import { CapMonsterCloudClientFactory, ClientOptions, RecaptchaV2Request } from '@zennolab_com/capmonstercloud-client';

document.addEventListener('DOMContentLoaded', async () => {
  const cmcClient = CapMonsterCloudClientFactory.Create(new ClientOptions({ clientKey: '<your capmonster.cloud API key>' }));
  console.log(await cmcClient.getBalance());

  const recaptchaV2Request = new RecaptchaV2Request({
    websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
    proxy: {
      proxyType: 'http',
      proxyAddress: '8.8.8.8',
      proxyPort: 8080,
      proxyLogin: 'proxyLoginHere',
      proxyPassword: 'proxyPasswordHere',
    },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.132 Safari/537.36',
  });

  console.log(await cmcClient.Solve(recaptchaV2Request));
});
```

## Debug

For debugging set `DEBUG` environmental variable to one of [possible values](/src/Logger.ts) (see [debug module](https://www.npmjs.com/package/debug))

```bash
DEBUG=cmc-* node app.js
```

## Supported captcha recognition requests:

- [AlibabaRequest](https://docs.capmonster.cloud/docs/captchas/alibaba-task/)
- [AltchaRequest](https://zenno.link/doc-altcha-en)
- [AmazonRequest](https://zenno.link/doc-amazon-en)
- [BasiliskRequest](https://zenno.link/doc-basilisk-en)
- [BinanceRequest](https://zenno.link/doc-binance-en)
- [CastleRequest](https://zenno.link/castle-en)
- [ComplexImageFunCaptchaRequest](https://zenno.link/doc-complextask-rc-en)
- [ComplexImageHCaptchaRequest](https://zenno.link/doc-complextask-hc-en)
- [ComplexImageRecaptchaRequest](https://zenno.link/doc-complextask-rc-en)
- [ComplexImageTaskRecognitionRequest](https://zenno.link/doc-complex-image-recognition)
- [DataDomeRequest](https://zenno.link/doc-datadome-en)
- [FriendlyRequest](https://docs.capmonster.cloud/docs/captchas/friendly-task/)
- [FunCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/funcaptcha-task/)
- [GeeTestRequest](https://zenno.link/doc-geetest-proxy-en)
- [HCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/)
- [HuntRequest](https://zenno.link/hunt-en)
- [ImageToTextRequest](https://zenno.link/doc-ImageToTextTask-en)
- [ImpervaRequest](https://docs.capmonster.cloud/docs/captchas/incapsula/)
- [MTCaptchaRequest](https://zenno.link/doc-mt-captcha-en)
- [ProsopoRequest](https://zenno.link/doc-prosopo-en)
- [RecaptchaV2EnterpriseRequest](https://zenno.link/doc-recaptcha2e-proxy-en)
- [RecaptchaV2Request](https://zenno.link/doc-recaptcha2-proxy-en)
- [RecaptchaV3EnterpriseRequest](https://zenno.link/doc-recaptcha3e-proxy-en)
- [RecaptchaV3ProxylessRequest](https://zenno.link/doc-recaptcha3-en)
- [TemuRequest](https://zenno.link/doc-temu-en)
- [TenDIRequest](https://zenno.link/doc-tendi-en)
- [TSPDRequest](https://zenno.link/tspd-en)
- [TurnstileRequest](https://zenno.link/doc-turnstile-proxy-en)
- [YidunRequest](https://zenno.link/doc-yidun-en)
