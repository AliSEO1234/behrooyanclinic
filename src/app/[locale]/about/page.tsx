import AboutContent from "@/components/about/aboutCom";
import AboutTab from "@/components/about/aboutTab";
import OurBranches from "@/components/about/ourBranches";
import OurTeam from "@/components/about/ourTeam";
import { AboutPageType } from "@/types/about/aboutPageType";

const Page = async ({params}:AboutPageType) => {
  const {locale} = await params
  return (
    <div className="bg-[#FCFCFC]">
      {/* header */}
      <div className="bg-about-cover mt-10 w-full h-[283px] s1280:h-[670px] s1512:h-[770px] s1728:h-[900px] s1920:h-[916px] viewport-p rounded-b-[40px] overflow-hidden">
        <div className="s1280:mt-10 text-white hidden s1280:block">
          <h1 className="border-s-[4px] border-[#DEE8F3] font-bold s1280:text-[36px] s1512:text-[48px] s1280:ps-4 mb-8">
            {
              locale === "ru" ? "О нас" : "About Azpo"
            }
          </h1>
          {/* <p className="font-medium s1280:text-[20px] s1280:w-2/3 s1728:w-2/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry
          </p> */}
        </div>
      </div>
      <div className="viewport-p">
        <div className="s1280:hidden px-3 mb-10">
          <h1 className="font-bold text-[#474744] text-[30px] border-s-[3px] border-[#2E5A90] ps-4 mb-4">
            {
              locale === "ru" ? "О нас" : "About Azpo"
            }
          </h1>
        </div>
        {/* tab */}
        <div>
          <AboutTab
            trigerList={[
              { keyTrigg: "about", title: locale === "ru" ? "О нас" : "About Azpo", id: 0 },
              { keyTrigg: "branch", title: locale === "ru" ? "Наши офисы" : "Our branches", id: 1 },
              { keyTrigg: "team", title:locale === "ru" ? "Наша команда" : "Our Team", id: 2 },
            ]}
          >
            {{
              about: <AboutContent locale={locale} />,
              branch:<OurBranches locale={locale} />,
              team: <OurTeam locale={locale} />,
            }}
          </AboutTab>
        </div>
      </div>
    </div>
  );
};
export default Page;
