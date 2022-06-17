// original code inspired by Evan You https://github.com/yyx990803/vue-wordle/
import { LetterState } from '../types';
import type { Board } from '../types';

export function clearTile(board: Board, currentRowIndex: number) {
	const newBoard = [...board];
	const currentRow = newBoard[currentRowIndex];
	for (const tile of [...currentRow].reverse()) {
		if (tile.letter) {
			tile.letter = '';
			break;
		}
	}
	return newBoard;
}

export function fillTile(board: Board, currentRowIndex: number, letter: string) {
	const newBoard = [...board];
	const currentRow = newBoard[currentRowIndex];
	for (const tile of currentRow) {
		if (tile.correct === ' ') {
			tile.letter = ' ';
		}
		if (!tile.letter) {
			tile.letter = letter;
			break;
		}
	}
	return newBoard;
}

export const colors = {
	[LetterState.CORRECT]: '#00b81a',
	[LetterState.PRESENT]: '#ffc80a',
	[LetterState.ABSENT]: '#d9d9d9',
	[LetterState.INITIAL]: '#5d5d5d'
};

export const cheersMessages = [
	'Genius',
	'Magnificent',
	'Impressive',
	'Splendid',
	'Great',
	'Phew',
	'Hugging'
];
