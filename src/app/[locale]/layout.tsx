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
      <body className={`${locale === "en" ? "font-inter" : "font-pt-sans"}`}>
          <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
