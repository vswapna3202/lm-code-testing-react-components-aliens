import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('renders ReasonForSparing Component', () => {
    const mockOnChangeReasonForSparing = jest.fn();
    render(<ReasonForSparing reasonForSparing={'Form filled correctly'} onChangeReasonForSparing={mockOnChangeReasonForSparing} 
    />);
        
    const reasonForSparingLabel = screen.getByLabelText('Reason For Sparing:');
    expect(reasonForSparingLabel).toBeInTheDocument();

    const reasonForSparingElement = screen.getByLabelText('Reason For Sparing:') as HTMLTextAreaElement;
    expect(reasonForSparingElement.value).toBe('Form filled correctly');
    mockOnChangeReasonForSparing.mockReturnValue([]);

    fireEvent.change(reasonForSparingElement, { target: { value: 'Form filled incorrectly1!' } });
    expect(mockOnChangeReasonForSparing).toHaveBeenCalledWith('Form filled incorrectly1!');  
    const errorMessage = 'Reason For Sparing must be between 17 and 153 characters, and contain only letters.';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
})