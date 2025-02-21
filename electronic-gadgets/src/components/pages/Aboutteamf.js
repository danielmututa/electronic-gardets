import React from 'react'

const Aboutteamf = () => {

      const cardteam = [
    
           {img:"CEO.jpg" , name:"Olivia Smith" , position:"CEO", des:"Drives the company's vision, strategy, and innovation, ensuring growth and excellence in customer service for phone and electronic gadget solutions."},
           {img:"COM.jpg" , name:"Liam Davis" , position:"COM", des:"Oversees daily operations, enhancing service delivery and ensuring seamless processes for repair, sales, and customer support."},
           {img:"CTO.jpg" , name:"Ethan Johnson" , position:"CEO", des:" Leads repair services for phones and electronic gadgets, ensuring top-notch quality and efficient solutions to keep devices running smoothly."},
    
        ]

  return (
    <div className='  px-[20px] py-[50px] md:px-[40px] md:py-[60px] lg:px-[80px] lg:py-[60px] xl:px-[100px] xl:py-[80px]'>
        <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-row justify-between">
            {
                cardteam.map((card,index) => (
                    <div key={index} className="w-full pb-[28px] md:pb-[40px] md:w-[45%] lg:w-[30%] flex flex-col  items-center text-center justify-center">
                      <img loading='lazy' className=' object-cover w-full h-[280px]'  src={require("../Images/" + card.img)} alt="" />
                      <p className='font-montserratBold  md:text-[16px]] pt-[14px]'>{card.name}</p>
                      <p className='font-montserrat text-buttons  md:text-[16px]]'>{card.position}</p>
                      <p className='font-montserrat text-gray-500 text-sm md:text-[16px]]'>{card.des}</p>

                    </div>
                ))
            }
        </div>
       
        </div>
  )
}

export default Aboutteamf