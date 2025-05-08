import { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";
import { AppProvider } from "@/contexts/app-context/app-context";
import Footer from "@/components/footer/footer";
import PopForm from "@/components/popUpForm/popForm";
import WhatsAppLink from "@/components/fixOptions/whatsappLink";
import UpArrow from "@/components/fixOptions/upArrow";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";
type Props = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const headerRequest = await headers();
  const host = headerRequest.get("host");
  return {
    title: "Azpo Health",
    description: "Health with Azpo",
    alternates: {
      canonical: `https://${host}/${locale}`,
    },
    robots: {
      index: locale === "en" ? true : false,
      follow: locale === "en" ? true : false,
    },
  };
}
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
      <head>
        <meta
          name="google-site-verification"
          content="m7Y1gxqGqvxUM10l6dzuqSM8FlrtbhYUdzjGuUjgkz0"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WJ13ZVNGZJ"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJ13ZVNGZJ');
          `}
        </Script>
      </head>
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
