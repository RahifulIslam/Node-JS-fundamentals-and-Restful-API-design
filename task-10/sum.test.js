const { sum, sub, mul } = require('./sum')

test('ads 1 + ads 2 is equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
});



test('Even number is', () => {
    expect(sub(2, 2)).toBe(0);
})

test('2 is even', () => {
    expect(mul(2, 2)).toBe(4);
})