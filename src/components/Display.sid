<script lang="ts">
  import {format as createFormatter} from "d3-format";
  export let format: string | undefined = undefined;
  export let value: any;
  export let style: string | undefined = undefined;
  export let className: string | undefined = undefined;

  const formatter = createFormatter(format || "0.2f");

  function formatValue(
    v: object | boolean | number | string | unknown
  ): string | unknown {
    switch (typeof v) {
      case "object":
        return JSON.stringify(v);
      case "boolean":
        return "" + v;
      case "number":
        return formatter(v);
      case "string":
      default:
        return v;
    }
  }
</script>

<span {style} class={`idyll-display ${className ? className : ""}`.trim()}>
  {formatValue(value)}
</span>
