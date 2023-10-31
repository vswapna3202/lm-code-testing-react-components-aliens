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
    mockOnChangeSpeciesName.mockReturnValue(['']);
    fireEvent.change(speciesNameElement,{target:{value:'aliens'}});
    expect(mockOnChangeSpeciesName).toHaveBeenCalledWith('aliens');   
    mockOnChangeSpeciesName.mockReturnValue(['']);
    fireEvent.change(speciesNameElement,{target:{value:'123'}});
    expect(mockOnChangeSpeciesName).toHaveBeenCalledWith('123');
    const errorMessage = 'Species Name must be between 3 and 23 characters, and contain only letters.';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    
      
})