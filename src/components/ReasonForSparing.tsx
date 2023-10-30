import React from 'react';

export interface ReasonForSparingProps {
    reasonForSparing : string;
    onChangeReasonForSparing : (value: string) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = 
    ({reasonForSparing, onChangeReasonForSparing}) => {
    return (
        <>
            <label htmlFor='reasonForSparing'>Reason For Sparing</label>
            <textarea id='reasonForSparing'
                      value={reasonForSparing}
                      onChange={(e) => onChangeReasonForSparing(e.target.value)}
            />
        </>
    );
};

export default ReasonForSparing;