const ComplimentaryConsultationForm = () =>{
    return(
        <form className="grid grid-cols-12 gap-x-4 gap-y-5">
            <div className="col-span-12 s1280:col-span-3 s1512:col-span-12 complimentaryFormItem">
                <label htmlFor="">Residen of</label><br />
                <input placeholder="Residen of" type="text" />
            </div>
            <div className="col-span-12 s1280:col-span-3 s1512:col-span-12 complimentaryFormItem">
                <label htmlFor="">Treatment</label><br />
                <input placeholder="Treatment" type="text" />
            </div>
            <div className="col-span-12 s1280:col-span-3 s1512:col-span-12 complimentaryFormItem">
                <label htmlFor="">Phone Number</label><br />
                <input placeholder="Phone Number" type="text" />
            </div>
            <div className="col-span-12 s1280:col-span-3 s1512:col-span-12 complimentaryFormItem">
                <label htmlFor="">Email</label><br />
                <input placeholder="Email" type="text" />
            </div>
            <div className="col-span-12 flex items-center s1280:justify-end s1512:justify-center">
                <button className="h-[48px] bg-[#00979A] rounded-[40px] text-white px-4 w-full s1280:w-[214px] text-center s1600:text-[18px] font-bold">Let’s Connect</button>
            </div>
        </form>
    )
}
export default ComplimentaryConsultationForm