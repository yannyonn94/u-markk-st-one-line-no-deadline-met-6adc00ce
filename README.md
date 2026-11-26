# One Line, No Deadline Met

[![One Line, No Deadline Met](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![Rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/yannyonn94/u-markk-st-one-line-no-deadline-met-6adc00ce/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![Reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/yannyonn94/u-markk-st-one-line-no-deadline-met-6adc00ce/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

**Concept:** the excuse is an out-of-office reply — the worker was on annual leave *from the deadline itself*, HR approved the leave, the deadline didn't. One sentence, the punch lands at the very end ("the deadline didn't"), in the voice of someone cornered at work.

**The entry (114 characters, one line):**

> Per my out-of-office reply, I was on annual leave from this deadline — HR approved the leave, the deadline didn't.

## Why this wins head-to-head

- **A real excuse first:** it answers the missed deadline directly — annual leave, approved.
- **A turn, not an apology:** the approval came from HR, but the deadline never signed off. The authority that matters is the one that didn't approve.
- **One clean sentence:** reads aloud in one breath, punch at the end.
- **Sounds like a person cornered:** office voice, exaggerated just enough — nobody files leave *from a deadline*, which is exactly why it's funny.
- **Fresh angle:** not a dog, not a dead laptop, not a ghosting calendar — a bureaucratic document (the out-of-office reply) turned against the deadline.
- **Tie-break aware:** at 116 bytes the entry is short, and the kit's tie-break favours the smaller text on an exact win-rate tie.

## Files

- `main.ts` — the entrypoint; writes the single line to `/output/entry.txt`.
- `LICENSE` — MIT.

## How it runs

`main.ts` (Node 22.18+) writes exactly that one line to `/output/entry.txt`, after checking the kit's gate itself: 1–200 characters, a single line, no surrounding whitespace. Deterministic — every run writes byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```
