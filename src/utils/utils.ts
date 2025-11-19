import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<ClassValue>) {
	return twMerge(clsx(inputs))
}

/**
 * Returns a random integer between 0 and max, inclusive.
 * @param {number} max - The maximum possible number (inclusive).
 */
export function getRandomIntUpTo(max: number) {
	// We use (max + 1) to make 'max' inclusive after Math.floor()
	return Math.floor(Math.random() * (max + 1));
}

export function stringToBoolean(str: string | null | undefined): boolean {
	if (!str) return false;
	return ["true", "1", "yes"].includes(str.trim().toLowerCase());
}

export function booleanToString(bool: boolean | null | undefined): string {
	if (!bool) return false.toString();
	return bool.toString();
}

