<script lang="ts">
	// original code inspired by Evan You https://github.com/yyx990803/vue-wordle/
	import { LetterState } from '../types';
	import type { Board } from '../types';
	import { clearTile, fillTile } from '$lib/utils';

	import Keyboard from '$lib/Keyboard.svelte';
	import Result from '$lib/Result.svelte';
	import Message from '$lib/Message.svelte';

	import { onMount } from 'svelte';

	const totalTime = 1000;
	const apiUrl = import.meta.env.MODE === 'development' ? 'http://localhost:7860/data' : 'data';
	const imageBaseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:7860/' : '';
	// Get word of the day
	let answer: string;
	let imagePaths: string[];
	let cols: number;
	let timePerTile: number;

	let letterStates: Record<string, LetterState> = {};

	let board: Board;
	// Current active row.
	let currentRowIndex = 0;

	// Feedback state: message and shake
	let message = '';
	let grid = '';
	let shakeRowIndex = -1;
	let success = false;
	// Handle keyboard input.
	let allowInput = true;

	onMount(async () => {
		const data = await fetch(apiUrl).then((d) => d.json());
		const prompts: string[] = Object.keys(data);
		const randomPrompt: string = prompts[~~(Math.random() * prompts.length)];
		answer = randomPrompt.replace(/_/g, ' ');
		imagePaths = data[randomPrompt].slice(0, 6);
		console.log(answer);
		cols = randomPrompt.length;
		timePerTile = totalTime / cols;

		board = Array.from({ length: 6 }, () =>
			Array.from({ length: cols }, () => ({
				letter: '',
				state: LetterState.INITIAL
			}))
		);

		window.addEventListener('keyup', onKeyup);
		document.body.style.setProperty('--cols', `${cols}`);
		return () => window.removeEventListener('keyup', onKeyup);
	});

	const onKeyup = (e: KeyboardEvent) => {
		onKey(e.key);
	};

	function onKey(key: string) {
		if (!allowInput) return;
		if (/^[a-zA-Z ]$/.test(key)) {
			board = fillTile(board, currentRowIndex, key.toLowerCase());
		} else if (key === 'Backspace') {
			board = clearTile(board, currentRowIndex);
		} else if (key === 'Enter') {
			completeRow();
		}
	}

	function completeRow() {
		const newBoard = [...board];
		const currentRow = newBoard[currentRowIndex];
		const currentletterStates: Record<string, LetterState> = {};

		if (currentRow.every((tile) => tile.letter)) {
			const guess = currentRow.map((tile) => tile.letter).join('');
			// if (!allWords.includes(guess) && guess !== answer) {
			//   shake()
			//   showMessage(`Not in word list`)
			//   return
			// }

			const answerLetters: (string | null)[] = answer.split('');
			// first pass: mark correct ones
			currentRow.forEach((tile, i) => {
				if (answerLetters[i] === tile.letter) {
					tile.state = currentletterStates[tile.letter] = LetterState.CORRECT;
					answerLetters[i] = null;
				}
			});

			// second pass: mark the present
			currentRow.forEach((tile) => {
				if (!tile.state && answerLetters.includes(tile.letter)) {
					tile.state = LetterState.PRESENT;
					answerLetters[answerLetters.indexOf(tile.letter)] = null;
					if (!currentletterStates[tile.letter]) {
						currentletterStates[tile.letter] = LetterState.PRESENT;
					}
				}
			});
			// 3rd pass: mark absent
			currentRow.forEach((tile) => {
				if (!tile.state) {
					tile.state = LetterState.ABSENT;
					if (!currentletterStates[tile.letter]) {
						currentletterStates[tile.letter] = LetterState.ABSENT;
					}
				}
			});

			allowInput = false;
			if (currentRow.every((tile) => tile.state === LetterState.CORRECT)) {
				// yay!
				setTimeout(() => {
					success = true;
				}, totalTime);
			} else if (currentRowIndex < board.length - 1) {
				// go the next row
				currentRowIndex++;
				setTimeout(() => {
					allowInput = true;
				}, totalTime);
			} else {
				// game over :(
				setTimeout(() => {
					showMessage(answer.toUpperCase(), -1);
				}, totalTime);
			}
		} else {
			shake();
			showMessage('Not enough letters');
		}

		board = newBoard;
		letterStates = currentletterStates;
	}
	function showMessage(msg: string, time = 1000) {
		message = msg;
		if (time > 0) {
			setTimeout(() => {
				message = '';
			}, time);
		}
	}

	function shake() {
		shakeRowIndex = currentRowIndex;
		setTimeout(() => {
			shakeRowIndex = -1;
		}, 1000);
	}
</script>

{#if board !== undefined}
	<div class="max-w-screen-lg mx-auto px-1 relative z-0">
		{#if message}
			<Message {message} />
		{/if}
		{#if success}
			<Result {board} {currentRowIndex} {imagePaths} />
		{/if}
		<!-- <div class="message" transition:fade>
			{message}
			{#if grid}
				<pre>{grid}</pre>
			{/if}
		</div> -->
		<!-- {/if} -->
		<header>
			<h1 class="text-3xl font-bold text-center">WORDALLE</h1>
		</header>
		<div class="grid grid-cols-3 gap-2 max-w-md mx-auto p-3">
			{#each imagePaths as image}
				<div>
					<img src={imageBaseUrl + image} alt="" class="w-full h-full" />
				</div>
			{/each}
		</div>
		<div class="board">
			{#each board as row, index}
				<div
					class="row {shakeRowIndex === index && 'shake'} {success &&
						currentRowIndex === index &&
						'jump'}"
				>
					{#each row as tile, index}
						<div class="tile {tile.letter && 'filled'} {tile.state && 'revealed'}">
							<div class="front" style="transition-delay: {index * timePerTile}ms;">
								{tile.letter}
							</div>
							<div
								class="back {tile.state}"
								style="transition-delay: {index * timePerTile}ms; animation-delay: {index * 100}ms;"
							>
								{tile.letter}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<Keyboard on:keyup={({ detail }) => onKey(detail)} bind:letterStates />
	</div>
{/if}

<style lang="postcss">
	.board {
		@apply grid gap-1.5 grid-rows-6 mx-0 my-auto;
		--height: min(200px, calc(var(--vh, 100vh) - 310px));
		height: var(--height);
	}
	.row {
		@apply grid gap-2;
		grid-template-columns: repeat(var(--cols), 1fr);
	}

	.tile {
		@apply w-full text-base text-center font-bold
        uppercase select-none relative bg-zinc-100;
		vertical-align: middle;
	}

	.tile.filled {
		animation: zoom 0.2s;
	}

	.tile .front,
	.tile .back {
		@apply box-border inline-flex justify-center items-center w-full h-full
		absolute top-0 left-0 transition-transform duration-500;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.tile .front {
		@apply border-[1.5px] border-solid border-gray-300;
	}

	.tile.filled .front {
		@apply border-[1.5px] border-solid border-gray-500;
	}

	.tile .back {
		transform: rotateX(180deg);
	}

	.tile.revealed .front {
		transform: rotateX(180deg);
	}

	.tile.revealed .back {
		transform: rotateX(0deg);
	}

	@keyframes zoom {
		0% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1);
		}
	}

	.shake {
		animation: shake 0.5s;
	}

	@keyframes shake {
		0% {
			transform: translate3d(1px, -1px, 0);
		}

		10% {
			transform: translate3d(-2px, 2px, 0);
		}

		20% {
			transform: translate3d(2px, -2px, 0);
		}

		30% {
			transform: translate3d(-2px, 2px, 0);
		}

		40% {
			transform: translate3d(2px, -2px, 0);
		}

		50% {
			transform: translate3d(-2px, 2px, 0);
		}

		60% {
			transform: translate3d(2px, 2px, 0);
		}

		70% {
			transform: translate3d(-2px, -2px, 0);
		}

		80% {
			transform: translate3d(2px, 2px, 0);
		}

		90% {
			transform: translate3d(-2px, -2px, 0);
		}

		100% {
			transform: translate3d(1px, 1px, 0);
		}
	}

	.jump .tile .back {
		animation: jump 0.5s;
	}

	@keyframes jump {
		0% {
			transform: translate3d(0, 0px, 0);
		}

		20% {
			transform: translate3d(0, 5px, 0);
		}

		60% {
			transform: translate3d(0, -25px, 0);
		}

		90% {
			transform: translate3d(0, 3px, 0);
		}

		100% {
			transform: translate3d(0, 0px, 0);
		}
	}

	@media (max-height: 680px) {
		.tile {
			font-size: 1.5vh;
		}
	}
</style>