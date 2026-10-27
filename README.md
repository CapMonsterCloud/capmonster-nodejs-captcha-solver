# CapMonster Cloud Node.js SDK: TypeScript CAPTCHA Solver, Captcha Bypass & Anti-Bot API Client

> **🔄 Migrating from 2Captcha or Capsolver?** CapMonster Cloud is a fast, cost-effective **2captcha alternative** and **capsolver alternative** for Node.js and TypeScript: reCAPTCHA v3 from **$0.90 per 1,000 solves**, which is **up to 38% cheaper than 2Captcha** and **10% cheaper than Capsolver**, with an API response time of **≤ 2 s**. Already have software built for 2Captcha? CapMonster Cloud [supports the 2Captcha API format](https://docs.capmonster.cloud/docs/external-services/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme). Moving your Node.js code takes just a few lines: see the **Migration examples** below. Full comparison and disclaimer are in the comparison section below.

<p align="center">
  <a href="https://capmonster.cloud/en/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme">
    <img src="https://img.shields.io/badge/CapMonster%20Cloud-Node.js%20Captcha%20Solver-00B2FF?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="CapMonster Cloud Node.js SDK" height="40">
  </a>
</p>

<p align="center">
  <strong>Official Node.js and TypeScript SDK for automated CAPTCHA solving in web scraping, browser automation, and testing workflows.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client"><img src="https://img.shields.io/npm/v/@zennolab_com/capmonstercloud-client.svg?style=flat-square&color=blue" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client"><img src="https://img.shields.io/npm/dm/@zennolab_com/capmonstercloud-client.svg?style=flat-square&color=green" alt="npm downloads"></a>
  <a href="https://github.com/CapMonsterCloud/capmonster-nodejs-captcha-solver/stargazers"><img src="https://img.shields.io/github/stars/CapMonsterCloud/capmonster-nodejs-captcha-solver?style=flat-square&color=yellow" alt="GitHub Stars"></a>
  <a href="https://github.com/CapMonsterCloud/capmonster-nodejs-captcha-solver/network/members"><img src="https://img.shields.io/github/forks/CapMonsterCloud/capmonster-nodejs-captcha-solver?style=flat-square" alt="GitHub Forks"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-orange.svg?style=flat-square" alt="License: MIT"></a>
</p>

---

Official JavaScript and TypeScript client library for [CapMonster Cloud](https://capmonster.cloud/en/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme). Add automated CAPTCHA-solving tasks to **Node.js, TypeScript, Puppeteer, Playwright, Cypress, and HTTP-based** workflows. As the official CapMonster SDK for Node.js, it is a cost-effective 2captcha alternative and capsolver alternative.

Use the SDK for captcha bypass with supported CAPTCHA and anti-bot task types, including **reCAPTCHA v2/v3/Enterprise, Cloudflare Turnstile, GeeTest, DataDome, Amazon WAF, Imperva, and image-to-text tasks**.

**[👉 Get your Free API Key & Free Trial Balance on CapMonster Cloud](https://dash.capmonster.cloud/Account/SignUp?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)**

---

## ⚡ Highlights

- ⚡ **Node.js & TypeScript:** Typed request models for supported task types.
- 🧩 **Modern CAPTCHA coverage:** Work with reCAPTCHA, Turnstile, GeeTest, Amazon WAF, DataDome, Imperva, and more.
- 🌐 **Automation-ready:** Use with Playwright, Puppeteer, Cypress, scraping tools, and custom HTTP clients.
- 🛠️ **Dedicated or custom payloads:** Use request classes or `CommonCaptcha` to submit a full task payload.
- 📖 **Official docs:** Current task parameters and API methods are maintained in CapMonster Cloud documentation.
- 📉 **Cheaper than alternatives:** reCAPTCHA v3 from $0.90 per 1,000 solves, versus $1.45 at 2Captcha and $1.00 at Capsolver.
- 🔄 **Easy migration:** replace your 2Captcha or Capsolver solver call and keep the rest of your scraper or bot unchanged.

---

## 📊 CapMonster Cloud vs 2Captcha vs Capsolver

Looking for a 2captcha alternative or a capsolver alternative for Node.js web scraping and automation? Compare price, speed and success rate.

### reCAPTCHA v3

| Parameter | CapMonster Cloud | 2Captcha | CapSolver | DeathByCaptcha |
| :--- | :---: | :---: | :---: | :---: |
| Price per 1,000 solves (from) | **$0.90** | $1.45 | $1.00 | $2.89 |
| API response time | **≤ 2 s** | ≤ 2 s | < 3 s | ≤ 3 s |
| Solving success rate | **up to 99%** | ~77–92% | ~95–98% | ~64–90% |

*Disclaimer: 2Captcha, CapSolver, and DeathByCaptcha are trademarks of their respective owners. CapMonster Cloud is not affiliated with these entities. Performance metrics and pricing comparisons are based on publicly available data and internal benchmarking conducted on 27.09.2026.*

### Cloudflare Turnstile

| Parameter | CapMonster Cloud | 2Captcha | Anti-Captcha | DeathByCaptcha |
| :--- | :---: | :---: | :---: | :---: |
| Price per 1,000 solves (from) | **$1.30** | $1.45 | $2.00 | $2.89 |
| Time to solve | **6.24 s\*** | 16.9 s | 20.33 s | ~13 s |
| Solving success rate | **99%\*** | 96% | 96% | 96% |

*Disclaimer: 2Captcha, Anti-Captcha, and DeathByCaptcha are trademarks of their respective owners. CapMonster Cloud is not affiliated with these entities. Performance metrics and pricing comparisons are based on publicly available data and internal benchmarking as of 12.10.2026.*

**What this means in practice:**

- **reCAPTCHA v3:** $0.90 versus $1.45 at 2Captcha is up to 38% cheaper, and $0.90 versus $1.00 at Capsolver is 10% cheaper.
- **Cloudflare Turnstile:** $1.30 versus $1.45 at 2Captcha is 10% cheaper, and a solving time of 6.24 s versus 16.9 s is more than 60% faster.

---

## 📦 Installation

Install the package from npm:

```bash
npm install @zennolab_com/capmonstercloud-client
```

The package published on npm already includes the compiled files and is ready to use after installation.

### Build from this repository

Git does not contain the compiled `dist` output. The examples below import `@zennolab_com/capmonstercloud-client`, and inside this repository that name points at `dist`. After cloning, install dependencies and build before running an example or a test:

```bash
npm install
npm run build
```

Run `npm run build` again after changing the source.

---

## 🚀 Quick Start: Solve and Bypass Captchas in Node.js

Create an API key in the [CapMonster Cloud Dashboard](https://dash.capmonster.cloud/Account/SignUp?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme), install the package, then use one of the examples below.

### 1. Solve reCAPTCHA v2 (TypeScript)

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
    websiteURL: '[https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high](https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high)',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
  }),
);

console.log(result.solution);
```

### 2. Solve Cloudflare Turnstile (TypeScript)

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
    websiteURL: '[https://tsinvisble.zlsupport.com](https://tsinvisble.zlsupport.com)',
    websiteKey: '0x4AAAAAAABUY0VLtOUMAHxE',
  }),
);

console.log(result.solution);
```

### 3. CommonJS Example and Balance Check

```javascript
const {
  CapMonsterCloudClientFactory,
  ClientOptions,
  RecaptchaV2Request,
} = require('@zennolab_com/capmonstercloud-client');

async function run() {
  const client = CapMonsterCloudClientFactory.Create(
    new ClientOptions({ clientKey: 'YOUR_API_KEY' }),
  );

  console.log('Balance:', await client.getBalance());

  const task = new RecaptchaV2Request({
    websiteURL: '[https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high](https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high)',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
  });

  const result = await client.Solve(task);
  console.log(result.solution);
}

run().catch(console.error);
```

### 4. Submit a Custom Payload with `CommonCaptcha`

Use `CommonCaptcha` when you need to provide a complete task payload directly.

```javascript
const {
  CapMonsterCloudClientFactory,
  ClientOptions,
  CommonCaptcha,
} = require('@zennolab_com/capmonstercloud-client');

async function run() {
  const client = CapMonsterCloudClientFactory.Create(
    new ClientOptions({ clientKey: 'YOUR_API_KEY' }),
  );

  const task = new CommonCaptcha({
    task: {
      type: 'RecaptchaV2Task',
      websiteURL: '[https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high](https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high)',
      websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
    },
  });

  console.log(await client.Solve(task));
}

run().catch(console.error);
```

---

## 🔄 Migrating from 2Captcha or Capsolver

Already use 2Captcha or Capsolver in your Node.js scraper or bot? Replace only the solver call and keep the rest of your code unchanged. CapMonster Cloud follows the same flow: send the website URL and sitekey, receive the token.

### Migration from 2Captcha (@2captcha/captcha-solver)

```javascript
// Before: 2Captcha
const TwoCaptcha = require('@2captcha/captcha-solver');
const solver = new TwoCaptcha.Solver('YOUR_2CAPTCHA_API_KEY');

const res = await solver.recaptcha({
  pageurl: '[https://target-website.com/page-with-recaptcha](https://target-website.com/page-with-recaptcha)',
  googlekey: 'YOUR_SITE_KEY',
});
const token = res.data;
```

### After: CapMonster Cloud

```ts
// After: CapMonster Cloud
import {
  CapMonsterCloudClientFactory,
  ClientOptions,
  RecaptchaV2Request,
} from '@zennolab_com/capmonstercloud-client';

const client = CapMonsterCloudClientFactory.Create(
  new ClientOptions({ clientKey: 'YOUR_CAPMONSTER_API_KEY' }),
);

const result = await client.Solve(
  new RecaptchaV2Request({
    websiteURL: '[https://target-website.com/page-with-recaptcha](https://target-website.com/page-with-recaptcha)',
    websiteKey: 'YOUR_SITE_KEY',
  }),
);

const token = result.solution?.gRecaptchaResponse;
```

Only the client, the API key and the request class change: the token is used exactly as before, so the rest of your scraper stays the same.

### Migrating from Capsolver

CapMonster Cloud uses the same `createTask` / `getTaskResult` flow, so if you call the Capsolver HTTP API directly from Node.js, you can switch to the CapMonster Cloud SDK above or follow the [API Methods Reference](https://docs.capmonster.cloud/docs/methods/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme).

### Keep existing 2Captcha-based software

Software that already speaks the 2Captcha API can work with CapMonster Cloud without code changes. See the [guide for connecting other services' APIs](https://docs.capmonster.cloud/docs/external-services/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme).

---

## 🛡️ Supported Task Families: Bypass reCAPTCHA, Cloudflare Turnstile, DataDome, GeeTest & More

Use this Node.js captcha solver for captcha bypass in web scraping and automation: reCAPTCHA bypass (v2, v2 Enterprise, v3), Cloudflare Turnstile solver, DataDome solver, GeeTest solver, Amazon WAF bypass, Imperva and image-to-text recognition.

Refer to the official [Supported CAPTCHA Types](https://docs.capmonster.cloud/docs/captchas/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme) for current task parameters, response formats, and examples.

| Task family | Example request classes in this SDK |
| :--- | :--- |
| **reCAPTCHA** | `RecaptchaV2Request`, `RecaptchaV2EnterpriseRequest`, `RecaptchaV3ProxylessRequest` |
| **Cloudflare Turnstile** | `TurnstileRequest` |
| **GeeTest** | `GeeTestRequest` |
| **Amazon WAF** | `AmazonRequest`, `AmazonProxylessRequest` |
| **Image-to-Text** | `ImageToTextRequest` |
| **Complex image tasks** | `ComplexImageRecaptchaRequest`, `ComplexImageTaskRecognitionRequest` |
| **Custom anti-bot tasks** | `DataDomeRequest`, `ImpervaRequest`, `TenDIRequest`, `ProsopoRequest`, `BasiliskRequest` |

---

## 🌐 Browser Use

The package can also be bundled for browser use. Browser implementations use native [`fetch`](https://caniuse.com/fetch), so use a compatible module bundler such as [Webpack](https://webpack.js.org/) when integrating it into a frontend build.

> Keep API keys private. Do not expose production CapMonster Cloud API keys in public frontend code.

---

## 🐛 Debugging

Set the `DEBUG` environment variable to enable the package logger:

```bash
DEBUG=cmc-* node app.js
```

---

## 🛠️ How It Works

```text
[ Node.js Script / Browser Automation ]
                    │
                    ▼
      [ Create task request with target data ]
                    │
                    ▼
[ CapMonster Cloud Node.js SDK ] ──► createTask API request
                    │
                    ▼
       [ SDK waits for the task result ]
                    │
                    ▼
[ Receive token / solution ] ──► Use it in your workflow
```

---

## ⚙️ Best Practices

- **Use the right task model:** Choose a request type that matches the target protection; validate all required fields against the official documentation.
- **Keep session context consistent:** For tasks that use a proxy, align the proxy settings with the associated browser or scraping session.
- **Use tokens promptly:** CAPTCHA tokens can expire, so submit or inject the returned solution immediately.
- **Monitor balance and API responses:** See the API methods reference for `createTask`, `getTaskResult`, and `getBalance`.

---

## ❓ FAQ

**Is CapMonster Cloud a 2Captcha alternative for Node.js?**
Yes. It is a captcha solving service with an official Node.js and TypeScript SDK. For reCAPTCHA v3 it starts at $0.90 per 1,000 solves versus $1.45 at 2Captcha, which is up to 38% cheaper. For Cloudflare Turnstile it starts at $1.30 versus $1.45, which is 10% cheaper.

**Is CapMonster Cloud a Capsolver alternative for Node.js?**
Yes. For reCAPTCHA v3 it is 10% cheaper than Capsolver ($0.90 versus $1.00 per 1,000 solves) and shows an API response time of ≤ 2 s versus < 3 s. See the comparison table above and its disclaimer.

**How do I migrate from @2captcha/captcha-solver to CapMonster Cloud?**
Create a client with `CapMonsterCloudClientFactory.Create`, build the matching request class and call `client.Solve()`. See the migration examples above. Software that already supports the 2Captcha API can also be connected through the [CapMonster Cloud guide](https://docs.capmonster.cloud/docs/external-services/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme).

**How do I bypass reCAPTCHA v2 in Node.js?**
Create a client with your API key, pass a `RecaptchaV2Request` with the page URL and sitekey to `client.Solve()` and use `result.solution.gRecaptchaResponse` on the page. See the [reCAPTCHA v2 documentation](https://docs.capmonster.cloud/docs/captchas/no-captcha-task/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme).

**How do I bypass Cloudflare Turnstile in Node.js?**
Use `TurnstileRequest` with the page URL and sitekey. According to the [Turnstile documentation](https://docs.capmonster.cloud/docs/captchas/turnstile-task/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme), all Turnstile subtypes are supported automatically: manual, non-interactive and invisible.

**How do I get an API key?**
Register on CapMonster Cloud, top up your balance and copy your API key. The [Getting Started Guide](https://docs.capmonster.cloud/docs/getting-start/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme) describes each step.

---

## 📚 Documentation & Support

- 📖 [Getting Started](https://docs.capmonster.cloud/docs/getting-start/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)
- 🧩 [Supported CAPTCHA Types](https://docs.capmonster.cloud/docs/captchas/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)
- ⚙️ [API Methods: createTask, getTaskResult, getBalance](https://docs.capmonster.cloud/docs/methods/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)
- 🌐 [Browser Extension Guides](https://docs.capmonster.cloud/docs/extension/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)
- 💬 [CapMonster Cloud](https://capmonster.cloud/en/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)

## Other official SDKs

- [Python](https://github.com/CapMonsterCloud/capmonster-python-captcha-solver)
- [.NET](https://github.com/CapMonsterCloud/capmonster-dotnet-captcha-solver)
- [Go](https://github.com/CapMonsterCloud/capmonster-go-captcha-solver)
- [PHP](https://github.com/CapMonsterCloud/capmonster-php-captcha-solver)
- [Rust](https://github.com/CapMonsterCloud/capmonster-rust-captcha-solver)
- [n8n](https://github.com/CapMonsterCloud/capmonster-n8n-captcha-solver)
- [MCP server](https://github.com/CapMonsterCloud/capmonster-mcp-captcha-solver)
- [API Docs](https://github.com/CapMonsterCloud/capmonster-captcha-solver-docs)

---

## 📄 License

[MIT](./LICENSE) © [CapMonster Cloud](https://capmonster.cloud/en/?utm_source=github&utm_medium=referral&utm_campaign=nodejs_repo_readme)

## Maintainer verification before QA

Run `npm run self-verify` to build and check README examples, CommonJS/ESM,
public type contracts and SDK requests against a local mock API. Read
[the self-verification guide](tools/self-verify/README.md) for configuration,
the AI-agent review prompt, coverage limits and report interpretation.
The generated report is evidence for the agent's documentation review;
a passing mock run alone does not establish QA readiness.
