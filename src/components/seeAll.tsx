"use client"
import { useLocale } from "next-intl";
import Link from "next/link";

const SeeAll = ({ link , className }: { link: string , className : string }) => {
  const locale = useLocale()
  return (
    <Link
      className={`treatments__sea-all-button border-[2px] rounded-[40px] border-[#00979A] text-[#00979A] flex-cen font-semibold ${className ? className : ""}`}
      href={link}
    >
      {
        locale === "ru" ? "“Смотреть все" : "See All"
      }
    </Link>
  );
};
export default SeeAll;
