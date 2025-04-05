import { QuestionAccoType } from "@/types/subNestedTypes/tableOfContentType";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface NewQuestionType extends QuestionAccoType {
  item: number;
}
const QuestionAcco = ({ answer, item, question }: NewQuestionType) => {
  return (
    <AccordionItem
      className="col-span-12 4xl:col-span-6 h-fit bg-white rounded-[20px] overflow-hidden s1280:rounded-[20px] border-none shadow-[0px_0px_4px_0px_#00A8A940]"
      value={item.toString()}
    >
      <AccordionTrigger className="hover:no-underline bg-white font-semibold text-[14px] s1280:text-[16px] s1512:text-[18px] s1728:text-[20px] text-[#474744] px-6">
        {question}
      </AccordionTrigger>
      <AccordionContent className="bg-white py-4 px-6 mt-2 font-light text-[12px] s1280:text-[14px] s1512:text-[16px] s1728:text-[18px] text-[#333333] s1280:leading-[147%]">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
export default QuestionAcco;
