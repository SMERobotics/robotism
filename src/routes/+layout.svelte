<script lang="ts">
	import '@sarap422/font-d-din/font-face.css';
	import '@fontsource-variable/jetbrains-mono/wght.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
