<script lang="ts">
  import Boolean from "../components/Boolean.svelte";

  let myVar = false;
</script>

<Boolean bind:value={myVar} />

Checkbox 
{#if myVar}
  is checked
{:else}
  isn't checked
{/if}
