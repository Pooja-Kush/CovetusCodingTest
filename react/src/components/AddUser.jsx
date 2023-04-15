import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppState';

const AddUser = ({ closeModal, userResult }) => {
  const { addUser } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState(false);
  const [showPregrancyField, setShowPregrancyField] = useState(false);

  const pregnancyField = (gender, age) => {
    setGender(gender);
    setAge(age)
    if(gender == 'Female' && age > 18){
      setShowPregrancyField(true);
    }else{
      setShowPregrancyField(false);
    }
  }

  const validateInputs = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !weight || !height || !gender) return setError('All fields are required');

    addUser({ firstName, lastName, age, weight, height, gender});
    userResult({ firstName, lastName, age, weight, height, gender});
    closeModal(1);
  };

  return (
    <>    
      <form onSubmit={validateInputs}>
        <input
          type='text'
          placeholder='First Name'
          pattern='^[a-zA-Z]*$'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />

        <input
          type='text'
          placeholder='Last Name'
          pattern='^[a-zA-Z]*$'
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />

        <input
          type='number'
          placeholder='Age'
          onChange={(e) => pregnancyField(gender, e.target.value)}
        />
        <br />
        <br />

        <label>Gender</label>
        <br />
        <input type="radio" value="Male" name="gender"
          onChange={(e) => pregnancyField(e.target.value, age)} /> Male
        <input type="radio" value="Female" name="gender"
          onChange={(e) => pregnancyField(e.target.value, age)} /> Female
        <input type="radio" value="Other" name="gender"
          onChange={(e) => pregnancyField(e.target.value, age)} /> Other
        <br />
        <br />

        { showPregrancyField ? 
        <>          
          <input
            type='text'
            placeholder='Are you pregnant? (optional)'
            pattern='^[a-zA-Z]*$'
          />
          <br />
          <br />
        </> : null }

        <input
          type='text'
          placeholder='Weight in kg'
          pattern='^\d*\.?\d*$'
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <br />

        <input
          type='text'
          placeholder='Height in meter'
          pattern='^\d*\.?\d*$'
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <br />

        <button type='submit'>Submit</button>
        &nbsp;   &nbsp;    &nbsp;
        <button type='button' onClick={() => closeModal(0)}>Cancel</button>

        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddUser;