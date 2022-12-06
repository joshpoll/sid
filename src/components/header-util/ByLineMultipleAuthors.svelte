<script lang="ts">
  import AuthorLink from "./AuthorLink.svelte";

  type Authors = (string | { name: string; link?: string })[];

  const additionalTextByIndex = (
    authors: Authors,
    suffix: any,
    joint: any,
    index: number
  ) => {
    const map = {
      [authors.length - 1]: "",
      [authors.length - 2]: ` ${suffix} `,
    };

    return index in map ? map[index] : `${joint} `;
  };

  export let authors: Authors;
  export let prefix: string;
  export let joint: string;
  export let suffix: string;
  export let color: string;
</script>

<div class={"byline"}>
  {`${prefix} `}
  {#each authors as author, i}
    <span>
      {#if typeof author === "string"}
        {author}
      {:else}
        <span>
          <AuthorLink {...author} {color} />
        </span>
      {/if}
      {additionalTextByIndex(authors, suffix, joint, i)}
    </span>
  {/each}
</div>
