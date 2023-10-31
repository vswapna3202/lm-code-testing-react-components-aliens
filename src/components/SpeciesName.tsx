import React, {useState} from 'react';

export interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    const [speciesNameError, setSpeciesNameError] = useState('');
    
    function validateSpeciesName(name: string) {
        const regex = /^[a-zA-Z ]{3,23}$/;
        return regex.test(name);
      }
    
      function handleSpeciesNameChange(event: { target: { value: any; }; }){
        const newName = event.target.value;
        onChangeSpeciesName(newName);
        if (!validateSpeciesName(newName)) {
            setSpeciesNameError('Specials Name must be between 3 and 23 characters, and contain only letters.');
        }else{
            setSpeciesNameError('');
        }
    }
    
    return (
    <>
        <label htmlFor='speciesName'>Species Name: </label>
        <input key='speciesName' 
               id='speciesName' 
               type='text' 
               value={speciesName} 
               onChange={handleSpeciesNameChange}                
        />
        {speciesNameError && <div className="error-message">{speciesNameError}</div>}
    </> )
};

export default SpeciesName;