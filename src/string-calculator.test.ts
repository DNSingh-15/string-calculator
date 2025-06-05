import { add } from './string-calculator';

describe('String Calculator', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
    it('should return the number itself when single number is passed', () => {
        expect(add('1')).toBe(1);
    });
});