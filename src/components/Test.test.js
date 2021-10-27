import { render, screen } from '@testing-library/react';
import Test from './Test';

describe('Test component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Test />);
    
    // Act 
    // ..nothing

    // Assert
    const headerElement = screen.getByText('Hello World', { exact: false });
    expect(headerElement).toBeInTheDocument();
  });
});
