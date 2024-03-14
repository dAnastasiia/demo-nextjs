/**
 * Returns initials of passed name.
 *
 * @param name - Name value.
 * @returns Initials if the name was passed, default value if not.
 */

export const NAME_WORDS_LENGTH = 2;
export const DEFAULT_INITIALS = 'A';

export default (name?: string) => {
  if (!name) return DEFAULT_INITIALS;

  const capitalizedNameArray = name.toUpperCase().split(' ');
  const isShortName = capitalizedNameArray.length < NAME_WORDS_LENGTH;
  const firstLetter = capitalizedNameArray[0][0];

  if (isShortName) return firstLetter;

  const secondLetter = capitalizedNameArray[1][0];

  return `${firstLetter}${secondLetter}`;
};
