# Node.js & TypeScript CAPTCHA Solver by CapMonster Cloud

[![npm version](https://img.shields.io/npm/v/@zennolab_com/capmonstercloud-client.svg)](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The official **Node.js and TypeScript SDK** for CapMonster Cloud — the fastest AI-powered CAPTCHA solver and anti-bot bypass API. 

Easily integrate automated CAPTCHA solving capabilities into your JavaScript/TypeScript web scraping, automation, and testing scripts. Fully compatible with **Puppeteer**, **Playwright**, **Cypress**, and raw HTTP requests.

**[👉 Get your Free API Key and Start Bypassing CAPTCHAs](https://dash.capmonster.cloud/Account/SignUp?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)** 

---

## 📦 Installation

Install the client library via [NPM](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)

```bash
npm i @zennolab_com/capmonstercloud-client
```

## 🚀 Quick Start (TypeScript)

1. Get your API key in the [CapMonster Cloud Dashboard](https://dash.capmonster.cloud/Account/SignUp?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)
2. Install the package.
3. Copy the snippet below, replace `YOUR_API_KEY`, and run your scraper.

### Bypass reCAPTCHA v2

```ts
import {
  CapMonsterCloudClientFactory,
  ClientOptions,
  RecaptchaV2Request,
} from '@zennolab_com/capmonstercloud-client';

const client = CapMonsterCloudClientFactory.Create(
  new ClientOptions({ clientKey: 'YOUR_API_KEY' }),
);

const result = await client.Solve(
  new RecaptchaV2Request({
    websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
  }),
);

console.log(result.solution); // { gRecaptchaResponse: '...' }
```

### Bypass Cloudflare Turnstile

```ts
import {
  CapMonsterCloudClientFactory,
  ClientOptions,
  TurnstileRequest,
} from '@zennolab_com/capmonstercloud-client';

const client = CapMonsterCloudClientFactory.Create(
  new ClientOptions({ clientKey: 'YOUR_API_KEY' }),
);

const result = await client.Solve(
  new TurnstileRequest({
    websiteURL: 'https://tsinvisble.zlsupport.com',
    websiteKey: '0x4AAAAAAABUY0VLtOUMAHxE',
  }),
);

console.log(result.solution); // { token: '...' }
```

## 💻 Usage with Node.js (CommonJS)

If you are using standard CommonJS (`require`) without TypeScript:

```javascript
const { CapMonsterCloudClientFactory, ClientOptions, RecaptchaV2Request } = require('@zennolab_com/capmonstercloud-client');

async function run() {
  const cmcClient = CapMonsterCloudClientFactory.Create(new ClientOptions({ clientKey: '<your capmonster.cloud API key>' }));
  
  // Check your balance
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
    console.error('Error solving CAPTCHA:', err);
    process.exit(1);
  });
```

## 🛠 Usage with CommonCaptcha (Custom Payload)

Use `CommonCaptcha` when you want to pass a full task payload directly (for example, when a new CAPTCHA type is released and not yet covered by a dedicated request class).

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

## 🌐 Browser Usage (Frontend)

Browser implementations use native [fetch](https://caniuse.com/fetch) instead of Node's [http(s)](https://nodejs.org/api/http.html). For browser usage, you need a module bundler like [Webpack](https://webpack.js.org/).

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
    // check actual user agent here: https://capmonster.cloud/api/useragent/actual
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36',
  });

  console.log(await cmcClient.Solve(recaptchaV2Request));
});
```

## 🐛 Debugging

For debugging, set the `DEBUG` environmental variable to one of the [possible values](/src/Logger.ts) (see the [debug module](https://www.npmjs.com/package/debug)).

```bash
DEBUG=cmc-* node app.js
```

## ⚡ Supported CAPTCHA Recognition Requests

### Classic captcha tasks

- [AmazonRequest](https://zenno.link/doc-amazon-waf)
- [BinanceRequest](https://zenno.link/doc-binance)
- [FunCaptchaRequest](https://zenno.link/doc-funcaptcha)
- [GeeTestRequest](https://zenno.link/doc-geetest)
- [ImageToTextRequest](https://zenno.link/doc-imagetotext)
- [MTCaptchaRequest](https://zenno.link/doc-mtcaptcha)
- [ProsopoRequest](https://zenno.link/doc-prosopo)
- [RecaptchaV2Request](https://zenno.link/doc-recaptcha2)
- [RecaptchaV2EnterpriseRequest](https://zenno.link/doc-recaptcha2e)
- [RecaptchaV3ProxylessRequest](https://zenno.link/doc-recaptcha3)
- [TurnstileRequest - Cloudflare Turnstile](https://zenno.link/doc-cloudflare-turnstile)
- [TurnstileRequest - Cloudflare Challenge](https://zenno.link/doc-cloudflare-challenge)
- [TurnstileRequest - Cloudflare Waiting Room](https://zenno.link/doc-cloudflare-waitingroom)
- [YidunRequest](https://zenno.link/doc-yidun)

### Custom tasks (anti-bot / WAF / custom challenge systems)

- [AlibabaRequest](https://zenno.link/doc-customtask-alibaba)
- [AltchaRequest](https://zenno.link/doc-customtask-altcha)
- [BasiliskRequest](https://zenno.link/doc-customtask-basilisk)
- [DataDomeRequest](https://zenno.link/doc-customtask-datadome)
- [FriendlyRequest](https://zenno.link/doc-customtask-friendly)
- [HuntRequest](https://zenno.link/doc-customtask-hunt)
- [ImpervaRequest](https://zenno.link/doc-customtask-imperva)
- [TenDIRequest](https://zenno.link/doc-customtask-tendi)
- [TSPDRequest](https://zenno.link/doc-customtask-tspd)

### Complex image tasks (grid / dynamic image selection tasks)

- [ComplexImageRecaptchaRequest](https://zenno.link/doc-complextask-rc)
- [ComplexImageTaskRecognitionRequest](https://zenno.link/doc-complextask-recognition)

---
**[Official Documentation](https://docs.capmonster.cloud/docs/getting-start/)** | **[Register Account](https://dash.capmonster.cloud/Account/SignUp?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)**
