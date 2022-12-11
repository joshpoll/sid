<script lang="ts" context="module">
  import * as CSS from "json-to-css";

  export const inlineCssOf = (json: any) => {
    return CSS.of([json]).slice(2, -1);
  };
</script>
