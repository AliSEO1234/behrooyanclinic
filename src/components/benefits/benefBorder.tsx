const BenefBorder = () => {
  return (
    <div
      className="z-[1] h-0 w-[38px] rotate-90 s1280:rotate-0 s1280:w-[47px] s1512:w-[144px] relative s1512:rotate-90"
      style={{
        border: "1px dashed",
        borderImageSource: "linear-gradient(50deg, #000000 0%, #FCFCFC 100%)",
        borderImageSlice: 1,
      }}
    >
      <div className="w-[22px] h-[22px] bg-[#B7EACC] rounded-full flex-cen p-[6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="w-full h-full bg-gradient-to-tr from-[#00979A] to-[#82DFB5] rounded-full"></span>
      </div>
    </div>
  );
};
export default BenefBorder;


// const BenefBorder = () => {
//   return (
//     <div className="z-[1] h-0 w-[38px] rotate-90 s1280:rotate-0 s1280:w-[47px] s1512:w-[144px] border-[1px] border-black border-dashed relative s1512:rotate-90">
//       <div className="w-[22px] h-[22px] bg-[#B7EACC] rounded-full flex-cen p-[6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <span className="w-full h-full bg-gradient-to-tr from-[#00979A] to-[#82DFB5] rounded-full"></span>
//       </div>
//     </div>
//   );
// };
// export default BenefBorder;
