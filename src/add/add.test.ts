import add from './add';
import fc from "fast-check";

describe('add', () => {
    it('should add two numbers', () => {
        fc.assert(
            fc.property(fc.float(), fc.float(), (a, b) => {
                expect(add(a, b)).toBe(a + b);
            })
        )
    })
})