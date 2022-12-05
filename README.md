# Sid: Idyll in Svelte

This is take two of porting Idyll to Svelte.

To use this in VSCode make sure to set up the file association from `*.sid` to `svelte` by searching
your VSCode settings for "file association" and then filling out a new row in the table.

## How to Use

Currently there's no easy way to use this as a standalone library. So for now...

1. Clone the repo
2. `yarn`
3. `yarn dev`
4. Hack on the `App.sid` file.

## Why?

Idyll and Svelte are great tools on their own, but even better together.

Idyll's greatest strength is that it provides a great collection of built-in components, templates, and styles
that makes authoring interactive articles much easier.'

Svelte's greatest strengths lie in its
reactive semantics, language tooling, and component composition.

By rewriting Idyll as a Svelte library, we get the best of both worlds. A great library of defaults
that lets you
- embed sid files in other sid files
- use any svelte component as a sid component
- get typing information, compiler errors, autocomplete, and syntax highlighting
- take advantage of existing svelte and MDsveX documentation and their future advancements

## How does it work?

To support mixed markdown/code files, we use pngwn's [MDsveX
preprocessor](https://github.com/pngwn/MDsveX). This preprocessor also gives us a way to supply
frontmatter and layout configuration. By associating our `.sid` files with svelte, we get access to
svelte's language server protocol (LSP) goodness.

# Progress

## Components

### Level 0
- [x] case (svelte if/else)
- [x] conditional (svelte if/else)
- [x] default (svelte if/else)
- [x] switch (svelte if/else)
- [x] h1 (md #)
- [x] h2 (md ##)
- [x] h3 (md ###)
- [x] h4 (md ####)
- [x] h5 (md #####)
- [x] h6 (md ######)

### Level 1
- [x] boolean
- [x] button
- [ ] aside
- [ ] inline
- [ ] code-highlight
- [x] display
- [ ] image
- [ ] link
- [x] svg
- [x] radio
- [ ] float
- [ ] fixed
- [ ] range
- [ ] select
- [ ] text-container
- [ ] graphic
- [ ] action

### Level 2+
- [ ] chart
- [ ] cite
- [ ] desmos
- [ ] header
- [ ] youtube
- [x] tweet
- [ ] table
- [ ] loop
- [ ] text-input
- [ ] preload
- [ ] preview
- [ ] gist
- [ ] analytics
- [ ] annotation
- [ ] dynamic
- [ ] equation
- [ ] scroller
- [ ] step
- [ ] stepper-control
- [ ] stepper

## Layouts
- [x] blog
- [x] centered
- [x] none

## Themes
- [x] github
- [x] idyll
- [x] none
- [x] tufte

## Template Projects
- [ ] article
- [ ] multipage
- [ ] scrollytelling
- [ ] slideshow

## Fidyll

???
