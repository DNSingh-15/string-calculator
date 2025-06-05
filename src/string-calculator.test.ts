import { add } from './string-calculator';

describe('String Calculator', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
});