import UpArrow from "./upArrow";
import WhatsAppLink from "./whatsappLink";

const FixBoxs = () => {
  return (
    <div className="z-[5] w-full h-fit fixed bottom-5 left-0 px-5 flex-bet">
      <div>
        <UpArrow />
      </div>
      <div>
        <WhatsAppLink />
      </div>
    </div>
  );
};
export default FixBoxs;
