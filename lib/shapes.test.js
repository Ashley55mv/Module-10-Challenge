const { Triangle, Circle, Square } = require('./shapes');

describe('Shape rendering', () => {
    test('renders a triangle with the correct color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('renders a circle with the correct color', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('renders a square with the correct color', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="green" />');
    });
});