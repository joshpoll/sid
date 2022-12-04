// import App from './App.sid';
import App from './layout.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
