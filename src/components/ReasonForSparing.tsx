import React,{useState} from 'react';

export interface ReasonForSparingProps {
    reasonForSparing : string;
    onChangeReasonForSparing : (value: string) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = 
    ({reasonForSparing, onChangeReasonForSparing}) => {
    const[reasonForSparingError, setReasonForSparingError] = useState('');
    function validateReasonForSparing(name: string) {
        const regex = /^[a-zA-Z ]{17,153}$/;
        return regex.test(name);
      }
    
    function handleReasonForSparingChange(event: { target: { value: any; }; }){
        const newName = event.target.value;
        onChangeReasonForSparing(newName);
        if (!validateReasonForSparing(newName)) {
            setReasonForSparingError('Reason For Sparing must be between 17 and 153 characters, and contain only letters.');
        }else{
            setReasonForSparingError('');
        }
    }

    return (
        <>
            <label htmlFor='reasonForSparing'>Reason For Sparing: </label>
            <textarea id='reasonForSparing'
                      value={reasonForSparing}
                      onChange={handleReasonForSparingChange}
            />
            {reasonForSparingError && <div className='error-message'>{reasonForSparingError}</div>}
        </>
    );
};

export default ReasonForSparing;