import React from 'react';
import {render, screen} from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders SpeciesName Component', () => {
    
    render(<SpeciesName speciesName={'humans'} onChangeSpeciesName={function (value: string): void {
        throw new Error('Function not implemented.');
    } } />);
        
    const speciesNameLabel = screen.getByLabelText('Species Name:');
    expect(speciesNameLabel).toBeInTheDocument();

    const speciesNameElement = screen.getByLabelText('Species Name:');
    expect(speciesNameElement.getAttribute('value')).toBe('humans');
    
      
})