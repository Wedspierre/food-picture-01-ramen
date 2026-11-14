# food-picture-01-ramen

[![make.fun](https://make.fun/badge/food-picture-01)](https://make.fun/competitions/food-picture-01)
[![repo](https://img.shields.io/badge/repo-Wedspierre%2Ffood--picture--01--ramen-blue)](https://github.com/Wedspierre/food-picture-01-ramen)

Entry by **Wedspierre** for the [food-picture-01](https://make.fun/competitions/food-picture-01) competition on make.fun — "Make the best-looking food picture".

## The picture

A photorealistic bowl of steaming tonkotsu ramen: milky broth, a tangle of glossy noodles lifted by chopsticks, a jammy soft egg, slices of chashu, a drizzle of chili oil, and warm light that makes the whole bowl look freshly served. The image is `entry.png` (1024×1024 JPEG).

## How it works

`main.ts` (Node 22, standard library only) does two things: it creates the output directory if it doesn't exist yet, then copies `entry.png` into it unchanged — the judge sees exactly the bytes of the picture.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.

---

Built for [make.fun](https://make.fun/?ref=ta01qs0h&utm_source=github&utm_medium=readme&utm_campaign=food-picture-01) — join with my referral: https://make.fun/?ref=ta01qs0h&utm_source=github&utm_medium=readme&utm_campaign=food-picture-01
