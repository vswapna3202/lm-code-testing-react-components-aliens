import React, {useState} from 'react';

export interface NumberOfBeingsProps {
    numberOfBeings : string;
    onChangeNumberOfBeings: (value: string) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = 
    ({numberOfBeings, onChangeNumberOfBeings}) => {
    
    const [numberOfBeingsError, setNumberOfBeingsError] = useState('');
    
    function validateNumberOfBeings(name: string){
      const regex = /^(?:[1-9]\d{0,8}|1000000000)$/;      
      return regex.test(name);
    }

    function handleNumberOfBeingsChange(event: { target: { value: string; }; }){
      const newName = event.target.value;
      onChangeNumberOfBeings(newName);
      if (!validateNumberOfBeings(newName)){
        setNumberOfBeingsError('Number of beings should be a number between 1 and 1000000000');
      }else{
        setNumberOfBeingsError('');
      }
    } 
    return (
      <>
        <label htmlFor='numberOfBeings'>Number of Beings:</label>
        <input  key='numberOfBeings' 
                id='numberOfBeings'
                type='text'
                value={numberOfBeings}
                onChange={handleNumberOfBeingsChange}
        />    
        {numberOfBeingsError && (<div className='error-message' style={{color:'red'}}>{numberOfBeingsError}</div>)}    
      </> )        
};

export default NumberOfBeings;