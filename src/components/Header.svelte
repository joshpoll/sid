<script lang="ts">
  import { inlineCssOf } from "../json-to-inline-css.svelte";
  import ByLineMultipleAuthors from "./header-util/ByLineMultipleAuthors.svelte";

  export let style: string = "{}";
  export let title: string = "";
  export let subtitle: string | undefined = undefined;
  export let author: string | undefined = undefined;
  export let authorLink: string | undefined = undefined;
  export let authors: (string | { name: string; link?: string })[] | undefined =
    undefined;
  export let date: string | undefined = undefined;

  let byLineTemplate:
    | {
        prefix: string;
        joint: string;
        suffix: string;
      }
    | undefined = undefined;

  const byLineDefault = { prefix: "By:", joint: ",", suffix: "and" };

  let { joint, prefix, suffix } = { ...byLineDefault, ...byLineTemplate };

  let background: string = "var(--color-background)";
  let color: string = "var(--color-text)";
</script>

<div
  class={"article-header"}
  style={inlineCssOf({
    background,
    color,
    ...JSON.parse(style),
  })}
>
  <h1 class={"hed"}>{title}</h1>
  {#if subtitle !== undefined}
    <h2 class={"dek"}>{subtitle}</h2>
  {/if}
  {#if author !== undefined}
    <div class={"byline"}>
      {`${prefix.trim()} `}
      {#if authorLink === undefined}
        <span>{author}</span>
      {:else}
        <a
          target="_blank"
          rel="noreferrer"
          href={authorLink}
          style={`color: ${color}`}
        >
          {author}
        </a>
      {/if}
    </div>
  {/if}
  {#if authors !== undefined}
    <ByLineMultipleAuthors
      {authors}
      prefix={prefix.trim()}
      joint={joint.trim()}
      suffix={suffix.trim()}
      {color}
    />
  {/if}
  {#if date !== undefined}
    <div class={"idyll-pub-date"}>{date}</div>
  {/if}
</div>
