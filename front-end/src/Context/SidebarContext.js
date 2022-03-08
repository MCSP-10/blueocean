import { createContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    return (
        <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
    );
};

export default SidebarContext;
