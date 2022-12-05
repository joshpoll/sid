<script lang="ts">
  import { format as createFormatter } from "d3-format";
  import { drag as createDrag } from "d3-drag";
  import { select } from "d3-selection";

  import { onMount } from "svelte";

  export let format = ".2f";
  export let min = Number.NEGATIVE_INFINITY;
  export let max = Number.POSITIVE_INFINITY;
  export let step = 1;
  export let interval = 0;
  export let display = undefined;
  export let value: number;
  export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
  export let style: string | undefined = undefined;

  function transformValue(value: number): string {
    const formatter = createFormatter(format);
    if (display !== undefined) {
      if (typeof display === "string") {
        return display;
      }
      return formatter(display);
    }
    return formatter(value);
  }

  const drag = createDrag().on("drag", (event) => {
    const dx = event.dx;
    const newValue = Math.max(
      Math.min(value + (step || interval) * dx, max),
      min
    );
    if (newValue !== value) {
      value = newValue;
    }
  });

  let node: HTMLSpanElement;
  onMount(() => {
    if (!node) {
      return;
    }
    drag(select(node));
  });
</script>

<span
  bind:this={node}
  on:click={onClick || ((e) => e.stopPropagation())}
  {style}
  class="idyll-dynamic"
>
  {transformValue(value)}
</span>
