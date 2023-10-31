import React from 'react';
import {render, screen,fireEvent} from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders SpeciesName Component', () => {
    const mockOnChangeSpeciesName = jest.fn();
    render(<SpeciesName speciesName={'humans'} onChangeSpeciesName={mockOnChangeSpeciesName} />);
        
    const speciesNameLabel = screen.getByLabelText('Species Name:');
    expect(speciesNameLabel).toBeInTheDocument();

    const speciesNameElement = screen.getByLabelText('Species Name:');
    expect(speciesNameElement.getAttribute('value')).toBe('humans');
    fireEvent.change(speciesNameElement,{target:{value:'aliens'}});
    expect(mockOnChangeSpeciesName).toHaveBeenCalledWith('aliens');   
      
})