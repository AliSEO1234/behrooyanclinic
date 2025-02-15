import Link from "next/link";

const SeeAll = ({ link , className }: { link: string , className : string }) => {
  return (
    <Link
      className={`treatments__sea-all-button border-[2px] rounded-[40px] border-[#00979A] text-[#00979A] flex-cen font-semibold ${className ? className : ""}`}
      href={link}
    >
      See All
    </Link>
  );
};
export default SeeAll;
