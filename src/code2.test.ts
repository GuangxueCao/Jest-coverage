import { describe, expect, test } from '@jest/globals';
import { runTask2 } from './code2'

describe('code', () => {
  test('runTask2', () => {
    const result = runTask2(true)
    expect(result).toBe(true)
  })
})

