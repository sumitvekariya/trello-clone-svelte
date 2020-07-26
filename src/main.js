import App from './App.svelte';
import _boards from './data';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		_boards
	}
});

export default app;