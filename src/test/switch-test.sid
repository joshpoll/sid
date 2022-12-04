<script>
	let x = 7;
  let y = "one";
</script>

<style>
  label {
    display: inline;
  }
</style>

{#if x > 10}

	{x} is greater than 10

{:else if 5 > x}

	{x} is less than 5

{:else}

	{x} is between 5 and 10

{/if}

{#if y === "one"}

  Case 1

{:else if y === "two"}

  Case 2

{:else}

  Default

{/if}

<label>
	<input type=radio bind:group={y} value={"one"}>
	A
</label>

<label>
	<input type=radio bind:group={y} value={"two"}>
	B
</label>

<label>
	<input type=radio bind:group={y} value={"default"}>
	Default
</label>