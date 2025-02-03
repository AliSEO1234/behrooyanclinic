import Link from "next/link";

const SeeAll = ({ link }: { link: string }) => {
  return (
    <Link
      className="border-[2px] rounded-[40px] border-[#00979A] text-[#00979A] px-4 h-[40px] w-[89px] s1280:w-[194px] s1280:h-[54px] text-[14px] s1280:text-[20px] flex-cen font-semibold"
      href={link}
    >
      See All
    </Link>
  );
};
export default SeeAll;
