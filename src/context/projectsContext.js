import React, { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

//Chares state with all its children
export const ProjectProvider = ({ children }) => {
    
  //Project State 
  const [projects, setProjects] = useState()

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects, 
      }}>
      {children}
    </ProjectContext.Provider>
  );

}


