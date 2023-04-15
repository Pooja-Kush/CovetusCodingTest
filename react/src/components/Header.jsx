import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppState';
import AddUser from './AddUser';
import UserResult from './UserResult';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openResultModal, setOpenResultModal] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const closeModal = (status) => {
    setOpenModal(false);    
    if(status == 1){
      setOpenResultModal(!openResultModal);      
    }
  };

  const closeResultModal = () => {
    setOpenResultModal(false);
  };

  const openCreateUserPopup = () => {
    setOpenModal(!openModal);
    closeResultModal();
  }

  const userResult = (user) => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAge(user.age);
    setWeight(user.weight);
    setHeight(user.height);
    setGender(user.gender);
  }

  return (
    <>
      <header>
        <h1>BMI Calculator</h1>
        <button onClick={() => openCreateUserPopup()}>Create User</button>
        {openModal && <AddUser 
        closeModal={closeModal} 
        userResult={userResult} />}
      </header>
      {openResultModal && <UserResult 
          closeResultModal={closeResultModal} 
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
          weight={weight}
          height={height}
        />}
    </>
  );
};

export default Header;