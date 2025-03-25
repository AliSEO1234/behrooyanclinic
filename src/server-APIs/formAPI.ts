import httpService from "@/core/httpService";

export const sendFormFunc = async ({
  email,
  phone,
  pageUrl,
  name,
  throughEmail = 0,
  treatment,
  throughTelegram = 0,
  throughWhatsapp = 0,
  message,
  activeAdmin,
}: {
  email?: string | null;
  phone?: string | null;
  pageUrl?: string | null;
  name?: string | null;
  throughEmail?: 0 | 1;
  treatment?: string | null;
  throughTelegram?: 0 | 1;
  throughWhatsapp?: 0 | 1;
  message?: string | null;
  activeAdmin?: string | null;
}) => {
  try {
    const response = await httpService.post("/form/create", {
      email,
      phone,
      pageUrl,
      name,
      throughEmail,
      serviceType: treatment,
      agentName: activeAdmin ? activeAdmin : "",
      message,
      throughTelegram,
      throughWhatsapp,
    });
    if (response.status === 201) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};
