import { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";
import { AppProvider } from "@/contexts/app-context/app-context";
import Footer from "@/components/footer/footer";
import PopForm from "@/components/popUpForm/popForm";
import FixBoxs from "@/components/fixOptions/fixBoxs";

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
          <PopForm />
          <Navbar />
          <FixBoxs />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
};
export default RootLayout;
