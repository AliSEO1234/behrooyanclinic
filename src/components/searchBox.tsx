import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="w-full h-[48px] s1280:h-[68px] s1280:w-[404px] s1512:w-[543px] bg-white rounded-[100px] overflow-hidden shadow-[0_4px_4px_#00000040] relative">
      <input placeholder="Search" className="w-full h-full placeholder:text-[#898989] outline-none ps-4" type="search" />
      <button className="w-[30px] h-[30px] s1280:w-[50px] s1280:h-[50px] flex-cen bg-[#25A6A9] text-white rounded-full absolute top-1/2 right-2 translate-x-0 -translate-y-1/2">
        <FiSearch className="s1280:size-7" />
      </button>
    </div>
  );
};
export default SearchBox;
