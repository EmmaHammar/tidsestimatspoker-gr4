import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {

  //Toggles Sockerbit
  const [toggle, setToggle] = useState(false);

  //SelectedSockerbit State
  const [selectedSockerbit, setSelectedSockerbit] = useState();

  //Issue State
  const [issues, setIssues] = useState({
    id: '',
    issueTitle: '',
    desc: '',
    color: '',
    participants: []
  });

  //Participant State
  const [participants, setParticipants] = useState({
    id: '',
    name: '',
    color: '',
    estTime: 0
  });

  //Empty Issue State
  const emptyIssues = () => {

    setIssues({
      id: '',
      issueTitle: '',
      desc: '',
      color: '',
      participants: []
    })
  }

  //Empty Participants State
  const emptyParticipants = () => {

    setParticipants({
      id: '',
      name: '',
      color: '',
      estTime: 0
    })
  }

  return (
    <InputContext.Provider
      value={{
        issues,
        setIssues,
        participants,
        setParticipants,
        emptyParticipants,
        emptyIssues,
        toggle, 
        setToggle,
        selectedSockerbit, 
        setSelectedSockerbit
      }}
    >
      {children}
    </InputContext.Provider>
  );

}


