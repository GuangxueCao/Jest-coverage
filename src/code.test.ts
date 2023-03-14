import {describe, expect, test} from '@jest/globals';
import { runTask1 } from './code'

describe('code', () => {
  test('runTask1', () => {
    const result = runTask1(true)
    expect(result).toBe(true)
  })
})

