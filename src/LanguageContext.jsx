import { createContext, useContext, useState } from "react";

const LenguageContext = createContext()

export const LenguageProvider = ({ children }) => {
    const [languaje, setLanguaje] = useState("en");

    const changeLanguage = (newLanguage) => {
        setLanguaje(newLanguage)
    }
    return (
        <LenguageContext.Provider value={{ languaje, changeLanguage }}>
            {children}
        </LenguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LenguageContext)