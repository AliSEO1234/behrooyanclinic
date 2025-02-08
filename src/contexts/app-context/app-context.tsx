"use client";
import { VideoDataType } from "@/types/videoPlayer/videoTypes";
import { createContext, ReactNode, useContext, useState } from "react";

type AppContextType = {
  locale: "ru" | "en";
  setLocale: (locale: "ru" | "en") => void;
  activeVideoTreat: VideoDataType | null;
  setActiveVideoTreat: (video: VideoDataType | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<"ru" | "en">("en");
  const [activeVideoTreat, setActiveVideoTreat] =
    useState<VideoDataType | null>(null);
  return (
    <AppContext.Provider
      value={{ locale, setLocale, activeVideoTreat, setActiveVideoTreat }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Error in App Context");
  }
  return context;
};

export { AppProvider, useAppContext };
