"use client";
import { ContactusFormType } from "@/types/contactTypes";
import { SubmitHandler, useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    // reset,
  } = useForm<ContactusFormType>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const pathname = usePathname();
  const onSubmit: SubmitHandler<ContactusFormType> = async () => {
    // setLoading(true);
    // const response = await requestFormClient(
    //   email,
    //   phone,
    //   pathname,
    //   1,
    //   null,
    //   0,
    //   firstName + " " + surname,
    //   message,
    //   null
    // );
    // if (response) {
    //   toast.success(
    //     locale === "ru"
    //       ? "Information sent successfully."
    //       : "Information sent successfully."
    //   );
    //   setLoading(false);
    // } else {
    //   toast.warning(
    //     locale === "ru" ? "A problem has occurred." : "A problem has occurred."
    //   );
    //   setLoading(false);
    // }
    // reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 contact-form s1280:gap-4 gap-y-4"
    >
      <div className="col-span-12 s1280:col-span-6">
        <label>First name</label>
        <input
          {...register("firstName", { required: true })}
          autoComplete="off"
          type="text"
          placeholder="First name"
          className={`${
            errors.firstName && errors.firstName.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
        />
      </div>
      <div className="col-span-12 s1280:col-span-6">
        <label>Surname</label>
        <input
          {...register("surname", { required: true })}
          autoComplete="off"
          type="text"
          placeholder="Surname"
          className={`${
            errors.surname && errors.surname.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
        />
      </div>
      <div className="col-span-12 s1280:col-span-6">
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          className={`${
            errors.email && errors.email.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
          autoComplete="off"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="col-span-12 s1280:col-span-6">
        <label>Phone</label>
        <input
          {...register("phone", { required: true })}
          className={`${
            errors.phone && errors.phone.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
          autoComplete="off"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="col-span-12">
        <label>Message</label>
        <textarea
          {...register("message", { required: true })}
          className={`${
            errors.message && errors.message.type === "required"
              ? "ring-[1px] ring-rose-600"
              : ""
          }`}
          placeholder="Comments (not mandatory)"
          rows={8}
        />
      </div>
      <div className="col-span-12 flex-cen mb-2">
        <p className="font-normal text-[#333333]">24 hour service</p>
      </div>
      <div className="col-span-12">
        <button
          disabled
          type="submit"
          className="outline-none w-full h-[46px] rounded-[100px] text-white font-bold bg-[#0CA5A5]"
        >
          Send request
          {/* {loading
            ? locale === "ru"
              ? "Sending..."
              : "Sending..."
            : locale === "ru"
            ? "Send request"
            : "Send request"} */}
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
