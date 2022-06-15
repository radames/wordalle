<script lang="ts">
	import { fade } from 'svelte/transition';
	export let message: string | null = null;
</script>

<div class="message" transition:fade>
	{message}
</div>

<style lang="postcss" scoped>
	.message {
		@apply absolute left-1/2 top-1/2 text-white bg-black bg-opacity-80 font-semibold
			p-5 z-20 rounded-sm -translate-x-1/2 transition-opacity duration-300 ease-in-out;
	}
</style>
