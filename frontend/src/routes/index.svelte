<script lang="ts">
	// original code inspired by Evan You https://github.com/yyx990803/vue-wordle/
	import { LetterState, GameState } from '../types';
	import type { Board, PromptsData, SuccessPrompt, Tile } from '../types';
	import { clearTile, fillTile } from '$lib/utils';

	import Keyboard from '$lib/Keyboard.svelte';
	import Result from '$lib/Result.svelte';
	import Message from '$lib/Message.svelte';
	import { currentUser, completedPromptsStore } from '$lib/store';

	import { onMount, onDestroy } from 'svelte';
	import { browser, dev } from '$app/env';
	import { base } from '$app/paths';

	const totalTime = 1000;
	const apiUrl = dev ? 'http://localhost:7860/' : '';
	let allowShare = true;
	let promptsData: PromptsData;
	let completedPrompts: SuccessPrompt[] = [];
	let currPromptIndex: number;
	onMount(async () => {
		onResize();
		promptsData = await fetch(apiUrl + 'data').then((d) => d.json());

		completedPrompts = $completedPromptsStore;
		if (completedPrompts.length >= Object.keys(promptsData).length) {
			gameState = GameState.COMPLETED;
		}

		console.log('Current User Data:', $currentUser);
		console.log('Completed Prompts:', $completedPromptsStore);

		restartBoard();
		window.addEventListener('keyup', onKeyup, true);
		window.addEventListener('resize', onResize);
		window.focus();
		document.body.addEventListener('click', () => window.focus(), false);
		// update completed prompts with local storage data
	});

	function onResize() {
		document.body.style.setProperty('--vh', window.innerHeight + 'px');
	}

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keyup', onKeyup, true);
		}
	});

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
	let shakeRowIndex = -1;
	let gameState: GameState = GameState.LOADING;
	// Handle keyboard input.
	let allowInput = true;

	function restartBoard() {
		//reset all states
		shakeRowIndex = -1;
		message = '';
		currentRowIndex = 0;
		letterStates = {};
		allowInput = true;

		const prompts: string[] = Object.keys(promptsData);

		if (completedPrompts.length >= prompts.length || gameState === GameState.COMPLETED) {
			showMessage("You've completed all prompts. Please come back later for more!", -1);
			gameState = GameState.COMPLETED;
			allowInput = false;
			completedPrompts = [];
		} else {
			gameState = GameState.PLAYING;
		}

		const idsToRemove = completedPrompts.map((e) => e.idx);
		const promptsFiltered = prompts.filter((_, i) => !idsToRemove.includes(i));
		const radomPromptId = ~~(Math.random() * promptsFiltered.length);
		const randomPrompt: string = promptsFiltered[radomPromptId];
		currPromptIndex = prompts.indexOf(randomPrompt);

		answer = randomPrompt.replace(/_/g, ' ');
		imagePaths = promptsData[randomPrompt].slice(0, 6);
		const clue = [...answer].map((a) => (Math.random() > 0.5 ? '*' : a)).join('');
		console.log('%cCLUE: ', 'color: red;font-weight:bold', clue);
		// console.log(answer);
		cols = answer.length;
		timePerTile = totalTime / cols;

		board = Array.from({ length: 7 }, () =>
			Array.from(answer).map((l) => ({
				letter: '',
				correct: l,
				state: LetterState.INITIAL
			}))
		);
		document.body.style.setProperty('--cols', `${cols}`);
	}

	const onKeyup = (e: KeyboardEvent) => {
		onKey(e.key);
	};

	function onKey(key: string) {
		if (!allowInput) return;
		if (/^[a-zA-Z]$/.test(key)) {
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
		const currentletterStates = { ...letterStates };

		if (currentRow.every((tile) => tile.letter)) {
			const guess = currentRow.map((tile) => tile.letter).join('');
			// if (!allWords.includes(guess) && guess !== answer) {
			//   shake()
			//   showMessage(`Not in word list`)
			//   return
			// }
			if (allowShare) {
				postProcess(currentRow);
			}

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
				completedPrompts = [...completedPrompts, { prompt: answer, idx: currPromptIndex }];
				$completedPromptsStore = completedPrompts;

				setTimeout(() => {
					gameState = GameState.SUCESS;
				}, totalTime);
			} else if (currentRowIndex < board.length - 1) {
				// go the next row
				currentRowIndex++;
				setTimeout(() => {
					allowInput = true;
				}, totalTime);
			} else {
				// game over :(
				gameState = GameState.FAIL;
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
	async function postProcess(currentRow: Tile[]) {
		const guess = currentRow.map((tile) => tile.letter).join('');
		const correct = currentRow.map((tile) => tile.correct).join('');
		fetch(apiUrl + 'prompt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				guess: guess,
				correct: correct
			})
		});
	}
</script>

{#if board !== undefined}
	<div class="max-w-screen-lg mx-auto px-1 relative z-0 mt-3">
		{#if message}
			<Message {message} {gameState} on:restart={restartBoard} />
		{/if}
		{#if gameState === GameState.SUCESS}
			<Result
				{board}
				{currentRowIndex}
				{imagePaths}
				totalStreaks={completedPrompts.length}
				on:restart={restartBoard}
			/>
		{/if}
		<!-- <div class="message" transition:fade>
			{message}
			{#if grid}
				<pre>{grid}</pre>
			{/if}
		</div> -->
		<!-- {/if} -->
		<header class="flex justify-between items-center uppercase sm:px-2 text-center">
			<span class="font-light flex-1 text-xs sm:text-base"> Guess the prompt!</span>
			<span class="sm:block hidden mx-3 flex-1 border-[0.5px] border-opacity-50 border-gray-400" />
			<h1 class="text-xl font-bold text-center whitespace-nowrap">🥑 WORDALLE 🥑</h1>
			<span class="sm:block hidden mx-3 flex-1  border-[0.5px] border-opacity-50 border-gray-400" />
			<span class="font-light flex-1 text-xs sm:text-base">
				<button
					tabindex="-1"
					on:click={(event) => {
						restartBoard();
						event.currentTarget.blur();
					}}
					class="hover:no-underline underline underline-offset-2 hover:scale-105 transition-all duration-200 ease-in-out"
					>Skip to next</button
				></span
			>
		</header>
		<div class="grid grid-cols-3 gap-2 max-w-md mx-auto p-3">
			{#each imagePaths as image}
				<div>
					<img src={apiUrl + image} alt="" class="aspect-square w-full h-full" />
				</div>
			{/each}
		</div>
		<div class="board">
			{#each board as row, index}
				<div
					class="row {shakeRowIndex === index && 'shake'} {gameState == GameState.SUCESS &&
						currentRowIndex === index &&
						'jump'}"
				>
					{#each row as tile, index}
						<div class="tile {tile.letter && 'filled'} {tile.state && 'revealed'}">
							<div
								class="front z-0 {tile.correct === ' ' ? 'space' : ''}"
								style="transition-delay: {index * timePerTile}ms;"
							>
								<span class="letter">{tile.letter}</span>
							</div>
							<div
								class="back z-0 {tile.state}"
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
		<footer class="max-w-md mx-auto pt-3">
			<details class="text-xs my-3">
				<summary class="cursor-pointer my-2">
					<span>About</span>
				</summary>
				<p>
					Welcome to Wordalle! The game that marries <a
						href="https://huggingface.co/spaces/dalle-mini/dalle-mini"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-blue-500 hover:no-underline"
					>
						DALLE mini</a
					> & Wordle!”
				</p>
				<h2 class="font-bold my-2">Instructions</h2>
				<p>
					You are given a board with a grid of letters. You must guess the prompt used to generate
					the images.
				</p>
				<p>
					Your guess must contain the same number of letters as tiles. After you guess, the tiles
					will be revealed.
				</p>
				<h2 class="font-bold my-2">Example</h2>
				<p class="pb-3">
					The green tiles are correct letter placements. The yellow tiles are correct letters but in
					wrong position and the gray tiles are letters not present in the prompt.
					<img alt="wordalle example for dog eating pastas" src={base + '/img1.jpg'} />
					<img alt="wordalle example for cat eating noodle " src={base + '/img2.jpg'} />
				</p>
			</details>
			<details class="text-xs my-3">
				<summary class="cursor-pointer my-2">
					<span>Disclaimer</span>
				</summary>
				<p>
					This demo collects the guesses to help with a research project. The demo stores no
					personal data, such as your IP address, email, or account, only your guesses.
				</p>
				<label class="py-3 flex">
					<input type="checkbox" bind:checked={allowShare} />
					<span class="mx-1">Please uncheck to disable sharing {allowShare}</span>
				</label>
			</details>
		</footer>
	</div>
{/if}

<style lang="postcss">
	.board {
		@apply relative grid gap-1 mx-auto;
		/* box-sizing: border-box; */
		--height: min(200px, calc(var(--vh, 100vh) - 350px));
		height: var(--height);
		width: min(90vw, calc(var(--height) / 7 * var(--cols)));
	}
	.row {
		@apply relative grid gap-1;
		grid-template-columns: repeat(var(--cols), 1fr);
	}

	.tile {
		@apply z-0 w-full text-base text-center font-bold
        uppercase select-none relative bg-gray-50 text-black;
		vertical-align: middle;
	}

	.tile .filled {
		animation: zoom 0.2s;
	}

	.tile .front,
	.tile .back {
		@apply z-10 box-border inline-flex justify-center items-center w-full h-full
		absolute top-0 left-0 transition-transform duration-500;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}
	.tile .letter {
		@apply flex place-items-center h-full bg-gray-50 z-10;
	}
	.tile .space::before {
		@apply absolute z-0 flex place-items-center text-black opacity-50;
		content: '•';
	}

	.tile .front {
		@apply border-[1.5px] border-solid border-gray-300;
	}

	.tile.filled .front {
		@apply border-[1.5px] border-solid border-gray-500;
	}

	.tile .back {
		transform: scale(0, 1);
	}
	.tile.revealed .front {
		transform: scale(-1, 1);
	}
	.tile.revealed .back {
		transform: scale(1, 1);
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
