<script lang="ts">
  export let value: number = 0;
  export let min: number = 0;
  export let max: number = 1;
  export let step: number = 1;
  export let style: string = "";
  export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
</script>

<input
  type="range"
  bind:value
  {min}
  {max}
  {step}
  {style}
  on:click={onClick || ((e) => e.stopPropagation())}
/>
