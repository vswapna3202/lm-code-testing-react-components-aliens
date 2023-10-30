import React from 'react';
import {SpeciesNameProps} from './SpeciesName';
import {PlanetNameProps} from './PlanetName';
import {NumberOfBeingsProps} from './NumberOfBeings';
import {QuestionProps} from './Question';
import {ReasonForSparingProps} from './ReasonForSparing';

type SpeciesNameDisplayProps = Omit<SpeciesNameProps, 'onChangeSpeciesName'>;
type PlanetNameDisplayProps = Omit<PlanetNameProps, 'onChangePlanetName'>;
type NumberOfBeingsDisplayProps = Omit<NumberOfBeingsProps, 'onChangeNumberOfBeings'>;
type QuestionDisplayProps = Omit<QuestionProps, 'onChangeQuestion'>;
type ReasonForSparingDisplayProps = Omit<ReasonForSparingProps, 'onChangeReasonForSparing'>;
interface FormDataDisplayProps extends 
SpeciesNameDisplayProps, PlanetNameDisplayProps, NumberOfBeingsDisplayProps, QuestionDisplayProps, ReasonForSparingDisplayProps{    
}

const FormDataDisplay : React.FC<FormDataDisplayProps> = (props) => {
    return(
        <>
            <div className='form-data-display'>
              <h2>Form Data Display:</h2>
              <ul>
                <li>Species Name: {props.speciesName}</li>
                <li>Planet Name: {props.planetName}</li>
                <li>Number of Beings: {props.numberOfBeings}</li>
                <li>What is 2+2: {props.question}</li>
                <li>Reason for sparing: {props.reasonForSparing}</li>
              </ul>
            </div>
        </>
    );
};

export default FormDataDisplay;