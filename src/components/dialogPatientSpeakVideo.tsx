"use client";
import VideoPlayer from "@/features/services/videoPlayer/videoPlayer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useAppContext } from "@/contexts/app-context/app-context";

const DialogPatientSpeakVideo = () => {
  const { youtubeShow, setYoutubeShow, patientSrcActive } = useAppContext();
  return (
    <Dialog open={youtubeShow} onOpenChange={setYoutubeShow}>
      <DialogContent className="flex-cen bg-transparent border-none shadow-none" onClick={() =>setYoutubeShow(false)}>
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div onClick={(e)=>e.stopPropagation()}>
        <VideoPlayer
          className="!rounded-[10] w-[350px] h-[200px] s1280:w-[890px] s1280:h-[501px] border-none shadow-none"
          showLogo={false}
          src={
            patientSrcActive ||
            "https://www.youtube.com/embed/VEqbI7eBgJY?enablejsapi=1&rel=0"
          }
        />

        </div>
      </DialogContent>
    </Dialog>
  );
};
export default DialogPatientSpeakVideo;
