<script lang="ts">
  import Display from "../components/Display.svelte";
  import Range from "../components/Range.svelte";

  let myVar = 10;
</script>

<Range bind:value={myVar} min={0} max={100} />
<Display value={myVar} />
