<script lang="ts">
  import Display from "../components/Display.svelte";
  import Radio from "../components/Radio.svelte";

  let radioVal = "test1";
</script>

<Radio
  bind:value={radioVal}
  options={["test1", "test2", { value: "test3", label: "test3 label" }]}
/>
<Display value={radioVal} />
