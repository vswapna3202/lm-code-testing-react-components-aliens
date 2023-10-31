import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Question from './Question';

test('renders Question Component', () => {
    const handleChange = jest.fn();
    
    render(<Question question={'Not 4'} onChangeQuestion={handleChange} />);
        
    const questionLabel = screen.getByLabelText('What is 2+2:');
    expect(questionLabel).toBeInTheDocument();

    const questionDropDown = screen.getByLabelText('What is 2+2:');    
    expect(questionDropDown).toBeInTheDocument();

    fireEvent.change(questionDropDown, { target: { value: '4' }}); 
    expect(handleChange).toHaveBeenCalledWith('4');
    handleChange.mockReturnValue([]);

    fireEvent.change(questionDropDown, { target: { value: 'Not 4' }}); 
    expect(handleChange).toHaveBeenCalledWith('Not 4');
    const errorMessage = 'Error: Please select 4';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
});
    
    