import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);
        //Act

        //Asset
        const helloWorldElement = screen.getByText('Hello World!', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to test if the button was not clicked', () => {
        //Arrange
        render(<Greeting />);
        //Asset
        const paragraphElement = screen.getByText('good to test', {exact: false});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders changed if the button was clicked', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Asset
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('do not render good to test if button was clicked', () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText('good to test', { exact: false });
        expect(outputElement).toBeNull();
    })
});

