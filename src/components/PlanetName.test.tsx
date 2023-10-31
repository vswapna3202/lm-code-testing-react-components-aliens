import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import PlanetName from './PlanetName'

test('renders PlanetName Component', () => {
    const mockOnChangePlanetName = jest.fn();
    
    render(<PlanetName planetName={'earth'} onChangePlanetName={mockOnChangePlanetName} />);
        
    const planetNameLabel = screen.getByLabelText('Planet Name:');
    expect(planetNameLabel).toBeInTheDocument();

    const planetNameElement = screen.getByLabelText('Planet Name:');
    expect(planetNameElement.getAttribute('value')).toBe('earth');
    fireEvent.change(planetNameElement,{target:{value:'mars'}});
    expect(mockOnChangePlanetName).toHaveBeenCalledWith('mars');
    
      
})