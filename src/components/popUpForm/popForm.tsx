"use client";
import girlChar from "@/assets/images/popChar.png";
import phone from "@/assets/images/popPhone.png";
import ImgFetcher from "../imgFetcher";
import ComboBox from "../comboBox";
import { OptionType } from "@/types/comboBox/comboType";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "@/contexts/app-context/app-context";
import { options } from "@/staticData/optionsForm";
import CountryCode from "../forms/countryCode";
import { SubmitHandler, useForm } from "react-hook-form";
import { PopFormType } from "@/types/forms";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { sendFormAction } from "@/actions/formAction";
// import axios from "axios";
const PopForm = () => {
  const pathname = usePathname();
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<PopFormType>();
  const { setPopUpForm, popUpForm } = useAppContext();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
  useEffect(() => {
    setValue("treatment", `${selectedOption?.label},${selectedOption?.key}`);
  }, [selectedOption, setValue]);
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = inputValue.replace(/^\+\d+/, "");
    }
    inputValue = inputValue.replace(/[^0-9+]/g, "");
    setValue("phone", inputValue);
  };
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const host =
  //       process.env.NEXT_PUBLIC_FORM_TOKEN_HOST || "https://azpohealth.com";
  //     const getToken = await axios.get(
  //       `${host}/api-front/form/token-generator`
  //     );
  //     setValue("token" , getToken.data)
  //   };
  //   fetchToken();
  // }, [setValue]);
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<PopFormType> = async ({
    email,
    full_name,
    phone,
    treatment,
    // token,
  }) => {
    // if(!token) return
    setLoading(true);
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "The number is wrong." });
      setLoading(false);
      return;
    } else if (!selectedOption) {
      setError("treatment", {
        type: "validate",
        message: "Select service type",
      });
      setLoading(false);
      return;
    }
    const response = await sendFormAction({
      name: full_name,
      phone: codes?.key + phone,
      treatment,
      email,
      pageUrl: pathname,
    });
    if (response) {
      setLoading(false);
      setTimeout(() => {
        setPopUpForm(false);
      }, 2000);
      toast.success("Request sent successfully.");
    } else {
      setLoading(false);
      toast.error("A problem occurred. Please try again later.");
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onClick={(e) => e.stopPropagation()}
      className={`z-[5] w-[326px] s390:w-[358px] s1280:w-[526px] s1280:h-[260px] s1512:w-[621px] s1728:w-[716px] s1512:h-[250px] s1728:h-[290px] popUpform ${
        popUpForm ? "animate-popup-form" : "hidden"
      }`}
    >
      <div className="h-[80px] s1512:h-[90px] bg-gradient-to-r from-[#82DFB5] to-[#0CA5A5] rounded-t-[40px] relative z-[2] flex-cen">
        {/* close */}
        <button
          onClick={() => setPopUpForm(false)}
          className="w-7 h-7 s1280:w-5 s1280:h-5 s1728:w-7 s1728:h-7 flex-cen text-white absolute -top-8 right-0 s1280:top-4 s1280:right-4 outline-none rounded-full  bg-[#FFFFFF4D]"
        >
          <IoClose className="size-4 s1728:size-6" />
        </button>
        {/* char */}
        <div className="w-[144px] h-[317px] s1280:w-[200px] s1280:h-[438px] s1728:w-[230px] s1728:[564px] absolute -top-[80px] s1280:-top-36 -left-10 s1280:-left-10 s1728:left-0 z-[1]">
          <ImgFetcher src={girlChar} />
        </div>
        {/* phone */}
        <div className="w-10 h-10 s1280:w-[40px] s1280:h-[40px] absolute top-7 left-36">
          <ImgFetcher src={phone} />
        </div>
        <div className="z-[1] w-4 h-4 s1280:w-[29px] s1280:h-[29px] absolute top-2 left-52">
          <ImgFetcher src={phone} />
        </div>
        <div className="z-[1] w-14 h-14 s1280:w-[50px] s1280:h-[50px] absolute top-5 left-20 s1280:-bottom-5 s1280:right-40 opacity-50 rotate-180">
          <ImgFetcher src={phone} />
        </div>
        <div className="z-[1] w-10 h-10 s1280:w-[50px] s1280:h-[50px] absolute -bottom-5 right-10 opacity-80">
          <ImgFetcher src={phone} />
        </div>
        <div className=" ms-28 s1280:ms-28 z-[2]">
          <p className="font-semibold s1280:text-[18px] s1728:text-[20px] text-white">
            Fill out the form to receive advice
          </p>
        </div>
      </div>
      <div className="bg-white h-full rounded-b-[40px] relative z-[3] py-3 px-5 s1280:py-5 s1280:px-8 s1512:px-12 s1728:px-5 shadow-pop">
        <div className="flex flex-col items-center justify-start s1280:flex-row s1280:flex-wrap s1280:items-start s1280:justify-between gap-y-3 s1280:gap-y-5 mb-5">
          <div className="w-full s1280:w-fit">
            <label className="block" htmlFor="residen">
              Name
            </label>
            <input
              {...register("full_name", { required: true })}
              className="placeholder:text-[#898989] px-2"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="w-full s1280:w-fit">
            <label className="block" htmlFor="residen">
              Phone Number
            </label>
            <div className="relative">
              <input
                {...register("phone", { required: true })}
                onChange={handlePhoneChange}
                defaultValue={phoneValue}
                className="placeholder:text-[#898989] ps-20 pe-2 outline-none w-full h-[45px] s1280:w-[219px] s1512:w-[250px] s1280:h-[38px] s1728:h-[48px] s1728:w-[320px] border-[1px] border-[#9996A0] placeholder:text-[14px] rounded-[40px] text-[14px] s1280:placeholder:text-[14px] s1728:text-[16px] s1728:placeholder:text-[16px]"
                placeholder="Phone Number"
                type="text"
              />
              <CountryCode codes={codes} setCodes={setCodes} />
            </div>
          </div>
          <div className="w-full s1280:w-fit">
            <label className="block" htmlFor="residen">
              Treatment
            </label>
            <ComboBox
              trigger={selectedOption ? selectedOption.label : "Treatment"}
              className="flex-bet text-[14px] s1728:text-[16px] w-full s1280:w-[219px] s1512:w-[250px] s1728:h-[48px] s1728:w-[320px] outline-none h-[45px] s1280:h-[38px] s1600:h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB]"
              containertStyle="s1280:w-[219px] s1512:w-[250px] s1728:w-[320px]"
              options={options}
              onChange={setSelectedOption}
              selectedValue={selectedOption}
            />
          </div>
          <div className="w-full s1280:w-fit">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              className="placeholder:text-[#898989] px-2"
              placeholder="Email"
              type="text"
            />
          </div>
          {/* <input {...register("token")} type="hidden" /> */}
        </div>
        <div className="flex items-center s1280:justify-end">
          <button
            disabled={loading}
            type="submit"
            className="bg-[#0CA5A5] rounded-[40px] w-full h-[45px] s1280:w-[163px] s1280:h-[38px] s1728:w-[178px] s1728:h-[45px] flex-cen text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};
export default PopForm;
