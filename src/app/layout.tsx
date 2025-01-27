import { Metadata } from "next";
import "@/app/globals.css";
import { AppProvider } from "@/contexts/app-context/app-context";
import { getLocale } from "@/operations/locale/locale";

export const metadata: Metadata = {
  title: "Azpo Health",
  description: "Health with Azpo",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = await getLocale()
  return (
    <html lang={locale}>
      <body className="font-inter">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};
export default RootLayout;
