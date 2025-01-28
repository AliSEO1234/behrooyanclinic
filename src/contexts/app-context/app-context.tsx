// "use client"
// import { createContext, ReactNode, useContext, useState } from "react";

// type AppContextType = {
//   locale: "ru" | "en";
//   setLocale: (locale: "ru" | "en") => void;
// };

// const AppContext = createContext<AppContextType | undefined>(undefined);
// const AppProvider = ({ children }: { children: ReactNode }) => {
//   const [locale, setLocale] = useState<"ru" | "en">("en");
//   return (
//     <AppContext.Provider value={{ locale, setLocale }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useAppContext = (): AppContextType => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("Error in App Context");
//   }
//   return context;
// };

// export { AppProvider, useAppContext };
