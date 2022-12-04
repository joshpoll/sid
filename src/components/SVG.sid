<script lang="ts">
  import InlineSVG from "svelte-inline-svg";
  export let src: string | undefined = undefined;
</script>

{#if src === undefined}
  <svg {...$$restProps}>
    <slot />
  </svg>
{:else}
  <InlineSVG {src} {...$$restProps} />
{/if}
