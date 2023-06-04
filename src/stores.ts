import { writable } from 'svelte/store';
import type {  UserCredential } from 'firebase/auth';
export const user = writable<UserCredential|null>(null);
