import React, { createContext, useState, useContext } from 'react';
import { useContentLayout } from '../hooks/useContentLayout';

const RootContext = createContext();

export const RootProvider = ({ children }) => {
  const {activeTab , setActiveTab , openFilter, setOpenFilter , user , setUser , roles  , loading , handleLogout , authorized , setLoading} = useContentLayout();

  return (
    <RootContext.Provider value={{ activeTab, setActiveTab, openFilter, setOpenFilter , setUser , user , roles , loading , handleLogout , authorized , setLoading}}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => {
  return useContext(RootContext);
};