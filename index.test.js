import { app, buildCharacterCount, sortByCount } from './index';

const promptParagraph = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`;

describe('spotify challenge', () => {
  describe('buildCharacterCount', () => {
    it('returns case sensitive countOfEachChar', () => {
      expect(buildCharacterCount('Hhello world!', true)).toEqual({
        H: 1,
        h: 1,
        e: 1,
        l: 3,
        o: 2,
        ' ': 1,
        w: 1,
        r: 1,
        d: 1,
        '!': 1,
      });
    });
    it('returns case insensitive countOfEachChar', () => {
      expect(buildCharacterCount('Hhello world!', false)).toEqual({
        h: 2,
        e: 1,
        l: 3,
        o: 2,
        ' ': 1,
        w: 1,
        r: 1,
        d: 1,
        '!': 1,
      });
    });
  });
  describe('sortByCount', () => {
    it('sorts by count, building array of objects', () => {
      expect(sortByCount({ h: 2, e: 1, y: 1, '!': 5})).toEqual([
        { character: 'e', count: 1 },
        { character: 'y', count: 1 },
        { character: 'h', count: 2 },
        { character: '!', count: 5 },
      ]);
    })
  })
  describe('app', () => {
    it('returns empty array with no supplied paragraph', () => {
      expect(app('')).toEqual([]);
    });
    it('returns empty array if the minLength is less than or equal paragraph length', () => {
      expect(app('Hey!', 4)).toEqual([]);
    });
  });
});
