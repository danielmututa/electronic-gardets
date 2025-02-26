import React from 'react'
import aisha from '../Images/Copy.jpg'
import blogipn from '../Images/blogIpn.jpg'
import iphoneb from '../Images/IphonBxed.jpg'
import iphone from '../Images/IphoneSiv.jpg'
import iphonebanner from '../Images/Iphonebanner3.jpg'
import { Heart } from 'lucide-react'
const Blogarticle = () => {
  return (
    <div>
        <div className="flex flex-col justify-center pt-[110px] px-5 md:px-10 lg:px-20 xl:px-[100px] items-center">
            <div className="">
                <img src={aisha} className='object-cover h-[80px] w-[80px] rounded-full' alt="" />
                <p className='font-montserratBold text-sm pt-1'>Aisha Khan</p>
            </div>

            <div className="flex flex-col text-center items-center w-[60%] pt-5 justify-center">
                <h2 className='font-montserratBold text-[20px] md:text-[23px] xl:text-[26px] pb-8'>The World of Charles & Ray Eames</h2>
                <p className='font-montserrat text-sm pb-12'>26 February 2025 </p>
                <div className="border border-buttons w-1/4 mb-12"></div>
                <p className='font-montserrat '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo consequuntur. Facilis dolorum vel illum nesciunt modi atque suscipit. Explicabo temporibus eum nemo optio! Sequi eius at nihil autem neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo consequuntur. Facilis dolorum vel illum nesciunt modi atque suscipit. Explicabo temporibus eum nemo optio! Sequi eius at nihil autem neque. z
                      </p>
            </div>

            <div className="w-full mt-10">
                <img src={blogipn} className='w-full object-cover h-[430px]' alt="" />
            </div>


            <div className="flex flex-col text-center items-center w-[60%] pt-10 justify-center">
                <p className='font-montserrat pb-5 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, velit provident? Id minus dolorum unde, non impedit aliquid, delectus quod officia accusamus distinctio reiciendis recusandae facilis magni, similique est odit.</p>
                <p className='font-montserrat'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, velit provident? Id minus dolorum unde, non impedit aliquid, delectus quod officia accusamus distinctio reiciendis recusandae facilis magni, similique est odit.</p>
            </div>
        
        <div className="font-montserratBold text-[20px] text-center w-[40%] pt-5">
            <p className='font-montserrat'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quia illum impedit illo inventore. Quod aspernatur temporibus eum amet itaque voluptates, ipsum hic deserunt ipsa, praesentium asperiores eius est corporis?</p>
           <div className="flex items-center justify-center gap-1 pt-1">
            <div className="border border-buttons w-[15px]"></div>
           <p className='font-montserrat text-sm'>Emmanuel Ncoche</p>
           </div> 
            </div>
      
            <div className="flex flex-col text-center items-center w-[60%] pt-12 justify-center">
                
                <p className='font-montserrat '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo consequuntur. Facilis dolorum vel illum nesciunt modi atque suscipit. Explicabo temporibus eum nemo optio! Sequi eius at nihil autem neque.
                      </p>

                <p className='font-montserrat pt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo consequuntur. Facilis dolorum vel illum nesciunt modi atque suscipit. Explicabo temporibus eum nemo optio! Sequi eius at nihil autem neque.
                      </p>
            </div>

            <div className="w-full pt-12  flex justify-between">
                <img src={iphonebanner} className='w-[45%] h-[500px] object-cover' alt="" />
                <div className="flex flex-col w-[54%] justify-between">
                    <img src={iphone} className='h-[243px] object-cover w-full' alt="" />
                    <img src={iphoneb} className='h-[243px] object-cover w-full' alt="" />
                </div>
            </div>

            <div className="flex flex-col text-center items-center w-[60%] pt-12 justify-center">
               <p className='font-montserrat'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo consequuntur. Facilis dolorum vel illum nesciunt modi atque suscipit. Explicabo temporibus eum nemo optio! Sequi eius at nihil autem neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo consequuntur. Facilis dolorum vel illum nesciunt modi atque suscipit. Explicabo temporibus eum nemo optio! Sequi eius at nihil autem neque. z
                      </p>
                      <p className='font-montserrat pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam molestias, reiciendis fuga corrupti magni eaque necessitatibus pariatur quos quibusdam. Repellat odit minus possimus placeat a quisquam quos itaque nulla expedita.</p>
                      <p className='font-montserrat pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam molestias, reiciendis fuga corrupti magni eaque necessitatibus pariatur quos quibusdam. </p>

                      <div className="border border-buttons w-1/4 mt-14 mb-12"></div>

                      <div className="flex items-center gap-1 justify-between">
                      <Heart className='h-[18px] text-buttons font-montserratBold w-[18px]'/>
                        <p className='font-montserrat'>800 Likes</p>
                        </div>
            </div>


            <form className="flex justify-end items-end flex-col text-center gap-1 w-[60%] pt-8 mb-20  ">
              <textarea name="" className='w-full h-[150px] border border-buttons outline-none px-5 pt-[8px] font-montserrat text-buttons' placeholder='write a comment.......'  id=""></textarea> 
              <button className='font-montserratBold text-buttons text-sm'>POST COMMENT</button>
            </form>
            


        </div>
     
    </div>
  )
}

export default Blogarticle