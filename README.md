# @axhxrx/date

A minimal utility library for formatting dates. Example:

```ts
const backThen = dateToFormat("YYYY-MM-DD", new Date("1975-01-01T02:00:00Z"));
// '1975-01-01'

const rightNow = dateToFormat("YYYY-MM-DD");
// same thing, only later in time...
```

## Happenings

🤖 2026-01-31: Migrated from the old experimental repo into new standalone repo

🤖 2026-01-17: repo initialized by Bottie McBotface bot@axhxrx.com

## 🧨 boom

NOTE: This lib was originally part of a proof-of-concept test of using JSR.io packages in a monorepo/megarepo context.

That original experimental repo is here: <https://github.com/axhxrx/axhxrx-megarepo-jsr-deno-bun-node-hootenanny>

## License

MIT (or [WTFPL](http://www.wtfpl.net/txt/copying/) if you prefer, since that was license of the original project)
