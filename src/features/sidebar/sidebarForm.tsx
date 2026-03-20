"use client";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { SideBarType } from "@/types/forms";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SidebarForm = ({ activeAdmin }: { activeAdmin: string }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const { handleSubmit, register, setError, reset } =
    useForm<SideBarType>();

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<SideBarType> = async ({
    email,
    full_name,
    phone,
    treatment,
  }) => {
    setLoading(true);
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "شماره اشتباه است." });
      setLoading(false);
      return;
    }
    const response = await sendFormFunc({
      activeAdmin: activeAdmin,
      email: email || "",
      name: full_name,
      treatment,
      phone,
      pageUrl: pathname,
    });
    if (response) {
      setLoading(false);
      toast.success("درخواست با موفقیت ارسال شد.");
    } else {
      setLoading(false);
      toast.error("مشکلی در ارسال درخواست پیش آمد.");
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-3"
      dir="rtl"
    >
      <div>
        <label className="block font-semibold text-[11px] s1512:text-[12px] s1920:text-[13px] text-[#474744] mb-1">
          نام و نام خانوادگی
        </label>
        <input
          {...register("full_name", { required: true })}
          className="w-full outline-none h-[36px] s1512:h-[38px] s1920:h-[42px] px-3 text-[11px] s1512:text-[12px] s1920:text-[13px] rounded-[30px] border border-[#d1d5db] text-right placeholder:text-[#bbb] text-[#474744]"
          placeholder="مثال : محمد زارع"
          type="text"
        />
      </div>
      <div>
        <label className="block font-semibold text-[11px] s1512:text-[12px] s1920:text-[13px] text-[#474744] mb-1">
          شماره تماس
        </label>
        <input
          {...register("phone", { required: true })}
          placeholder="مثال : ۰۹۱۲۱۲۳۴۵۶۷۸"
          type="text"
          className="w-full outline-none h-[36px] s1512:h-[38px] s1920:h-[42px] px-3 text-[11px] s1512:text-[12px] s1920:text-[13px] rounded-[30px] border border-[#d1d5db] text-right placeholder:text-[#bbb] text-[#474744]"
        />
      </div>
      <div>
        <label className="block font-semibold text-[11px] s1512:text-[12px] s1920:text-[13px] text-[#474744] mb-1">
          موضوع مشاوره شما چیست ؟
        </label>
        <input
          {...register("treatment")}
          placeholder="موضوع مشاوره را وارد کنید"
          type="text"
          className="w-full outline-none h-[36px] s1512:h-[38px] s1920:h-[42px] px-3 text-[11px] s1512:text-[12px] s1920:text-[13px] rounded-[30px] border border-[#d1d5db] text-right placeholder:text-[#bbb] text-[#474744]"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className="font-bold w-full h-[38px] s1512:h-[40px] s1920:h-[44px] text-center rounded-[30px] text-[13px] s1512:text-[14px] s1920:text-[16px] text-white bg-[#9A62F7] hover:bg-[#8347E0] anm"
        >
          {loading ? "در حال ارسال..." : "ارسال درخواست"}
        </button>
      </div>
    </form>
  );
};
export default SidebarForm;
