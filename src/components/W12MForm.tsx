import React, { ChangeEvent, FormEvent, useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import Question from './Question';
import ReasonForSparing from './ReasonForSparing';
import FormDataDisplay from './FormDataDisplay';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');	
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState('7900000000');
	const[question, setQuestion] = useState('Not 4');
	const[reasonForSparing, setReasonForSparing] = useState('Correctly filled Form!')
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsSubmitted(true);
    };
	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
			<form>
				<div className='form-data-display'>
					<SpeciesName speciesName={speciesName} 
					onChangeSpeciesName={(value) => setSpeciesName(value)} />
					<br/>
					<PlanetName planetName={planetName}
					onChangePlanetName={(value) => setPlanetName(value)} />
					<br/>
					<NumberOfBeings numberOfBeings={numberOfBeings}
					onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} /> 
					<br/>
					<Question question={question}
					onChangeQuestion={(value) => setQuestion(value)} />
					<br/>
					<ReasonForSparing reasonForSparing={reasonForSparing}
					onChangeReasonForSparing={(value) => setReasonForSparing(value)}
					/>		 
					<br/>
				</div>
			
				<button type='submit' data-testid='submit-button' onClick={handleSubmit}>Submit Form</button>
			</form>
			<div data-testid='form-data-display' className='form-data-display'>
			{isSubmitted && (
				<FormDataDisplay
					speciesName={speciesName}
					planetName={planetName}
					numberOfBeings={numberOfBeings}
					question={question} 
					reasonForSparing={reasonForSparing}					
				/>
			)}		
			</div>				
		</section>
	);
};	
export default W12MForm;
