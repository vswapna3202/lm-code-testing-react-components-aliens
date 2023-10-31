import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('renders NumberOfBeings Component', () => {
    const mockOnChangeNumberOfBeings = jest.fn();

    render(<NumberOfBeings numberOfBeings={'7900000000'} onChangeNumberOfBeings={mockOnChangeNumberOfBeings} />        
    );
   
    
    const numberOfBeingsLabel = screen.getByLabelText('Number of Beings:');
    expect(numberOfBeingsLabel).toBeInTheDocument();
    mockOnChangeNumberOfBeings.mockReturnValue(['']);

    const numberOfBeingsElement = screen.getByLabelText('Number of Beings:');
    expect(numberOfBeingsElement.getAttribute('value')).toBe('7900000000');
    mockOnChangeNumberOfBeings.mockReturnValue(['']);

    fireEvent.change(numberOfBeingsElement,{target:{value: -1}});
    const errorMessage = 'Number of beings should be a number between 1 and 1000000000';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
});    
      
