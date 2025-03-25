"use client";
import girlChar from "@/assets/images/patient-services/girlChar.png";
import girlCharDesk from "@/assets/images/patient-services/girlDesk.png";
import pills from "@/assets/images/patient-services/pills.png";
import stetoscope from "@/assets/images/patient-services/stetoscope.png";
import syringe from "@/assets/images/patient-services/syringe.png";
import ComboBox from "@/components/comboBox";
import ImgFetcher from "@/components/imgFetcher";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { options } from "@/staticData/optionsForm";
import { OptionType } from "@/types/comboBox/comboType";
import { PatientFormType } from "@/types/forms";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import CountryCode from "../countryCode";
const PatientServicesForm = () => {
  const pathname = usePathname();
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<PatientFormType>();
  const [treatmentSelected, setTreatmentSelected] = useState<OptionType | null>(
    null
  );
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
  useEffect(() => {
    setValue(
      "treatment",
      `${treatmentSelected?.label} ${treatmentSelected?.key}`
    );
  }, [treatmentSelected, setValue]);
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = `${codes?.key || ""}${inputValue.replace(/^\+\d+/, "")}`;
    }
    inputValue = inputValue.replace(/[^0-9+]/g, "");

    setValue("phone", inputValue);
  };
  useEffect(() => {
    if (codes) {
      setValue("phone", codes.key);
    }
  }, [codes, setValue]);

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<PatientFormType> = async ({
    email,
    fullname,
    phone,
    treatment,
  }) => {
    setLoading(true);
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "The number is wrong." });
      setLoading(false);
      return;
    } else if (!treatmentSelected) {
      setError("treatment", {
        type: "validate",
        message: "Select service type",
      });
      setLoading(false);
      return;
    }

    const response = await sendFormFunc({
      email,
      name: fullname,
      phone,
      treatment,
      pageUrl: pathname
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
    <div className="relative s1280:static">
      {/* phone char */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 s1280:hidden w-full flex-cen">
        <div className="w-[253px] -mt-56 s1280:w-[318px] s1512:w-[352px] s1728:w-[453px] s1280:-mt-56 s1728:-mt-80 s1280:ms-4">
          <ImgFetcher width={1000} height={1000} src={girlChar} />
        </div>
        <div className="w-[34px] h-[68px] s1280:w-[39px] s1280:h-[79px] s1512:w-[47px] s1512:h-[94px] s1728:w-[60px] s1728:h-[122px] flex-cen absolute -top-[30%] s1280:-top-1/2 left-5">
          <ImgFetcher width={1000} height={1000} src={pills} />
        </div>
        <div className="w-[54px] h-[54px] s1280:w-[63px] s1280:h-[63px] s1512:w-[75px] s1512:h-[75px] s1728:w-[97px] s1728:h-[97px] flex-cen absolute -top-[30%] s1280:-top-1/2 right-3 s1512:right-0">
          <ImgFetcher width={1000} height={1000} src={stetoscope} />
        </div>
        <div className="w-[116px] h-[116px] s1280:w-[135px] s1280:h-[135px] s1512:w-[162px] s1512:h-[162px] s1728:w-[209px] s1728:h-[209px] flex-cen absolute -top-64 s1512:-top-72 left-5 s1728:-top-96">
          <ImgFetcher width={1000} height={1000} src={syringe} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-b from-[#25a7a9ab] to-[#0f4243af] rounded-[20px] backdrop-blur-[20px] flex flex-col items-center justify-start s1280:flex-row s1280:justify-around s1280:items-center z-[1] p-4 s1280:p-0 gap-y-5 s1280:gap-y-0"
      >
        {/* desktop char */}
        <div className="relative hidden s1280:block">
          <div className="w-[253px] -mt-56 s1280:w-[318px] s1512:w-[352px] s1728:w-[453px] s1280:-mt-56 s1728:-mt-80 s1280:ms-4">
            <ImgFetcher width={1000} height={1000} src={girlCharDesk} />
          </div>
          <div className="s1280:w-[39px] s1280:h-[79px] s1512:w-[47px] s1512:h-[94px] s1728:w-[60px] s1728:h-[122px] flex-cen absolute -top-1/2 left-5">
            <ImgFetcher width={1000} height={1000} src={pills} />
          </div>
          <div className="s1280:w-[63px] s1280:h-[63px] s1512:w-[75px] s1512:h-[75px] s1728:w-[97px] s1728:h-[97px] flex-cen absolute -top-1/2 right-3 s1512:right-0">
            <ImgFetcher width={1000} height={1000} src={stetoscope} />
          </div>
          <div className="s1280:w-[135px] s1280:h-[135px] s1512:w-[162px] s1512:h-[162px] s1728:w-[209px] s1728:h-[209px] flex-cen absolute -top-64 s1512:-top-72 left-5 s1728:-top-96">
            <ImgFetcher width={1000} height={1000} src={syringe} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start s1280:flex-row s1280:flex-wrap s1280:items-center s1280:justify-center gap-x-4 gap-y-2 s1728:gap-y-8 s1728:gap-x-10 s1280:w-[550px] s1512:w-[700px] s1728:w-[800px]">
          <div className="patient-form-item">
            <label htmlFor="">Name & Surname</label>
            <input
              {...register("fullname", { required: true })}
              className="px-3"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="patient-form-item">
            <label htmlFor="">phone number</label>
            <div className="w-full relative">
              <input
                {...register("phone", { required: true })}
                className="ps-20 pe-3"
                type="text"
                onChange={handlePhoneChange}
                defaultValue={phoneValue}
                placeholder="phone number"
              />
              <CountryCode codes={codes} setCodes={setCodes} />
            </div>
          </div>
          <div className="w-full s1280:w-fit">
            <label
              htmlFor=""
              className="text-white font-medium s1280:text-[14px] inline-block mb-2"
            >
              Treatment
            </label>
            <ComboBox
              trigger={
                treatmentSelected ? treatmentSelected.label : "Treatment"
              }
              className="w-full s1280:w-[250px] s1728:w-[320px] h-[48px] s1280:h-[38px] s1512:h-[48px] flex justify-between items-center px-3 bg-white rounded-[40px] text-[#898989] text-[14px] s1728:txt-[16px]"
              options={options}
              onChange={setTreatmentSelected}
              selectedValue={treatmentSelected}
              containertStyle=" s1280:w-[250px] s1728:w-[320px] font-medium"
            />
          </div>
          <div className="patient-form-item">
            <label htmlFor="">Email</label>
            <input
              {...register("email", { required: true })}
              className="px-3"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w-full s1280:w-fit">
          <button
            type="submit"
            disabled={loading}
            className="submit-btn-bg flex justify-between flex-row-reverse s1280:flex-col items-center s1280:justify-center gap-y-2 text-white w-full h-[60px] s1280:w-[120px] s1280:h-[157px] s1512:w-[132px] s1512:h-[181px] s1728:h-[215px] rounded-[20px] text-[14px] s1512:text-[16px] font-bold px-3 s1280:px-0"
          >
            <span>
              <IoIosArrowForward className="size-5 s1512:size-7" />
            </span>
            <span>{loading ? "Sending..." : "Let’s Connect"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default PatientServicesForm;
