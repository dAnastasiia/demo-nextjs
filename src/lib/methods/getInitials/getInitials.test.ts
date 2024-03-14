import { expect, describe, it } from 'vitest';

import getInitials, {
  NAME_WORDS_LENGTH,
  DEFAULT_INITIALS,
} from './getInitials';

describe('getInitials', () => {
  it(`should return two first letters of name if name length is more than ${NAME_WORDS_LENGTH} words`, () => {
    const expected = 'JD';
    const result = getInitials('Jimmy Dog');

    expect(result).toBe(expected);
  });

  it(`should return one first letter of name if name length is less than ${NAME_WORDS_LENGTH} words`, () => {
    const expected = 'B';
    const result = getInitials('bc');

    expect(result).toBe(expected);
  });

  it(`should return ${DEFAULT_INITIALS} if name is missing`, () => {
    const expected = DEFAULT_INITIALS;
    const result = getInitials('');

    expect(result).toBe(expected);
  });
});
