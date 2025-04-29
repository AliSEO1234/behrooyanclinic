"use client";
import ImgFetcher from "../imgFetcher";
import cert1 from "@/assets/images/certificate/1.jpg";
import cert2 from "@/assets/images/certificate/2.jpg";
import cert3 from "@/assets/images/certificate/3.jpg";
import DialogFooterCom from "./dialogFooter";
import { PhotoType } from "@/types/footer/dialogFooter";
import { useAppContext } from "@/contexts/app-context/app-context";
const CertiLayout = () => {
  const { setFooterDialog, setFooterImages } = useAppContext();
  const certList: PhotoType[] = [
    {
      id: 0,
      src: cert1,
      key: "cert1",
    },
    {
      id: 1,
      src: cert2,
      key: "cert2",
    },
    {
      id: 2,
      src: cert3,
      key: "cert3",
    },
  ];
  return (
    <>
      <DialogFooterCom photos={certList} />
      <div className="flex items-center justify-between s1280:justify-start s1280:gap-x-8">
        <button
          onClick={() => {
            setFooterImages({
              id: 0,
              src: cert1,
              key: "cert1",
            });
            setFooterDialog(true);
          }}
          className="w-[136px] min-w-[136px] h-[99px] s390:w-[140px] s390:min-w-[140px] s1280:w-[132px] s1280:h-[95px] s1512:w-[171px] s1512:h-[124px] bg-[#72D6B2] p-1 rounded-[5px]"
        >
          <ImgFetcher width={700} height={700} className="object-cover" src={cert1} />
        </button>
        <button
          onClick={() => {
            setFooterImages({
              id: 1,
              src: cert2,
              key: "cert2",
            });
            setFooterDialog(true);
          }}
          className="w-[72px] min-w-[72px] h-[99px] s390:w-[75px] s390:min-w-[75px] s1280:w-[70px] s1280:h-[95px] s1512:w-[90px] s1512:h-[124px] bg-[#72D6B2] p-1 rounded-[5px]"
        >
          <ImgFetcher width={700} height={700} className="object-cover" src={cert2} />
        </button>
        <button
          onClick={() => {
            setFooterImages({
              id: 2,
              src: cert3,
              key: "cert3",
            });
            setFooterDialog(true);
          }}
          className="w-[72px] min-w-[72px] h-[99px] s390:w-[75px] s390:min-w-[75px] s1280:w-[70px] s1280:h-[95px] s1512:w-[90px] s1512:h-[124px] bg-[#72D6B2] p-1 rounded-[5px]"
        >
          <ImgFetcher width={700} height={700} className="object-cover" src={cert3} />
        </button>
      </div>
    </>
  );
};
export default CertiLayout;
