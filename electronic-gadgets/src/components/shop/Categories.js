import React ,{ useState, useEffect }from 'react'
import category from  "../Images/collection summer.jpg"
import Databaset from '../Databaset'
import Fastdelivary from '../home/Fastdelivary'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
const Categories = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);


       useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth  < 768) {
        setItemsToShow(1); // Show 1 item on small screens
      } else if (window.innerWidth < 820) {
        setItemsToShow(3); // Show 4 items on larger screens
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3); // Show 4 items on larger screens
      } else  {
        setItemsToShow(4); // Show 4 items on larger screens
      }
    };

    handleResize(); // Run on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle arrow clicks
  const handleNext = () => {
    if (currentIndex + itemsToShow < Databaset.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };


  return (
    <div className="px-5 pb-[50px] pt-[80px] md:px-10 md:pt-[80px] md:pb-[60px] lg:px-20 lg:pt-[100px] lg:pb-[60px] xl:px-[100px] xl:pt-[130px] xl:pb-[80px]">
    <div className=' pb-[80px]'>

        <div className="h-[350px] xl:h-[85vh] overflow-hidden group relative w-full">
        <img src={category} className='object-cover   group-hover:scale-110 transform transition-all duration-500 h-full w-full' alt="" />
        <div className=" bg-blue-600/40 flex justify-center items-center absolute h-full w-full top-0 ">
        <h1 className='text-white text-[24px] md:text-[24px] lg:text-[32px] xl:text-4xl font-montserratBold' > NEW ARRIVALS</h1>
        </div>
        </div>

        <div className="mt-[16px] md:mt-[20px] lg:mt-[25px] xl:mt-[38px]   ">
            <div className="flex justify-between flex-wrap gap-4 md:gap-0">
                <div className="relative  h-[180px] md:h-[250px] overflow-hidden group w-full md:w-[48.5%] lg:w-[48%]">
                    <img src={category} className='group-hover:scale-110 transform transition-all duration-500 w-full h-full object-cover' alt="" />
                    <div className=" absolute top-0 w-full h-full flex  bg-blue-600/40  items-center ">
                            <h4 className=" text-[16px] text-buttons bg-white px-2 py-3 right-0   absolute font-montserratBold group-hover:bg-buttons duration-500 group-hover:text-white ">  Hot Deals! </h4>
                        </div>
                </div>
                <div className="relative h-[180px] md:h-[250px] overflow-hidden group w-full md:w-[48.5%] lg:w-[48%]">
                    <img src={category} className='group-hover:scale-110 transform transition-all duration-500 w-full h-full object-cover' alt="" />
                    <div className="absolute top-0  bg-blue-600/40  right-0 pr-2 pt-6 h-full w-full flex flex-col gap-2 justify-center items-end"> 
                        <h4 className='text-white text-[16px] font-montserratBold'>Online Exclusive</h4>
                        <p className='text-white font-montserrat text-[14px] group-hover:text-buttons duration-500 underline'>Shop now!</p>
                     </div>
                </div>
            </div>
           
        </div>

        <div className="mt-[16px] md:mt-[20px] lg:mt-[25px] xl:mt-[38px] ">
            <div className="flex justify-between gap-4 flex-wrap">
                <div className="relative h-[250px] overflow-hidden group w-full  md:w-[24.5%] lg:w-[24%]">
                    <img src={category} className=' group-hover:scale-110 transform transition-all duration-500 w-full h-full object-cover' alt="" />
                    <div className=" absolute top-0 w-full h-full flex  bg-blue-600/40  items-center ">
                            <h4 className=" text-[16px] text-buttons bg-white px-2 py-3 right-0   absolute font-montserratBold group-hover:bg-buttons duration-500 group-hover:text-white ">  Hot Deals! </h4>
                        </div>
                </div>
                <div className="relative h-[250px] overflow-hidden group w-full md:w-[44.5%] lg:w-[44%]">
                    <img src={category} className='group-hover:scale-110 transform transition-all duration-500 w-full h-full object-cover' alt="" />
                    <div className="pt-12  pl-5  bg-blue-600/40  absolute top-0 lg:pt-12 lg:pl-10 left-0 flex flex-col w-full gap-2 h-full">
                        <h4 className='text-[16px]  font-montserratBold text-white lg:text-[16px]'>Fresh Finds for Tech Enthusiasts!</h4>
                        <h2 className='text-[20px] flex md:text-[23px] lg:text-[26px] font-montserratBold text-white group-hover:text-buttons duration-500'>Upgrade with top gadgets.</h2>
                        <p className='text-white text-[14px] font-montserrat'>Save and stay ahead!</p>
                      </div>
                </div>
                <div className="relative h-[250px] overflow-hidden group w-full md:w-[24.5%] lg:w-[24%]">
                    <img src={category} className='group-hover:scale-110 transform transition-all duration-500 w-full h-full object-cover' alt="" />
                    <div className=" absolute top-0 w-full h-full flex  bg-blue-600/40  items-center ">
                            <h4 className=" text-[16px] text-buttons bg-white px-2 py-3 right-0   absolute font-montserratBold group-hover:bg-buttons duration-500 group-hover:text-white ">  Hot Deals! </h4>
                        </div>
                </div>
            </div>
          
        </div>






<div className="flex flex-col w-full mt-[80px]">
     <p className="text-[20px] text-buttons pb-5 font-montserratBold">
       You may also like:
     </p>
     <div className="flex justify-center w-full relative">
       <div className="absolute w-full h-[250px] top-0 flex justify-between items-center">
         <button onClick={handlePrev} disabled={currentIndex === 0}>
           <LucideChevronLeft className=" cursor-pointer" />
         </button>
         <button
            onClick={handleNext}
            disabled={currentIndex + itemsToShow >= Databaset.length}
          >
            <LucideChevronRight className=" cursor-pointer" />
          </button>
        </div>
        <div className="flex justify-between w-full md:w-[92%] overflow-hidden ">
          {Databaset.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
            <div key={index} className="flex flex-col gap-2 w-full md:w-[31%] lg:w-[23%]">
              <img
                src={require("../Images/" + item.img)}
                className="w-full h-[250px] object-cover"
                alt=""
              />
              <p className="font-montserrat">{item.category}</p>
              <p className="text-[18px] font-montserratBold text-buttons">
                {item.productname}
              </p>
              <p className="font-montserrat">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
</div>
    </div>
<Fastdelivary/>
    </div>
  )
}

export default Categories






// import React from 'react';

// const Trapezoid = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       {/* Trapezoid Div */}
//       <div
//         className="w-48 h-32 bg-blue-500"
//         style={{
//           clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Trapezoid;