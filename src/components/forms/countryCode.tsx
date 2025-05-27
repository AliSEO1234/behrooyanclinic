import {
  CountrycodeItemType,
  CountryCodeType,
} from "@/types/countryCode";
import { ChangeEvent, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { countries } from "@/staticData/countryCodes";

const CountryCode = ({ setCodes, codes, className }: CountryCodeType) => {
  const [countryList, setCountryList] = useState<CountrycodeItemType[]>(countries);
  const allCountries :CountrycodeItemType[]=countries;
  const [countriesDrop, setCountriesDrop] = useState<boolean>(false);


  const handleFilterCountries = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setCountryList(
      allCountries.filter((country) => {
        const matchCountry = `${country.key} ${country.label.toLowerCase()}`;
        return matchCountry.includes(value);
      })
    );
  };
  useEffect(() => {
    if (!countriesDrop) {
      setCountryList(allCountries);
    }
  }, [countriesDrop, allCountries]);
  return (
    <DropdownMenu open={countriesDrop} onOpenChange={setCountriesDrop}>
      <DropdownMenuTrigger
        className={`absolute top-1/2 -translate-y-1/2 left-3 outline-none flex-cen gap-x-1 text-[#9996A0] hover:text-[#00979A] anm border-none ${
          className ? className : "2s1280:text-[14] w-16"
        }`}
      >
        <span>{codes ? codes.key : "+90"}</span>
        <span>
          <MdKeyboardArrowDown className="size-5 data-[state=open]:rotate-180" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-[20px] h-[300px] w-[250px] overflow-y-scroll border shadow my-3">
        <DropdownMenuLabel className="text-[#898989]">
          Countries Code
        </DropdownMenuLabel>
        <div className="px-2 mb-3">
          <input
            onChange={handleFilterCountries}
            type="text"
            className="outline-none w-full s1280:h-[38px] rounded-[40px] font-medium s1280:text-[14px] px-3 placeholder:text-[#898989] s1280:placeholder:text-[14] bg-white border focus:border-[#00979A]"
            placeholder="Search"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col items-start">
          {countryList.length > 0 ? (
            countryList.map((country) => {
              return (
                <DropdownMenuItem
                  className="cursor-pointer line-clamp-1 font-medium text-[#333333] p-2 w-full hover:bg-[#f7f7f7] hover:text-[#00979A] anm"
                  onClick={() => setCodes(country)}
                  key={country.id}
                >
                  {country.key} - {country.label}
                </DropdownMenuItem>
              );
            })
          ) : (
            <DropdownMenuItem className="cursor-pointer font-medium text-[#333333] px-2 w-full">
              Not found
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CountryCode;
