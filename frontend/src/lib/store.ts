import { browser } from '$app/env';
import { writable } from 'svelte/store';
import type { User, SuccessPrompt } from '../types';
import { nanoid } from 'nanoid';

const initialUser: User = nanoid();
const intialCompletedPrompts: SuccessPrompt[] = [];

export const currentUser = writable<User>(
	browser ? JSON.parse(localStorage['user'] || JSON.stringify(initialUser)) : initialUser
);
currentUser.subscribe((value) => {
	if (browser) {
		return (localStorage['user'] = JSON.stringify(value));
	}
});
export const completedPromptsStore = writable<SuccessPrompt[]>(
	browser
		? JSON.parse(localStorage['completedPrompts'] || JSON.stringify(intialCompletedPrompts))
		: intialCompletedPrompts
);
completedPromptsStore.subscribe((value) => {
	if (browser) {
		return (localStorage['completedPrompts'] = JSON.stringify(value));
	}
});
