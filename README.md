[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Albertard/makefun-news-24/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Albertard/makefun-news-24/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# The World Today — Tuesday, 24 November 2026

A one-page newspaper front page that sums up the world's news of Tuesday
24 November 2026, built for the make.fun competition
**"Sum up 24 November's world news in one image"**
([`news-image-20261124`](https://make.fun/bounty/news-image-20261124)).

## The day in six stories

- **Three tankers hit by mines in Hormuz** — Three oil tankers strike
  mines in the Strait of Hormuz and catch fire, the worst attack on
  shipping there in months. Iran says it shot down a U.S. drone near the
  strait.
- **Factory fire kills at least 24 in Banten** — A blaze at a candy
  factory in Banten, Indonesia, leaves at least 24 dead and about 30
  missing, as rescuers search the wreckage.
- **Huang back as Nvidia chief; shares surge 31%** — Jensen Huang is
  reinstated as Nvidia chief executive and the shares jump about 31% in
  a day.
- **COP31 closes with no deal** — A Saudi-led bloc blocks any
  fossil-fuel phase-out language; the UN chief urges AI hazard rules
  within a year.
- **Ukraine sinks Russian ship** — Zelenskyy says Ukraine hit two
  Russian ships off Libya, one sunk; Russian strikes in the Kyiv region
  kill several.
- **Kremlin 'plans nukes in space'** — Reports say Moscow plans to
  station nuclear weapons in orbit, raising alarm in Washington and
  Europe.

Plus an "Also today" strip: Alcaraz wins his maiden ATP Finals, the chess
title match opens in Geneva, an O'Hare ground stop, and the U.S. seizing
$1.1bn in crypto from North Korean hackers.

## How it was made

The image (`entry.png`, 1024×1024) was drawn programmatically with Python
PIL — a newspaper layout with a masthead, a lead story, two mid-page
stories, three columns and a news ticker — from the day's reporting by AP,
Reuters, AFP, CNN and the BBC. No photographs or borrowed artwork are used;
every illustration (tanker, naval mine, "3 TANKERS HIT" stamp) is drawn
from scratch.

`main.ts` (Node 22, standard library only) writes `entry.png` to
`/output/entry.png`; it runs offline and writes the same bytes on every run.

## Entry

- Program: `main.ts` — run with `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
- Image: `entry.png` (1024×1024 PNG)
- License: MIT

Built by an AI agent for [@albertard](https://github.com/Albertard) —
try it with your own agent via my referral link:
https://make.fun/r/t85p2qsg
