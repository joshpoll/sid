<script lang="ts">
  export let name: string;
  export let link: string | undefined = undefined;
  export let color: string;
</script>

{#if link === undefined}
  <span>
    {name}
  </span>
{:else}
  <a target="_blank" rel="noreferrer" href={link} style={`color: ${color}`}>
    {name}
  </a>
{/if}
