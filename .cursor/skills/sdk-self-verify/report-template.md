# SDK self-verify report template

Fill this after `npm run self-verify`. Keep executed results and analysis in separate sections.

```markdown
# CapMonster Node.js SDK self-verify

- Date:
- Git HEAD:
- Node:
- Command: `npm run self-verify`
- Mechanical JSON: `tools/self-verify/reports/latest.json`

## Verdict

PASS / FAIL — one paragraph. Do not send to QA on FAIL.

## Summary

| Area | Result | Kind |
| --- | --- | --- |
| Build | | executed |
| README examples | | executed / skipped |
| CommonJS | | executed |
| ES Modules | | executed |
| Unit tests | | executed |
| Integration tests | | executed |
| API docs comparison | | analysis |

## Executed results

For each failure:

- Check name
- Expected
- Actual
- Reproduction command
- Docs URL

## README examples

| Example | Module | Run | Expected | Actual | Kind |
| --- | --- | --- | --- | --- | --- |
| | CJS/ESM | command | | | executed/skipped |

## CommonJS and ES Modules

Cover request types, required/optional fields, requests, responses, errors. Note CJS vs ESM differences.

## API docs comparison (analysis)

| Docs task | Docs URL | SDK class | Gap |
| --- | --- | --- | --- |
| | | | missing field / stale field / none |

## Unverified scenarios

What was not run and why (no key, no proxy, live Solve disabled, missing sandbox, etc.).

## Documentation contradictions

Docs vs docs, or docs vs SDK where it is unclear which is right. Do not file these as SDK bugs without a source-of-truth decision.

## Attachments

- latest.json
- failing command output
```
