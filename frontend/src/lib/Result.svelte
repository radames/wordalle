<script lang="ts">
	import { colors, cheersMessages } from '$lib/utils';
	import type { Board } from '../types';
	import { fade } from 'svelte/transition';
	export let board: Board;
	export let currentRowIndex: number;
	export let imagePaths: string[];

	const message = cheersMessages[currentRowIndex];
	import domtoimage from 'dom-to-image';
	const imageBaseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:7860/' : '';

	let elToShare: HTMLDivElement;
	// let domToImage: DomToImage;
	let copyState = false;
	// onMount(async () => {
	// 	domToImage = (await import('dom-to-image')) as unknown as DomToImage;
	// });
	async function writeClipDOM(node: HTMLDivElement) {
		try {
			await navigator.clipboard.write([
				new ClipboardItem({
					'image/png': domtoimage.toBlob(node, {bgcolor: "#000"})})
			]);
			copyState = true;
			setTimeout(() => (copyState = false), 1000);
			console.log('Fetched image copied.');
		} catch (err) {
			console.log(err.name, err.message);
		}
	}

	const s = 10;
	const p = 1;
	const rx = s / 10;
</script>

<!-- Modal  made with tailwind -->
<div class="modal relative z-2" transition:fade>
	<div class="message">
		<div class="border-0">
			<div class="p-3" bind:this={elToShare}>
				<h2 class="text-center uppercase tracking-widest font-extrabold">{message}</h2>
				<div class="grid grid-cols-3 gap-2 p-3">
					{#each imagePaths as image}
						<div>
							<img src={imageBaseUrl + image} alt="" class="w-full h-full" />
						</div>
					{/each}
				</div>
				<svg
					class="w-full"
					viewBox="0 0 {board[0].length * (p + s)} {board.length * (p + s)}"
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
				<p class="text-[0.6rem] font-extralight text-gray-300 opacity-50">
					https://huggingface.co/spaces/huggingface-projects/wordalle
				</p>
			</div>
		</div>
		<p class="p-3 font-normal text-base">
			Copy the result to clipboard
			<button class="min-w-[6ch]" on:click={() => writeClipDOM(elToShare)}>
				{!copyState ? 'Copy' : 'Copied'}
			</button>. Then go to Twitter and Share
			<a
				class="go-tweet"
				target="_blank"
				rel="noopener noreferrer"
				href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fhuggingface.co%2Fspaces%2Fosanseviero%2Fwordalle&via=huggingface&hashtags=dallemini"
			>
				Share on Twitter
			</a>
			or <button class="min-w-[6ch]" on:click={() => window.location.reload()}> Try again </button>
		</p>
	</div>
</div>

<style lang="postcss" scoped>
	.message {
		@apply text-white bg-black bg-opacity-80 font-semibold p-10 z-20 rounded-md transition-opacity duration-300 ease-in-out mx-auto max-w-lg;
	}
	.modal {
		@apply fixed top-0 left-0 w-screen min-h-screen z-10 bg-black bg-opacity-80 backdrop-blur-sm;
	}
	.go-tweet,
	button {
		@apply bg-gray-700 hover:bg-gray-900 text-white font-bold p-1 my-1 text-sm rounded transition-opacity duration-500 ease-in-out;
	}
</style>
