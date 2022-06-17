<script lang="ts">
	import type { LetterState } from '../types';
	import { createEventDispatcher } from 'svelte';

	export let letterStates: Record<string, LetterState>;
	const dispatch = createEventDispatcher();

	const rows = [
		'qwertyuiop'.split(''),
		[...'asdfghjkl'.split('')],
		['Enter', ...'zxcvbnm'.split(''), 'Backspace']
	];
</script>

<div class="my-3 mx-auto select-none max-w-md">
	{#each rows as row, i}
		<div class="row">
			{#if i === 1}
				<div class="spacer" />
			{/if}
			{#each row as key}
				<button
					class="{letterStates[key] === undefined ? '' : letterStates[key]} {key.length > 1 &&
						'big'}"
					on:click={() => dispatch('keyup', key)}
				>
					{#if key === 'Backspace'}
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
							<path
								fill="currentColor"
								d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
							/>
						</svg>
					{:else}
						<span>{key}</span>
					{/if}
				</button>
			{/each}
			{#if i === 1}
				<div class="spacer" />
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss" scoped>
	.row {
		@apply flex w-full mt-0 mb-2 mx-auto touch-manipulation;
	}
	button {
		@apply flex font-bold text-xs m-0 mr-1 p-0 min-h-[58px] border-0
				rounded-sm justify-center items-center uppercase cursor-pointer
				transition-all duration-200 ease-in-out flex-1 select-none
				bg-[#d3d6da] text-[#1a1a1b] hover:scale-105;
	}
	button.big {
		flex: 1.5;
	}
	button:last-of-type {
		margin: 0;
	}
	.spacer {
		flex: 0.5;
	}
</style>
