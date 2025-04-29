import bundle from "@/assets/images/icons/bundle.svg";
import ImgFetcher from "../imgFetcher";
import { BundleIconType } from "@/types/infoHealth/bundleIcon";
const BundleIcon = ({ destination , className, order }: BundleIconType) => {
  return (
    <div
      className={`${
        destination === "top" ? "rotate-180" : ""
      } ${ order ? `info__icon-container--${ order }` : "" } bg-rose-400 w-1 relative`}
    >
      <div className={`absolute left-0 -translate-x-1/2 -translate-y-1/2 ${className && className}`}>
        <ImgFetcher src={bundle} />
      </div>
    </div>
  );
};
export default BundleIcon;
