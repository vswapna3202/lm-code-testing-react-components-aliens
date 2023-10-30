import React from 'react';

export interface NumberOfBeingsProps {
    numberOfBeings : string;
    onChangeNumberOfBeings: (value: string) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = 
    ({numberOfBeings, onChangeNumberOfBeings}) => {
    return (
      <>
        <label htmlFor='numberOfBeings'>Number of Beings:</label>
        <input  key='numberOfBeings' 
                id='numberOfBeings'
                type='text'
                value={numberOfBeings}
                onChange={(e) => onChangeNumberOfBeings(e.target.value)}
        />        
      </> )        
};

export default NumberOfBeings;