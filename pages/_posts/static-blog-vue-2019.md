---
title: Setting up a static blog/portfolio in 2019
date: 2019-07-08
layout: post
---

I've always found web development to be needlessly messy. The webdev world, at least from outside, always seems to be moving incredibly fast, and every time you peek into that black hole there seems to be a new framework that you "just have to know". Now, I get that people like to talk about the newest, shiniest thing, even if there's no market for it yet. But JavaScript is the only environment where this seems to happen *so fast*.

<label for="mn-pfolio" class="margin-toggle">&#8853;</label>
<input type="checkbox" id="mn-pfolio" class="margin-toggle"/>
<span class="marginnote">
  The previous portfolio wasn't [as simple as this](https://jgthms.com/web-design-in-4-minutes/), but it came quite close.
</span>

So you can imagine how delighted I was when I was looking to start a simple static website and blog to accompany. I had already made a simple portfolio using Vue.js and Bulma. It looked okay, but it wasn't great on mobile and I wanted to have a small blog where I could complain about things.

So I leaned into it. I looked up what was the hottest, newest, shiniest toy and set to work. And now you get to read about everything I figured out, in case you ever need to do something similar (or I have to retrace my steps when I inevitably forget about half of this).


## Tech stack: JAMstack

[JavaScript, APIs and Markdown](https://jamstack.org/). Sounds simple enough. Searching for "jamstack 2017" returns guitar-related results, which must mean I'm on the right track. JAMstack means I'm writing this in Markdown and the site runs entirely on the client, the only thing the server is doing is serving (heh) the static pages to you.

It's an open enough set of rules that looked new enough. That's all it took.

## Front-end: VueJS

I considered no front-end framework at all. I considered React. I ended up going with Vue. There are two motivations behind this decision:

1. I already had some code from the previous version that I could re-use

2. Vue just *feels* like my type of framework. It's simpler and you can learn just the basics to have something nice enough up and running, without having to go into Vuex and more sophisticated stuff.

It's also newer, so that's another point to Vue! I also learned that it was created by someone called [Evan Yue](https://evanyou.me/), who happens to be Chinese. Which might explain Vue's adoption by the biggest Chinese companies (Alibaba, Baidu, Tencent, Xiaomi...). More on that later.

## Static generator: Saber

Here's where I went completely overboard. I thought about making it in "pure" Vue. I thought about using one of the more established tools, like [Gridsome](https://gridsome.org/), [Nuxt](https://nuxtjs.org/) or [VuePress](https://vuepress.vuejs.org/), all of which looked really interesting. But I said I was here for the newest, shiniest things, didn't I? So I ran into [Saber](https://saber.land/), went to their Github page and saw that the first commit dated of January 2019.

Not only that, it also had a markedly Chinese community (researching this is when I learned about Vue's impact in China) so I figured it should be fun enough.

So I picked a theme (saber-theme-tufte because, let's face it, [Edward Tufte](https://en.wikipedia.org/wiki/Edward_Tufte) is a pretty cool guy) and started to work. I have to say, I was expecting **A LOT** of issues but it ended up being much more pleasant than your average day of dealing with `pip` installs.

I also get a lot of nice out-of-the-box utilities to play with, such as margin notes, foot notes, mathematical formulas or syntax highlighting (powered by [Prism](https://prismjs.com/)).


## Hosting: Github Pages

Nothing too crazy here. I already have a Github account and didn't see the need to use [Netlify](https://www.netlify.com/), [Zeit](https://zeit.co/) or other alternatives. I keep a separate project for the source code [here](https://github.com/guille/webpage-dev) and a simple script to build the site, commit it to Git and push to the guille.github.io repository.


## Now...

One of the reasons I gave for making the re-design is that the old site didn't look good on mobile. You might have noticed that I've made a great improvement in this area, as the new site doesn't look great on neither mobile nor PC.

The blog part looks okay since it's handled by the theme, but the landing and the Vitae sections need some heavy design work. But hey, a big part of why I'm doing this is to learn more about web development and design and knowing the one public website I own is this ugly is a great motivator to learn and get better at it.
