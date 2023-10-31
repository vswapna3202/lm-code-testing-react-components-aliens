import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import PlanetName from './PlanetName'

test('renders PlanetName Component', () => {
    const mockOnChangePlanetName = jest.fn();
    
    render(<PlanetName planetName={'earth'} onChangePlanetName={mockOnChangePlanetName} />);
    const mockOnChangeSpeciesName = jest.fn();  
    const planetNameLabel = screen.getByLabelText('Planet Name:');
    expect(planetNameLabel).toBeInTheDocument();

    const planetNameElement = screen.getByLabelText('Planet Name:');
    expect(planetNameElement.getAttribute('value')).toBe('earth');
    mockOnChangeSpeciesName.mockReturnValue(['']);
    fireEvent.change(planetNameElement,{target:{value:'mars'}});
    expect(mockOnChangePlanetName).toHaveBeenCalledWith('mars');
    mockOnChangeSpeciesName.mockReturnValue(['']);
    fireEvent.change(planetNameElement,{target:{value:'%%%'}});
    const errorMessage = 'Planet name should be between 2 and 49 characters, and contain only letters';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    
      
})