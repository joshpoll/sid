<script lang="ts">
  // @ts-ignore
  import App, { metadata } from "./App.svelte";

  import Header from "./components/Header.svelte";

  const layout: string | undefined = metadata.layout;
  const theme: string | undefined = metadata.theme;
  const style: string | undefined = metadata.style;
  const title: string | undefined = metadata.title;
  const subtitle: string | undefined = metadata.subtitle;
  const author: string | undefined = metadata.author;
  const authorLink: string | undefined = metadata.authorLink;
  const authors: (string | { name: string; link?: string })[] | undefined =
    metadata.authors;
  const date: string | undefined = metadata.date;
</script>

<svelte:head>
  {#if layout === undefined}
    <link rel="stylesheet" href="layouts/none.css" />
  {:else if layout === "blog"}
    <link rel="stylesheet" href="layouts/blog.css" />
  {:else if layout === "centered"}
    <link rel="stylesheet" href="layouts/centered.css" />
  {:else}
    <link rel="stylesheet" href="layouts/none.css" />
  {/if}

  {#if theme === undefined}
    <link rel="stylesheet" href="themes/none.css" />
  {:else if theme === "github"}
    <link rel="stylesheet" href="themes/github.css" />
  {:else if theme === "idyll"}
    <link rel="stylesheet" href="themes/idyll.css" />
  {:else if theme === "tufte"}
    <link rel="stylesheet" href="themes/tufte.css" />
  {:else}
    <link rel="stylesheet" href="layouts/default.css" />
  {/if}
</svelte:head>
<Header {style} {title} {subtitle} {author} {authorLink} {authors} {date} />
<App />
