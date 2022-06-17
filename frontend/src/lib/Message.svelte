<script lang="ts">
	import { fade } from 'svelte/transition';
	import { GameState } from '../types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let gameState: GameState;
	export let message: string | null = null;
</script>

<div class="message" transition:fade>
	{message}
	{#if gameState === GameState.FAIL}
		<div class="font-light flex-1 text-xs sm:text-base text-center">
			<button
				on:click={() => dispatch('restart')}
				class="hover:no-underline underline underline-offset-2 hover:scale-105 transition-all duration-200 ease-in-out"
				>Try Again</button
			>
		</div>
	{/if}
</div>

<style lang="postcss" scoped>
	.message {
		@apply absolute left-1/2 top-1/2 text-white bg-black bg-opacity-80 font-semibold
		text-center p-5 z-20 rounded-sm -translate-x-1/2 transition-opacity duration-300 ease-in-out;
	}
</style>
