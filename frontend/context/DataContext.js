import { createContext, useState } from "react";

export const AppContext = createContext();

const AppWrapper = ({children}) => {
    const [activeTab, setActiveTab] = useState("channels")

    const changeActiveTab = (currentTab) => {
        setActiveTab(currentTab)
    };

    const sharedState = {
        activeTab,
        changeActiveTab
    };

    return (
        <AppContext.Provider value={{sharedState}}>
            {children}
        </AppContext.Provider>
    )
};

export default AppWrapper;