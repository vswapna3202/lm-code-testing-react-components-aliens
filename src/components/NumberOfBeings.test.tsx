import React from 'react';
import {render, screen} from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('renders NumberOfBeings Component', () => {
    
    render(<NumberOfBeings numberOfBeings={'7.9 billion'} onChangeNumberOfBeings={function (value: string): void {
        throw new Error('Function not implemented.');
    } } />        
    );
   
        
    const numberOfBeingsLabel = screen.getByLabelText('Number of Beings:');
    expect(numberOfBeingsLabel).toBeInTheDocument();

    const numberOfBeingsElement = screen.getByLabelText('Number of Beings:');
    expect(numberOfBeingsElement.getAttribute('value')).toBe('7.9 billion');
});    
      
