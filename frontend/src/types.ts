export const enum LetterState {
	INITIAL = '',
	CORRECT = 'correct',
	PRESENT = 'present',
	ABSENT = 'absent'
}

export const enum GameState {
	PLAYING,
	SUCESS,
	FAIL
}
export interface Tile {
	letter: string;
	state: LetterState;
	correct: string;
}
export type Board = Tile[][];

export interface PromptsData {
	[key: string]: string[];
}

export interface SuccessPrompt {
	prompt: string;
	idx: number;
}
