import React from 'react';

export interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    return (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input key='speciesName' 
               id='speciesName' 
               type='text' 
               value={speciesName} 
               onChange={(e) => onChangeSpeciesName(e.target.value)}                
        />
    </> )
};

export default SpeciesName;