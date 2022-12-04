<script lang="ts">
  export let options: (string | { label: string; value: any })[];

  export let value = options[0];
</script>

<div>
  {#each options as option, i}
    {#if typeof option === "string"}
      <label>
        <input type="radio" bind:group={value} value={option} name={`${i}`} />
        {option}
      </label>
    {:else}
      <label>
        <input
          type="radio"
          bind:group={value}
          value={option.value}
          name={`${i}`}
        />
        {option.label || option.value}
      </label>
    {/if}
  {/each}
</div>
