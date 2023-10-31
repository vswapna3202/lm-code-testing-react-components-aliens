import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('renders ReasonForSparing Component', () => {
    const mockOnChangeReasonForSparing = jest.fn();
    render(<ReasonForSparing reasonForSparing={'Form filled correctly!'} onChangeReasonForSparing={mockOnChangeReasonForSparing} 
    />);
        
    const reasonForSparingLabel = screen.getByLabelText('Reason For Sparing:');
    expect(reasonForSparingLabel).toBeInTheDocument();

    const reasonForSparingElement = screen.getByLabelText('Reason For Sparing:') as HTMLTextAreaElement;
    expect(reasonForSparingElement.value).toBe('Form filled correctly!');
    fireEvent.change(reasonForSparingElement, { target: { value: 'Form filled incorrectly!' } });
    expect(mockOnChangeReasonForSparing).toHaveBeenCalledWith('Form filled incorrectly!');  
})