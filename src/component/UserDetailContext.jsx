// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sequenceStep, setSequenceStep] = useState(0);
  const [bname, setBname] = useState('');
  const [musicType, setMusicType] = useState("");

  const updateGender = (newGender) => {
    setGender(newGender);
  };

  const updateMusicType = (type) => {
    setMusicType(type);
  }

  const updateLoggedIn = (status) => {
    setIsLoggedIn(status);
  };

  const updateBirthdayBoyName = (name) => {
    setBname(name);
  };


  const updateSequenceStep = (sequence) => {
    setSequenceStep(sequence);
  };

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <UserContext.Provider value={{ bname , updateMusicType , musicType , updateBirthdayBoyName ,updateSequenceStep , updateLoggedIn , isLoggedIn ,gender , sequenceStep , name, updateGender, updateName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
