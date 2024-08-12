const fs = require('fs');
const inquirer = require('inquirer');

class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

function generateSVG({ shape, shapeColor, text, textColor }) {
    let shapeInstance;

    switch (shape) {
        case 'triangle':
            shapeInstance = new Triangle();
            break;
        case 'circle':
            shapeInstance = new Circle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
        default:
            throw new Error('Invalid shape');
    }

    shapeInstance.setColor(shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
    `.trim();

    fs.writeFileSync('./examples/logo.svg', svgContent);
}

function run() {
    const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the shape:'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text to display:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text:'
        }
    ];

    inquirer.prompt(questions).then(answers => {
        generateSVG(answers);
    });
}

module.exports = { generateSVG, run, Triangle, Circle, Square };