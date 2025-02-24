"use client";
import { PhotoType } from "@/types/footer/dialogFooter";
import { VideoDataType } from "@/types/videoPlayer/videoTypes";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AppContextType = {
  locale: "ru" | "en";
  setLocale: (locale: "ru" | "en") => void;
  activeVideoTreat: VideoDataType | null;
  setActiveVideoTreat: (video: VideoDataType | null) => void;
  footerDialog: boolean;
  setFooterDialog: Dispatch<SetStateAction<boolean>>;
  footerImages: PhotoType | undefined;
  setFooterImages: Dispatch<SetStateAction<PhotoType| undefined>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<"ru" | "en">("en");
  const [activeVideoTreat, setActiveVideoTreat] =
    useState<VideoDataType | null>(null);
  const [footerDialog, setFooterDialog] = useState<boolean>(false);
  const [footerImages, setFooterImages] = useState<PhotoType | undefined>(
    undefined
  );
  return (
    <AppContext.Provider
      value={{
        footerImages,
        setFooterImages,
        locale,
        setLocale,
        activeVideoTreat,
        setActiveVideoTreat,
        footerDialog,
        setFooterDialog,
      }}
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
