import React,{useState} from 'react';

export interface PlanetNameProps {
    planetName: string;
    onChangePlanetName: (value: string) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => {
    const [planetNameError, setPlanetNameError] = useState('');
    function validatePlanetName(name: string){
      const regex = /^[a-zA-Z0-9]{2,49}$/;
      return regex.test(name);
    }

    function handlePlanetNameChange(event: { target: { value: string; }; }){
      const newName = event.target.value;
      onChangePlanetName(newName);
      if (!validatePlanetName(newName)){
        setPlanetNameError('Planet name should be between 2 and 49 characters, and contain only letters');
  
      }else{
        setPlanetNameError('');
      }
    }

    return (
        <>
          <label htmlFor='planetName'>Planet Name: </label>
          <input key='planetName'
                 id='planetName'
                 type='text'
                 value={planetName}
                 onChange={handlePlanetNameChange}
          />       
          {planetNameError && (<div className='error-message' style={{color:'red'}}>{planetNameError}</div>)}
        </> )
};

export default PlanetName;