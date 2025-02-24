const ConsultationForm = () => {
  return (
    <form className="p-[22px]  s1280:w-[473px] s1512:w-[609px] s1728:w-[630px] s1512:me-20 drop-shadow-[0px_4px_19px_#0000001A] rounded-[40px] bg-white s1280:px-[66px] s1280:py-8 s1512:px-[136px]">
      <div className="mb-3 s1280:mb-10">
        <input autoComplete="off" className="consul-form-input" placeholder="Email" type="email" />
      </div>
      <div className="mb-5 s1280:mb-8">
        <input autoComplete="off" className="consul-form-input" placeholder="Number" type="text" />
      </div>
      <div>
        <button className="free-consultation__form--button w-full text-white bg-[#0CA5A5] font-bold h-[54px] rounded-[40px]">Send Message</button>
      </div>
    </form>
  );
};
export default ConsultationForm;
