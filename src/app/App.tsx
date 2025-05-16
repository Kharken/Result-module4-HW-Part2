
import { Signin } from '../components/signin/Signin';
import { Signup } from '../components/signup/Signup';
import './App.css';
import { useState } from 'react';

export const App = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  return (
    <>
      <Signin disabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled}/>
      <Signup disabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled}/>
    </>
  );
};
