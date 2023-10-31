import React from 'react';
import {render, screen} from '@testing-library/react';
import FormDataDisplay from './FormDataDisplay';

test('renders from data correctly', () => {
    const props = {
        speciesName: 'human',
        planetName: 'earth',
        numberOfBeings: '79000000',
        question: '4',
        reasonForSparing: 'Filled form correctly',
    };
    render(<FormDataDisplay {...props} />);
    expect(screen.getByText('Species Name: human')).toBeInTheDocument();
    expect(screen.getByText('Planet Name: earth')).toBeInTheDocument();
    expect(screen.getByText('Number of Beings: 79000000')).toBeInTheDocument();
    expect(screen.getByText('What is 2+2: 4')).toBeInTheDocument();
    expect(screen.getByText('Reason for sparing: Filled form correctly')).toBeInTheDocument();
});