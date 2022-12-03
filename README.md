# Sid: Idyll in Svelte

This is take two of porting Idyll to Svelte.

To use this in VSCode make sure to set up the file association from `*.sid` to `svelte` by searching
your VSCode settings for "file association" and then filling out a new row in the table.

## Why?

Idyll and Svelte are great tools on their own, but even better together.

Idyll's greatest strength is that it provides a great collection of built-in components, templates, and styles
that makes authoring interactive articles much easier. Svelte's greatest strengths lie in its
reactive semantics, language tooling, and component composition. By rewriting Idyll as a Svelte
library, we get the best of both worlds.

## How does it work?

To support mixed markdown/code files, we use pngwn's [MDsveX
preprocessor](https://github.com/pngwn/MDsveX). This preprocessor also gives us a way to supply
frontmatter and layout configuration. By associating our `.sid` files with svelte, we get access to
svelte's language server protocol (LSP) goodness.

# Progress

## Components
- [ ] action
- [ ] analytics
- [ ] annotation
- [ ] aside
- [ ] boolean
- [ ] button
- [x] case (svelte if/else)
- [ ] chart
- [ ] cite
- [ ] code-highlight
- [ ] conditional
- [ ] default
- [ ] desmos
- [ ] display
- [ ] dynamic
- [ ] equation
- [ ] fixed
- [ ] float
- [ ] generateHeaders
- [ ] gist
- [ ] graphic
- [x] h1 (md #)
- [x] h2 (md ##)
- [x] h3 (md ###)
- [x] h4 (md ####)
- [x] h5 (md #####)
- [x] h6 (md ######)
- [ ] header
- [x] image (html img)
- [ ] inline
- [ ] link
- [ ] loop
- [ ] preload
- [ ] preview
- [ ] radio
- [ ] range
- [ ] scrollama
- [ ] scroller
- [ ] select
- [ ] step
- [ ] stepper-control
- [ ] stepper
- [ ] svg
- [x] switch (svelte if/else)
- [ ] table
- [ ] text-container
- [ ] text-input
- [ ] tweet
- [ ] youtube

## Layouts
- [ ] blog
- [ ] centered
- [ ] none

## Template Projects
- [ ] article
- [ ] multipage
- [ ] scrollytelling
- [ ] slideshow

## Themes
- [ ] github
- [ ] idyll
- [ ] none
- [ ] tufte

## Fidyll

???