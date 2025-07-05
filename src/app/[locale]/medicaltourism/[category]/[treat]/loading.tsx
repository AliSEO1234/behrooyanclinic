const MedTourismLoading = () => {
  return (
    <div className="bg-[#FCFCFC]" aria-busy={true} aria-live={"polite"}>
      <div
        className="grid grid-cols-12 gap-y-5 s1280:gap-y-0 mt-16 s1512:mt-20 ps-[10px] s430:ps-5 pt-10 s1280:ps-[71px] s1512:ps-[79px] s1600:ps-[85px] s1728:ps-[100px] s1920:ps-[131px] rounded-b-[40px] shadow-[0px_19px_30px_-25px_#0000001C] overflow-hidden mb-10 s1280:mb-20 pb-5 s1280:pb-0 s1280:h-[520px] s1512:h-[620px] s1728:h-[750px]">
        <div
          className="order-2 s1280:order-1 col-span-12 s1280:col-span-6 s1600:col-span-5 s1920:col-span-6 pe-[10px] s430:pe-5 z-[2] s1512:mt-10 s1600:mt-0 s1280:pb-4 flex flex-col items-start justify-center">
          <div className="mb-5 h-full w-full flex flex-col gap-4">
            <div className="hidden s1280:block inset-0 w-60 h-10 bg-gray-300 animate-pulse rounded-md"/>
            <div className="inset-0 w-full h-6 bg-gray-300 animate-pulse rounded-md"/>
            <div className="inset-0 w-[80%] h-6 bg-gray-300 animate-pulse rounded-md"/>
            <div className="inset-0 w-[50%] h-6 bg-gray-300 animate-pulse rounded-md"/>
          </div>
        </div>
        <div
          className="order-1 s1280:order-2 col-span-12 s1280:col-span-6 s1600:col-span-7 s1920:col-span-6 relative flex-right z-[2]">
          <div
            className="s1280:hidden line-clamp-2 absolute top-0 left-0 font-bold text-[30px] text-[#00979A]  inset-0 w-60 h-10 bg-gray-300 animate-pulse rounded-md"/>
          <div className="s1280:hidden w-[200px] h-[500px] bg-gray-300 animate-pulse rounded-md"/>
        </div>
      </div>
    </div>
  )
}

export default MedTourismLoading;