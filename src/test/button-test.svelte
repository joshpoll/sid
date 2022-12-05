<script lang="ts">
  import Button from "../components/Button.svelte";
  import Display from "../components/Display.svelte";

  let myVar = 0;
</script>

<Button onClick={() => myVar++}>
  Click me
</Button>

Variable value: <Display value={myVar} />
