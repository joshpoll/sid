<script lang="ts">
  import Display from "../components/Display.svelte";
  import Dynamic from "../components/Dynamic.svelte";

  let myVar = 10;
</script>

<Dynamic bind:value={myVar} />

value: <Display value={myVar} />
