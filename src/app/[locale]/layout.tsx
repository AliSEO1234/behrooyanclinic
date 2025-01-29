import { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Azpo Health",
  description: "Health with Azpo",
};

const RootLayout = async ({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string}>
}>) => {
  const {locale} = await params
  return (
    <html lang={locale}>
      <body className={`${locale === "en" ? "font-inter" : "font-pt-sans"} relative`}>
          <Navbar />
          <main className="px-[10px] s430:px-5 py-10 s1280:px-[71px] s1512:px-[79px] s1600:px-[85px] s1728:px-[100px] s1920:px-[131px]">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
