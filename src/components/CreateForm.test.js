import React from 'react';
import ReactDOM from 'react-dom';
import CreateForm from './CreateForm';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CreateForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateForm />, div);
  });

  it('renders an input element', () => {
    // Arrange
    render(<CreateForm />);

    // Act
    // ..nothing

    // Assert
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('has value of a after input of a', () => {
    // Arrange
    render(<CreateForm />);

    // Act
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'a' } });

    // Assert
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('a');
  });

  it('does not have value of b after input of a', () => {
    // Arrange
    render(<CreateForm />);

    // Act
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'a' } });

    // Assert
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).not.toHaveValue('b');
  });
});
