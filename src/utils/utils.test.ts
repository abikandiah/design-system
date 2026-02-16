import { describe, it, expect } from 'vitest'
import { cn, getRandomIntUpTo, stringToBoolean, booleanToString } from './utils'

describe('cn', () => {
	it('merges class names', () => {
		expect(cn('foo', 'bar')).toBe('foo bar')
	})

	it('handles conditional classes', () => {
		expect(cn('base', false && 'hidden', 'extra')).toBe('base extra')
	})

	it('resolves Tailwind conflicts', () => {
		expect(cn('px-4', 'px-2')).toBe('px-2')
	})

	it('handles empty inputs', () => {
		expect(cn()).toBe('')
	})

	it('handles undefined and null', () => {
		expect(cn('foo', undefined, null, 'bar')).toBe('foo bar')
	})
})

describe('getRandomIntUpTo', () => {
	it('returns a number between 0 and max inclusive', () => {
		for (let i = 0; i < 100; i++) {
			const result = getRandomIntUpTo(5)
			expect(result).toBeGreaterThanOrEqual(0)
			expect(result).toBeLessThanOrEqual(5)
			expect(Number.isInteger(result)).toBe(true)
		}
	})

	it('returns 0 when max is 0', () => {
		expect(getRandomIntUpTo(0)).toBe(0)
	})
})

describe('stringToBoolean', () => {
	it('returns true for "true"', () => {
		expect(stringToBoolean('true')).toBe(true)
	})

	it('returns true for "1"', () => {
		expect(stringToBoolean('1')).toBe(true)
	})

	it('returns true for "yes"', () => {
		expect(stringToBoolean('yes')).toBe(true)
	})

	it('is case-insensitive', () => {
		expect(stringToBoolean('TRUE')).toBe(true)
		expect(stringToBoolean('Yes')).toBe(true)
	})

	it('trims whitespace', () => {
		expect(stringToBoolean('  true  ')).toBe(true)
	})

	it('returns false for "false"', () => {
		expect(stringToBoolean('false')).toBe(false)
	})

	it('returns false for null', () => {
		expect(stringToBoolean(null)).toBe(false)
	})

	it('returns false for undefined', () => {
		expect(stringToBoolean(undefined)).toBe(false)
	})

	it('returns false for empty string', () => {
		expect(stringToBoolean('')).toBe(false)
	})

	it('returns false for arbitrary strings', () => {
		expect(stringToBoolean('hello')).toBe(false)
	})
})

describe('booleanToString', () => {
	it('returns "true" for true', () => {
		expect(booleanToString(true)).toBe('true')
	})

	it('returns "false" for false', () => {
		expect(booleanToString(false)).toBe('false')
	})

	it('returns "false" for null', () => {
		expect(booleanToString(null)).toBe('false')
	})

	it('returns "false" for undefined', () => {
		expect(booleanToString(undefined)).toBe('false')
	})
})
