<script lang="ts">
  import { inlineCssOf } from "../json-to-inline-css.svelte";

  export let position: "left" | "right";
  export let width: string = "50%";
  export let style: string = "{}";
</script>

<!-- TODO: I need to convert styles properly!!! This affects some other components, too. Look for
those. I probably need to write a helper function for all this state-driven style stuff. -->

<div
  class={`float ${position}`}
  style={inlineCssOf({
    float: position,
    width,
    ...JSON.parse(style),
  })}
>
  <slot />
</div>
