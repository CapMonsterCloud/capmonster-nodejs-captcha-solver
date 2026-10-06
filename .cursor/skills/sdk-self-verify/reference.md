# SDK self-verify reference

Official docs to fetch on every run (do not treat this file as a substitute):

- Captcha types index: https://docs.capmonster.cloud/docs/captchas/
- API methods: https://docs.capmonster.cloud/docs/methods/
- Getting started: https://docs.capmonster.cloud/docs/getting-start/

Known SDK class → docs URL map: `tools/self-verify/docs-catalog.json`.

## Fields that recently lagged the API

Hunt (`CustomTask` / `class: "HUNT"`), https://docs.capmonster.cloud/docs/captchas/hunt-task/

| Field | Required | Notes |
| --- | --- | --- |
| websiteURL | yes | Page URL |
| metadata.apiGetLib | yes | Full `api.js` URL |
| metadata.data | no | `meta.token`. Do not send with `widgetUrl` |
| metadata.widgetUrl | no | Full widget URL. Do not send with `data` |
| userAgent | no | Current Windows UA |
| proxy | yes | Own proxies required |

Alibaba (`CustomTask` / `class: "alibaba"`), https://docs.capmonster.cloud/docs/captchas/alibaba-task/

| Field | Required | Notes |
| --- | --- | --- |
| websiteURL | yes | Page URL |
| metadata.sceneId | for standard flow | Not required for punish-only |
| metadata.prefix | for standard flow | Not required for punish-only |
| metadata.punishUrl | no | Full `/punish` URL with query |
| metadata.cookieRequired | no | Adds `solution.domains` cookies |
| metadata.userId, userUserId, verifyType, region, UserCertifyId, apiGetLib | no | |
| userAgent | no | |
| proxy | no | |

## Mechanical coverage

| Check | Command | Kind |
| --- | --- | --- |
| Build | `npm run build` | executed |
| README examples | `npm run test-readme` | executed (mock) or skipped (live Solve) |
| CJS + ESM matrix | `npm run test-modules` | executed |
| Unit tests | `npm run test-unit` | executed |
| Integration tests | `npm run test-integr` | executed |
| Docs field parity | fetch docs + read `src/Requests` | analysis |

## ESM smoke

```bash
node --input-type=module -e "import('./dist/esm/index.js').then((m) => { const c = m.CapMonsterCloudClientFactory.Create(new m.ClientOptions({ clientKey: 'x' })); console.log('ok', typeof c.Solve); })"
```

A `ReferenceError: module is not defined` here is a ship-blocking CJS leak in the ESM build.
