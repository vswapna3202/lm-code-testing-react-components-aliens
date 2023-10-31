import React from 'react';
import {render, screen} from '@testing-library/react';
import PlanetName from './PlanetName'

test('renders PlanetName Component', () => {
    
    render(<PlanetName planetName={'earth'} onChangePlanetName={function (value: string): void {
        throw new Error('Function not implemented.');
    } } />);
        
    const planetNameLabel = screen.getByLabelText('Planet Name:');
    expect(planetNameLabel).toBeInTheDocument();

    const planetNameElement = screen.getByLabelText('Planet Name:');
    expect(planetNameElement.getAttribute('value')).toBe('earth');
    
      
})