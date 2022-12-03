<script lang="ts">
	export let name: string;
  import Test from './Test.sid';
  import Test2 from './Test2.svelte';
  import SwitchTest from './switch-test.sid';
  import HeaderTest from './header-test.sid';
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build
	Svelte apps.</p>
  <Test />
  <Test2 />
  <SwitchTest />
  <HeaderTest />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
