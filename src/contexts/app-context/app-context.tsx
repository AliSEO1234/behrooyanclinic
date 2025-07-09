"use client";
import { ImgType } from "@/types/about/galleryAbout";
import { PhotoType } from "@/types/footer/dialogFooter";
import { VideoDataType } from "@/types/videoPlayer/videoTypes";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
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
  setFooterImages: Dispatch<SetStateAction<PhotoType | undefined>>;
  popUpForm: boolean;
  setPopUpForm: Dispatch<SetStateAction<boolean>>;
  aboutGallery: boolean;
  aboutGalleryIndex: string;
  setAboutGallery: Dispatch<SetStateAction<boolean>>;
  setAboutGalleryIndex: Dispatch<SetStateAction<string>>;
  setImgsAbout: Dispatch<SetStateAction<ImgType[]>>;
  imgsAbout: ImgType[];
  hamburgerMenu: boolean;
  setHamburgerMenu: Dispatch<SetStateAction<boolean>>;
  patientSrcActive: string | null;
  setPatientSrcActive: Dispatch<SetStateAction<string | null>>;
  youtubeShow: boolean;
  setYoutubeShow: Dispatch<SetStateAction<boolean>>;
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
  const [popUpForm, setPopUpForm] = useState<boolean>(false);
  const [aboutGallery, setAboutGallery] = useState<boolean>(false);
  const [aboutGalleryIndex, setAboutGalleryIndex] = useState<string>("");
  const [imgsAbout, setImgsAbout] = useState<ImgType[]>([]);
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const [patientSrcActive, setPatientSrcActive] = useState<string | null>(null);
  const [youtubeShow, setYoutubeShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setPopUpForm(true);
    }, 15000);

    setTimeout(() => {
      setPopUpForm(true);
    }, 300000);
  }, []);
  return (
    <AppContext.Provider
      value={{
        youtubeShow,
        setYoutubeShow,
        patientSrcActive,
        setPatientSrcActive,
        hamburgerMenu,
        setHamburgerMenu,
        aboutGallery,
        setAboutGallery,
        aboutGalleryIndex,
        setAboutGalleryIndex,
        imgsAbout,
        setImgsAbout,
        popUpForm,
        setPopUpForm,
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
