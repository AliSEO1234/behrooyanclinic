"use server";
import { cookies } from "next/headers";
const getLocale = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("language")?.value || "en";
  return locale;
};
const setLocale = async (locale: "ru" | "en") => {
  const cookieStore = await cookies();
  cookieStore.set("lang", locale);
};
export { setLocale, getLocale };
