"use client";
import { ContactusFormType } from "@/types/contactTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import CountryCode from "../forms/countryCode";
import { OptionType } from "@/types/comboBox/comboType";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ContactUsFormType } from "@/types/forms";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { toast } from "react-toastify";
import { useLocale } from "next-intl";

const ContactForm = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm<ContactUsFormType>();
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = inputValue.replace(/^\+\d+/, "");
    }
    inputValue = inputValue.replace(/[^0-9+]/g, "");

    setValue("phone", inputValue);
  };
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<ContactusFormType> = async ({
    email,
    firstName,
    message,
    phone,
    surname,
  }) => {
    setLoading(true);
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "The number is wrong." });
      setLoading(false);
      return;
    }

    const response = await sendFormFunc({
      email,
      name: firstName + " " + surname,
      throughEmail: 1,
      phone : codes?.key+phone,
      message,
      pageUrl: pathname,
    });

    if (response) {
      setLoading(false);
      toast.success("Request sent successfully.");
    } else {
      setLoading(false);
      toast.error("There was a problem sending the request.");
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 contact-form s1280:gap-4 gap-y-4"
    >
      <div className="col-span-12 s1280:col-span-6">
        <label>{locale === "ru" ? "Имя" : "First name"}</label>
        <input
          {...register("firstName", { required: true })}
          autoComplete="off"
          type="text"
          placeholder={locale === "ru" ? "Имя" : "First name"}
          className={`px-4 ${
            errors.firstName && errors.firstName.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
        />
      </div>
      <div className="col-span-12 s1280:col-span-6">
        <label>{locale === "ru" ? "Фамилия" : "Surname"}</label>
        <input
          {...register("surname", { required: true })}
          autoComplete="off"
          type="text"
          placeholder={locale === "ru" ? "Фамилия" : "Surname"}
          className={`px-4 ${
            errors.surname && errors.surname.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
        />
      </div>
      <div className="col-span-12 s1280:col-span-6">
        <label>{locale === "ru" ? "Электронная почта" : "Email"}</label>
        <input
          {...register("email", { required: true })}
          className={`px-4 ${
            errors.email && errors.email.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
          autoComplete="off"
          type="email"
          placeholder={locale === "ru" ? "Электронная почта" : "Email"}
        />
      </div>
      <div className="col-span-12 s1280:col-span-6">
        <label>{locale === "ru" ? "Телефон" : "Phone"}</label>
        <div className="relative">
          <input
            {...register("phone", { required: true })}
            onChange={handlePhoneChange}
            defaultValue={phoneValue}
            className={` ps-20 pe-4${
              errors.phone && errors.phone.type === "required"
                ? "ring-[1px] ring-rose-600"
                : ""
            }`}
            autoComplete="off"
            type="text"
            placeholder={locale === "ru" ? "Телефон" : "Phone"}
          />
          <CountryCode codes={codes} setCodes={setCodes} />
        </div>
      </div>
      <div className="col-span-12">
        <label>{locale === "ru" ? "Сообщение" : "Message"}</label>
        <textarea
          {...register("message", { required: true })}
          className={`px-4 ${
            errors.message && errors.message.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
          placeholder={
            locale === "ru"
              ? "Комментарии (необязательно)"
              : "Comments (not mandatory)"
          }
          rows={8}
        />
      </div>
      <div className="col-span-12 flex-cen mb-2">
        <p className="font-normal text-[#333333]">
          {locale === "ru" ? "Обслуживание 24/7" : "24 hour service"}
        </p>
      </div>
      <div className="col-span-12">
        <button
          disabled={loading}
          type="submit"
          className="outline-none w-full h-[46px] rounded-[100px] text-white font-bold bg-[#0CA5A5]"
        >
          {loading
            ? locale === "ru" ? "Загрузка..." :  "Loading..."
            : locale === "ru"
            ? "Отправить запрос"
            : "Send request"}
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
