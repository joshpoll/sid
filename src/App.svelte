---
<!-- prettier-ignore -->
theme: tufte
layout: blog
title: Hello Sid!
authors: ['jmp', 'matt']
---

<HeaderTest />

## dynamic

<DynamicTest />

## switch

<SwitchTest />

## boolean

<BooleanTest />

## button

<ButtonTest />

## display

<DisplayTest />

## radio

<RadioTest />

## svg

<SVGTest />

## aside

<AsideTest />

Here's some more text for the aside to be... to the side of. Here's some more
text for the aside to be... to the side of. Here's some more text for the aside
to be... to the side of. Here's some more text for the aside to be... to the
side of. Here's some more text for the aside to be... to the side of. ## tweet

<TweetTest />

## chart

<Chart />

<script lang="ts">
  import BooleanTest from "./test/boolean-test.svelte";
  import ButtonTest from "./test/button-test.svelte";
  import DisplayTest from "./test/display-test.svelte";
  import RadioTest from "./test/radio-test.svelte";
  import SVGTest from "./test/svg-test.svelte";
  import SwitchTest from "./test/switch-test.svelte";
  import AsideTest from "./test/aside-test.svelte";
  import TweetTest from "./test/tweet-test.svelte";
  import DynamicTest from "./test/dynamic-test.svelte";
  import Chart from "./components/Chart.svelte";
  import HeaderTest from "./test/header-test.svelte";
  // import CodeHighlightTest from './code-highlight-test.svelte';
</script>
