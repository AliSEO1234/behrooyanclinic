"use client";
import { PaginationType } from "@/types/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({}: PaginationType) => {
  //   const searchParams = useSearchParams();
  //   const page = searchParams.get("page") || "1";
  //   const newParams = new URLSearchParams(searchParams.toString());

  //   useEffect(() => {
  //     if (searchParams.has("page")) {
  //       newParams.delete("page")
  //     }
  //   }, []);
  //   const total = totalPages || 0;

  //   const totalRecordPages = Math.ceil(total / 12);

  //   const currentPage = parseInt(searchParams.get("page") || "1", 10);

  //   const handlePageChange = (page: number) => {
  //     newParams.set("page" , page.toString())
  //   };
  //   const getPageNumbers = () => {
  //     const pages = [];
  //     if (currentPage > 1) pages.push(currentPage - 1);
  //     pages.push(currentPage);
  //     if (currentPage < totalRecordPages) pages.push(currentPage + 1);
  //     return pages;
  //   };
  //   const pageNumbers = getPageNumbers();
  return (
    <div className="flex-bet mt-5">
      <button
        //   onClick={() => handlePageChange(currentPage - 1)}
        // disabled={page === "1"}
        className="text-[14px] s1280:text-[16px] flex-cen text-[#25A6A9] hover:text-[#1a7d7f] anm font-medium gap-x-2"
      >
        <span>
          <IoIosArrowBack />
        </span>
        <span>Previous</span>
      </button>

      {/* {pageNumbers.map((number) => ( */}
      <button
        //   key={number}
        //   onClick={() => handlePageChange(+page)}
        className="text-[14px] s1280:text-[16px] font-medium bg-[#25A6A9] text-white border border-[#25A6A9] hover:bg-white hover:text-[#25A6A9] anm rounded-full p-2 w-8 h-8 flex-cen"
      >
        {/* {number} */}1
      </button>
      {/* ))} */}

      <button
        //   onClick={() => handlePageChange(currentPage + 1)}
        // disabled={page === totalPages.toString()}
        className="text-[14px] s1280:text-[16px] flex-cen text-[#25A6A9] hover:text-[#1a7d7f] anm font-medium gap-x-2"
      >
        <span>Next</span>
        <span>
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
