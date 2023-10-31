import React, { useState } from 'react';

export interface QuestionProps{
    question : string;
    onChangeQuestion: (value : string) => void;
}

const Question : React.FC<QuestionProps> = ({question, onChangeQuestion}) => {
    const[questionError, setQuestionError] = useState(false);

    const handleQuestionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedQuestion = e.target.value;
        onChangeQuestion(selectedQuestion);
        if (selectedQuestion === 'Not 4'){
            setQuestionError(true);
        }else{
            setQuestionError(false);
        }
    }
    return (
        <>
            <label htmlFor='question'>What is 2+2: </label>
            <select id='question'
                    value={question}
                    onChange={handleQuestionChange}
            >
                <option value='Not 4'>Not 4</option>
                <option value='4'>4</option>
            </select>    
            {questionError && (
            <div style={{color: 'red'}}>
                Error: Please select 4
            </div>
            )}
        </>
    )
};

export default Question;