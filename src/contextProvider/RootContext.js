import React, { createContext, useState, useContext } from 'react';
import { useContentLayout } from '../hooks/useContentLayout';

const RootContext = createContext();

export const RootProvider = ({ children }) => {
  const {activeTab , setActiveTab , openFilter, setOpenFilter} = useContentLayout();

  return (
    <RootContext.Provider value={{ activeTab, setActiveTab, openFilter, setOpenFilter }}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => {
  return useContext(RootContext);
};