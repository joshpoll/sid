<script lang="ts">
  export let value: boolean = false;
  export let className: string | undefined = undefined;
  export let style: string | undefined = undefined;
</script>

<input
  type="checkbox"
  bind:checked={value}
  class={`idyll-checkbox ${className ? className : ''}`.trim()}
  style={style}
/>
