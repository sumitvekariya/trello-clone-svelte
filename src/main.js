import App from './App.svelte';
import _boards from './data';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		tracks: _boards[0].tracks
	}
});

export default app;