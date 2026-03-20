"use client";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";

const WhatsAppLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[5] flex flex-col items-end gap-y-3 font-yekan-bakh" dir="rtl">
      {/* Contact options panel */}
      {isOpen && (
        <div className="bg-white rounded-[20px] shadow-[0px_4px_20px_#0000001A] p-5 w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <p className="font-bold text-[14px] text-[#333] mb-4 text-right">
            از طریق کانال دلخواه با ما در ارتباط باشید
          </p>
          <div className="flex flex-col gap-y-2">
            <Link
              href="https://wa.me/+905393323230"
              target="_blank"
              className="flex items-center gap-x-3 px-4 py-3 rounded-[12px] border border-[#e5e7eb] hover:border-[#25d366] hover:bg-[#f0fdf4] transition-all text-[13px] text-[#333]"
            >
              <IoLogoWhatsapp className="size-5 text-[#25d366] flex-shrink-0" />
              واتساپ
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                if (typeof window !== "undefined" && (window as any).Tawk_API) {
                  (window as any).Tawk_API.toggle();
                }
              }}
              className="flex items-center gap-x-3 px-4 py-3 rounded-[12px] border border-[#e5e7eb] hover:border-[#9A62F7] hover:bg-[#f5f0ff] transition-all text-[13px] text-[#333] w-full"
            >
              <IoChatbubbleEllipsesOutline className="size-5 text-[#888] flex-shrink-0" />
              چت با ما
            </button>
            <Link
              href="tel:+905393323230"
              className="flex items-center gap-x-3 px-4 py-3 rounded-[12px] border border-[#e5e7eb] hover:border-[#9A62F7] hover:bg-[#f5f0ff] transition-all text-[13px] text-[#333]"
            >
              <BiSolidPhoneCall className="size-5 text-[#888] flex-shrink-0" />
              تماس مستقیم
            </Link>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`w-12 h-12 s1512:w-14 s1512:h-14 rounded-full flex-cen shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-[#444] hover:bg-[#333]"
            : "bg-[#9A62F7] hover:bg-[#8347E0]"
        }`}
        aria-label="ارتباط با ما"
      >
        {isOpen ? (
          <IoClose className="size-6 text-white" />
        ) : (
          <FaHeadphones className="size-5 s1512:size-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppLink;
