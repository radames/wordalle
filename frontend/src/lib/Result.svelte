<script lang="ts">
	import { colors, cheersMessages, badgesComponents } from '$lib/utils';
	import type { Board } from '../types';
	import { fade, scale } from 'svelte/transition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import type { SvelteComponent } from 'svelte';

	const dispatch = createEventDispatcher();

	export let board: Board;
	export let currentRowIndex: number;
	export let imagePaths: string[];
	export let totalStreaks: number;
	const message = cheersMessages[currentRowIndex];
	import domtoimage from 'dom-to-image';
	const imageBaseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:7860/' : '';

	let modalEl: HTMLDivElement;
	let elToShare: HTMLDivElement;
	let disableDownload: boolean = false;

	async function saveFile(node: HTMLDivElement) {
		disableDownload = true;
		try {
			const blob = await domtoimage.toBlob(node, { bgcolor: '#000' });
			const a = document.createElement('a');
			a.download = `sucess-${Date.now()}.png`;
			a.target = '_self';
			a.onclick = async (e) => {
				disableDownload = true;
				if (a.href) {
					URL.revokeObjectURL(a.href);
					disableDownload = false;
					return;
				}
				a.href = URL.createObjectURL(blob);
				disableDownload = false;
			};
			a.click();
			console.log('Downloding image.');
		} catch (err) {
			console.log(err.name, err.message);
		}
	}
	const onKeyup = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			dispatch('restart');
		} else if (e.key === ' ') {
			saveFile(elToShare);
		}
	};

	let badgeComponent: SvelteComponent;

	onMount(async () => {
		if (totalStreaks in badgesComponents) {
			const compName = badgesComponents[totalStreaks];
			badgeComponent = (await import(`./badges/${compName}.svelte`)).default;
		}
		window.addEventListener('keyup', onKeyup, true);
	});

	onDestroy(() => {
		window.removeEventListener('keyup', onKeyup, true);
	});
	const s = 10;
	const p = 1;
	const rx = s / 10;
</script>

<!-- Modal  made with tailwind -->
<div bind:this={modalEl} class="modal relative z-50" transition:fade>
	<div class="message">
		<div class="border-0">
			<div class="p-3" bind:this={elToShare}>
				<header class="p-3 flex justify-between items-center">
					<h1 class="text-xs font-bold uppercase whitespace-nowrap">WORDALLE 🥑</h1>
					<span class="font-light">hf.co/wordalle</span>
				</header>
				<h2 class="text-center uppercase tracking-widest font-extrabold">{message}</h2>
				<div class="grid grid-cols-3 gap-2 p-3 relative">
					{#if totalStreaks in badgesComponents}
						<div
							transition:scale={{ duration: 500 }}
							class="absolute left-0 right-0 top-0 bottom-0 flex place-content-center place-items-center"
						>
							<svelte:component this={badgeComponent} classNames="w-full max-w-[180px]" />
						</div>
					{/if}
					{#each imagePaths as image}
						<div>
							<img src={imageBaseUrl + image} alt="" class="aspect-square	w-full h-full" />
						</div>
					{/each}
				</div>
				<svg
					class="w-full p-3 mx-auto max-h-[30vh]"
					viewBox="0 0 {board[0].length * (p + s) - p} {board.length * (p + s) - p}"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#each board as row, y}
						{#each row as tile, x}
							<rect
								fill={colors[tile.state]}
								x={x * (s + p)}
								y={y * (s + p)}
								width={s}
								height={s}
								{rx}
							/>
						{/each}
					{/each}
				</svg>
			</div>
		</div>
		<div class="p-3 px-6 flex text-base">
			<button
				disabled={disableDownload}
				class="min-w-[15ch] flex-1 mr-1"
				on:click={() => saveFile(elToShare)}
			>
				{!disableDownload ? 'SAVE SCREENSHOT' : 'SAVING..'}
			</button>
			<button class="flex-1 ml-1" on:click={() => dispatch('restart')}> TRY AGAIN </button>
		</div>
	</div>
</div>

<style lang="postcss" scoped>
	.message {
		@apply text-white bg-black bg-opacity-80 font-semibold p-10 z-20 rounded-md transition-opacity duration-300 ease-in-out mx-auto max-w-lg;
	}
	.modal {
		@apply fixed top-0 left-0 w-screen min-h-screen z-10 bg-black bg-opacity-80 backdrop-blur-sm;
		transform: translateZ(1000px);
		transform-style: preserve-3d;
	}
	.go-tweet,
	button {
		@apply bg-gray-700 hover:bg-gray-900 text-white font-bold p-1 my-1 text-sm rounded transition-opacity duration-500 ease-in-out;
	}
</style>
