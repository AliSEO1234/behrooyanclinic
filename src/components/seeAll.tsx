import Link from "next/link";

const SeeAll = ({ link }: { link: string }) => {
  return (
    <Link
      className="border-[2px] rounded-[40px] border-[#00979A] text-[#00979A] px-4 h-[40px] s1280:px-[71px] text-[14px] s1280:text-[20px] flex-cen font-semibold"
      href={link}
    >
      See All
    </Link>
  );
};
export default SeeAll;
