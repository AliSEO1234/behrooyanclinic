import { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";
import { AppProvider } from "@/contexts/app-context/app-context";
import Footer from "@/components/footer/footer";
import PopForm from "@/components/popUpForm/popForm";
import WhatsAppLink from "@/components/fixOptions/whatsappLink";
import UpArrow from "@/components/fixOptions/upArrow";
import { ToastContainer } from "react-toastify";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Azpo Health",
  description: "Health with Azpo",
  icons: {
    icon: "/health.ico",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`${
          locale === "en" ? "font-inter" : "font-pt-sans"
        } relative bg-[#FCFCFC]`}
      >
        <AppProvider>
          <ToastContainer position="top-center" draggable />
          <PopForm />
          <Navbar />
          {/* <FixBoxs /> */}
          <UpArrow />
          <WhatsAppLink />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
};
export default RootLayout;
