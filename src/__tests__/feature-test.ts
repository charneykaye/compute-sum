import {describe, expect, test} from '@jest/globals';
import {computeSum} from '../feature';

const jestConsole = console

beforeEach(() => {
  global.console = require('console')
})

afterEach(() => {
  global.console = jestConsole
})

describe('Feature', () => {
  test('computeSum', async () => {
    expect(computeSum(1, 2)).toBe(3)
  })
})
