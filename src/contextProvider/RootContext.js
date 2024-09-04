import React, { createContext, useState, useContext } from 'react';

const RootContext = createContext();

export const RootProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('list');
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <RootContext.Provider value={{ activeTab, setActiveTab, openFilter, setOpenFilter }}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => {
  return useContext(RootContext);
};