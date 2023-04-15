import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';

const UserResult = ({ firstName, lastName, age, weight, height, gender, closeResultModal }) => {
  const wgt = parseFloat(weight);
  const hgt = parseFloat(height);
  const calculate_bmi = wgt / (hgt * hgt);
  const dec_bmi = calculate_bmi.toFixed(2);

  const bodyMassIndex = [
    {
      min: 0,
      max: 18.5,
      classification: 'Under Weight', 
    },
    {
      min: 18.50,
      max: 24.99,
      classification: 'Normal Weight', 
    },
    {
      min: 25,
      max: 29.99,
      classification: 'Over Weight', 
    },
    {
      min: 30,
      max: 34.99,
      classification: 'Obesity Class 1', 
    },
    {
      min: 35,
      max: 39.99,
      classification: 'Obesity Class 2', 
    },
    {
      min: 40,
      max: 10000,
      classification: 'Obesity Class 3', 
    },
  ];

  const bmi = bodyMassIndex.filter(c => { 
    if(parseFloat(dec_bmi) >= parseFloat(c.min) && parseFloat(dec_bmi) <= parseFloat(c.max)){
      return c.classification;
    }
  });
  const classification = bmi[0].classification;

  return (
    <>
      <div className="card userResult w-25 align-center">
        <h3>{firstName} {lastName}</h3>
        <p>Age - {age} | Gender - {gender}</p>
        <p>Weight - {weight} | Height - {height}</p>

        <p>BMI - {dec_bmi} | Classification - {classification}</p>
       
        <div>
           <progress value={ dec_bmi } max="100"> { dec_bmi } </progress>
        </div>
        &nbsp;   &nbsp;    &nbsp;
        <button type='button' onClick={() => closeResultModal()}>Close</button>
      </div>
    </>
  );
};

export default UserResult;