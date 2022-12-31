import getFullName from './getFullName';
import fc from 'fast-check';

describe('getFullName', () => {
    it('should return the full name with first name, last name', () => {
        fc.assert(
            fc.property(
                fc.record({
                    firstName: fc.string({
                        minLength: 1,
                    }),
                    lastName: fc.string({
                        minLength: 1,
                    })
                }),
                name => {
                    const fullName = getFullName(name);
                    const expectedFullName = `${name.firstName} ${name.lastName}`;
                    expect(fullName).toEqual(expectedFullName);
                }
            )
        );
    });

    it('should return the full name with first name, middleName and last name', () => {
        fc.assert(
            fc.property(
                fc.record({
                    firstName: fc.string({
                        minLength: 1,
                    }),
                    middleName: fc.string({
                        minLength: 1,
                    }),
                    lastName: fc.string({
                        minLength: 1,
                    })
                }),
                name => {
                    const fullName = getFullName(name);
                    const expectedFullName = `${name.firstName} ${name.middleName} ${name.lastName}`;
                    expect(fullName).toEqual(expectedFullName);
                }
            ))
    })
});
