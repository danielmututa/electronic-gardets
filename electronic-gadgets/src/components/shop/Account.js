// import React, { useState } from 'react';
// import aimg from "../Images/IphoneSiv.jpg";
// import aimg2 from "../Images/SamsumgW.jpg";
// import user from "../Images/Sophia Lee.jpg";
// import { PencilIcon, Save } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Account = () => {
//   const [isEditing, setIsEditing] = useState(false);

//   const [myEditing, setIsMyediting] = useState(false);

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };


//   const mystock = [
//     {
//       date:"21.02.2025",
//        img:"IphonBxed.jpg",
//       type:"Iphone 13 Pro max",
//       delivered:"Delivered",
//       delivey:"$5",
//       location:"Harare",
//        price:"$480"

//     },
//     {
//       date:"21.02.2025",
//        img:"collection-summer.jpg",
//       type:"Samsung S23",
//       delivered:"Delivered",
//       delivey:"$15",
//       location:"Kwekwe",
//       price:"$480"

//     },
//     {
//       date:"21.02.2025", 
//       img:"sell-product.jpg",
//       type:"Oppo F25 pro max",
//       delivered:"Delivered",
//       delivey:"$15",
//       location:"Bindura",
//       price:"$500"

//     },
//     {
//       date:"21.02.2025",
//        img:"IphoneB.jpg",
//       type:"Iphone 14 Pro max",
//       delivered:"Delivered",
//       delivey:"$20",
//       location:"Bulawayo",
//       price:"$480"

//     },
//   ]


     

//   // State to hold the delivery address
//   const [address, setAddress] = useState({
//     name: 'Natasha Parker',
//     street: '29 Lucky Steet',
//     postcode: 'sk5 GD0',
//   });

//   // State to hold the delivery address
//   const [myaddress, setMyaddress] = useState({
//     name: 'Natasha Parker',
//     street: '29 Lucky Steet',
//     postcode: 'sk5 GD0',
//   });

//   // Handle editing form visibility
//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const toggleEditting = () => {
//     setIsMyediting(!myEditing);
//   };

  
  
//   // Handle form submit to update the address
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you would normally update the address in your database or backend .........
//     setIsEditing(false);
//     console.log('Address has been updated!');
//   };
  

//   // Handle form submit to update the address...........

//   const handleSubmiting = (e) => {
//     e.preventDefault();
//     // Here, you would normally update the address in your database /  backend
//     setIsMyediting(false);
//     console.log('Address has been updated!');
//   };
  

//   return (
//     <div className='px-5  md:px-10 lg:px-20 pt-[100px] mb-10 flex justify-between  '>
//         <div className=" w-[62%]">
//         <h2 className='font-montserratBold text-xl md:text-[23px] lg:text-[26px] mb-4'>My Account</h2>

//         <div className="w-full flex justify-between ">

//             <div className="relative w-[47%]">
//                 <img src={ aimg } className='w-full h-[200px] object-cover' alt="" />
//                 <Link className="absolute bg-blue-50/20  top-0 flex flex-col justify-center pl-8 w-full h-full" >
//                   <p className='font-montserratBold text-[18px]'>Purchase up to</p>
//                   <p className='font-montserrat text-[40px]'>60%</p>
//                   <p className='font-montserratBold text-[14px]'>to get <Link>Nokia S16</Link>  </p>
//                   </Link>
                
//             </div>
//             <div className="relative w-[47%]">
//                 <img src={ aimg2  } className='w-full h-[200px] object-cover' alt="" />
//                 <Link className="absolute bg-blue-50/20 top-0 flex flex-col justify-center pl-8 w-full h-full" >
//                   <p className='font-montserratBold text-[18px]'>Purchase up to</p>
//                   <p className='font-montserrat text-[40px]'>90%</p>
//                   <p className='font-montserratBold text-[14px]'>to get  <Link>Iphone 13 pro max</Link>  </p>
//                   </Link>
//             </div>
//         </div>
     
//           <div className="mt-9 w-full">
//           <h2 className='font-montserratBold  text-xl md:text-[23px] lg:text-[26px] mb-4'>My Stock</h2>

//            <div className="w-full mt-8 ">

//            <div className=" w-full flex justify-between ">
//             <div className="flex gap-[100px]">
//               <p className='font-montserratBold'>DATE</p>
//               <p className='font-montserratBold'>PRODUCT</p>
//             </div>

//             <div className="flex gap-[100px]">
//             <p className='font-montserratBold'>DELIVERY</p>
//             <p className='font-montserratBold'>PRICE</p>
//             </div>
//             </div>
//            </div>
//            <div className="border w-full mt-2"></div>

//           <div className="flex w-full flex-col  pt-3">
//             {
//               mystock.map((item,index) => (
//                 <div className="flex  pt-6 w-full justify-between">

//                   <div className="flex gap-[69px] items-center">
//                   <p className='font-montserrat text-sm'>{item.date}</p>
//                   <div className="flex items-center gap-3">
//                   <img src={require("../Images/" + item.img)} className='w-[100px] h-20 object-cover' alt="" />
//                   <div className="">
//                     <p className='font-montserrat text-sm'>{item.delivered}</p>
//                     <p className='font-montserrat text-sm'>{item.type}</p>
//                   </div>
//                   </div>
//                   </div>

//                   <div className="flex w-[235px] justify-between items-center">
//                     <div className="flex items-center flex-col ">
//                     <p p className='font-montserratBold'>{item.location}</p>
//                     <p>{item.delivey}</p>
//                     </div>
                   
//                     <p>{item.price}</p>
//                   </div>
                  
                  



//                 </div>
//               ))
//             }
//           </div>

//           </div>

//         </div>

//         <div className="w-[34%] flex flex-col items-center justify-center pb-20  bg-body">
//           <div className=" flex flex-col pt-8 items-center justify-center">
//             <img src={user} className='h-[80px] w-[80px]  object-cover rounded-full mb-3' alt="" />
//             <p className='text-sm md:text-[16px] lg:text-[18px] text-white font-montserratBold'>Natasha Parker</p>
//             <p className='text-sm  text-white  font-montserrat'>parkernatasha09@gmail.com</p>
//           </div>

//           <div className="flex w-[80%] pt-8 justify-between">
//             <div className="flex flex-col items-center">
//               <p className='font-montserratBold text-white'> Balance</p>
//               <p className='font-montserrat text-white'> 75</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className='font-montserratBold text-white'>Status</p>
//               <p className='font-montserrat text-white'>0</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className='font-montserratBold text-white'>Activity</p>
//               <p className='font-montserrat text-white'>200</p>
//             </div>
//           </div>

//           <div className=" mt-4 border w-[80%]"></div>

//            <div className="w-[80%]">
//             <div className="flex w-full pt-8 justify-between">

//             <p className='font-montserratBold text-white'>Delivary Address</p>
//              <button onClick={toggleEdit}>
//              <PencilIcon size={20} className=' text-white'/>
//              </button>
//             </div>
            

//             {/* lllllllllllllllllllllllllllll */}

       
//             <div>
//       {/* Pencil icon to toggle the top form  */}
     
//       {/* If editing, show the form */}
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label  className='font-montserratBold text-white '>
//               Name
//               <input
//                 type="text"
//                 className='outline-none mt-3 ml-3 font-montserrat  text-sm text-body p-1'
//                 value={address.name}
//                 onChange={(e) => setAddress({ ...address, name: e.target.value })}
//                 required
//               />
//             </label>
//           </div>
//           <div>
//             <label  className='font-montserratBold text-white '>
//               Street Address
//               <input
//                 type="text"
//                   className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
//                 value={address.street}
//                 onChange={(e) => setAddress({ ...address, street: e.target.value })}
//                 required
//               />
//             </label>
//           </div>
//           <div>
//             <label className='font-montserratBold text-white '>
//               Postcode
//               <input
//                 type="text"
//                   className='outline-none mt-3 ml-3 font-montserrat  text-sm text-body p-1'
//                 value={address.postcode}
//                 onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
//                 required
//               />
//             </label>
//           </div>
//           <button className='pt-3 text-white font-montserratBold' type="submit"><Save size={20}/></button>
//         </form>
//       ) : (
//         // Display the address when not editing
//         <div className='mt-5 flex flex-col gap-2'>
          
//           <p className='font-montserrat text-white'>{address.name}</p>
//           <p className='font-montserrat text-white'>{address.street}</p>
//           <p className='font-montserrat text-white'>{address.postcode}</p>
          
//         </div>
//       )}
//     </div>


//             {/* lllllllllllllllllllllllllllll */}
//            </div>

//            <div className=" mt-4 border w-[80%]"></div>

//           <form className="mt-4 flex flex-col w-[80%]">
//           <p className='font-montserratBold text-white'>Payment method</p>

// <div className="flex justify-between mt-3 ">
// <div className="p-2 bg-white text-buttons  "><p className='text-[10px] font-montserratBold'>paypal</p> </div>
//           <input type="email" placeholder='Email ' className='w-[80%] pl-[8px] text-sm font-montserrat outline-none text-body' />
        
// </div>
// <button className='text-sm font-montserratBold w-full mt-2 py-1 bg-white text-body hover:bg-buttons hover:text-white hover:duration-300 hover:transition-all'>Continue</button>
//            </form>


//            <div className=" mt-4 border w-[80%]"></div>

// <div className="w-[80%]">
//  <div className="flex w-full pt-8 justify-between">

//  <p className='font-montserratBold text-white'>Billing Address</p>
//   <button onClick={toggleEditting}>
//   <PencilIcon size={20} className=' text-white'/>
//   </button>
//  </div>
 

//  {/* lllllllllllllllllllllllllllll */}


//  <div>
// {/* Pencil icon to toggle the form */}

// {/* If editing, show the form */}
// {myEditing ? (
// <form onSubmit={handleSubmiting}>
// <div>
//  <label  className='font-montserratBold text-white '>
//    Name
//    <input
//      type="text"
//      className='outline-none mt-3 ml-3 font-montserrat  text-sm text-body p-1'
//      value={myaddress.name}
//      onChange={(e) => setMyaddress({ ...myaddress, name: e.target.value })}
//      required
//    />
//  </label>
// </div>
// <div>
//  <label  className='font-montserratBold text-white '>
//    Street Address
//    <input
//      type="text"
//        className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
//      value={myaddress.street}
//      onChange={(e) => setMyaddress({ ...myaddress, street: e.target.value })}
//      required
//    />
//  </label>
// </div>
// <div>
//  <label className='font-montserratBold text-white '>
//    Postcode
//    <input
//      type="text"
//        className='outline-none mt-3 ml-3 font-montserrat  text-sm text-body p-1'
//      value={myaddress.postcode}
//      onChange={(e) => setMyaddress({ ...myaddress, postcode: e.target.value })}
//      required
//    />
//  </label>
// </div>
// <button className='pt-3 text-white font-montserratBold' type="submit"><Save size={20}/></button>
// </form>
// ) : (
// // Display the address when not editing
// <div className='mt-5 flex flex-col gap-2'>

// <p className='font-montserrat text-white'>{myaddress.name}</p>
// <p className='font-montserrat text-white'>{myaddress.street}</p>
// <p className='font-montserrat text-white'>{myaddress.postcode}</p>

// </div>
// )}
// </div>


//  {/* lllllllllllllllllllllllllllll */}
// </div>
            

//         </div>

//     </div>
//   )
// }

// export default Account










import React, { useState } from 'react';
import aimg from "../Images/IphoneSiv.jpg";
import aimg2 from "../Images/SamsumgW.jpg";
import user from "../Images/Sophia Lee.jpg";
import { PencilIcon, Save, UserCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [myEditing, setIsMyediting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mystock = [
    {
      date: "21.02.2025",
      img: "IphonBxed.jpg",
      type: "Iphone 13 Pro max",
      delivered: "Delivered",
      delivey: "$5",
      location: "Harare",
      price: "$480"
    },
    {
      date: "21.02.2025",
      img: "collection-summer.jpg",
      type: "Samsung S23",
      delivered: "Delivered",
      delivey: "$15",
      location: "Kwekwe",
      price: "$480"
    },
    {
      date: "21.02.2025",
      img: "sell-product.jpg",
      type: "Oppo F25 pro max",
      delivered: "Delivered",
      delivey: "$15",
      location: "Bindura",
      price: "$500"
    },
    {
      date: "21.02.2025",
      img: "IphoneB.jpg",
      type: "Iphone 14 Pro max",
      delivered: "Delivered",
      delivey: "$20",
      location: "Bulawayo",
      price: "$480"
    },
  ];

  const [address, setAddress] = useState({
    name: 'Natasha Parker',
    street: '29 Lucky Street',
    postcode: 'sk5 GD0',
  });

  const [myaddress, setMyaddress] = useState({
    name: 'Natasha Parker',
    street: '29 Lucky Street',
    postcode: 'sk5 GD0',
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleEditting = () => {
    setIsMyediting(!myEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleSubmiting = (e) => {
    e.preventDefault();
    setIsMyediting(false);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="relative top-12 left-4 z-20 p-2 lg:hidden"
      >
        <UserCircle className="w-8 h-8 text-gray-800" />
      </button>

      <div className="px-5 md:px-10 lg:px-20 pt-[50px] md:pt-[100px] mb-10 flex flex-col lg:flex-row lg:justify-between">
        {/* Main Content Section */}
        <div className="w-full lg:w-[62%]">
          <h2 className='font-montserratBold text-xl md:text-[23px] lg:text-[26px] mb-2 md:mb-3 lg:mb-4'>My Account</h2>

          <div className="w-full flex justify-between">
            <div className="relative w-[47%]">
              <img src={aimg} className='w-full h-[200px] object-cover' alt="" />
              <Link className="absolute bg-blue-50/20 top-0 flex flex-col justify-center pl-2  md:pl-8 w-full h-full">
                <p className='font-montserratBold text-[18px]'>Purchase up to</p>
                <p className='font-montserrat text-[40px]'>60%</p>
                <p className='font-montserratBold text-[14px]'>to get <Link>Nokia S16</Link></p>
              </Link>
            </div>
            <div className="relative w-[47%]">
              <img src={aimg2} className='w-full h-[200px] object-cover' alt="" />
              <Link className="absolute bg-blue-50/20 top-0 flex flex-col justify-center pl-2  md:pl-8 w-full h-full">
                <p className='font-montserratBold text-[18px]'>Purchase up to</p>
                <p className='font-montserrat text-[40px]'>90%</p>
                <p className='font-montserratBold text-[14px]'>to get <Link>Iphone 13 pro max</Link></p>
              </Link>
            </div>
          </div>

          <div className="mt-9 w-full">
            <h2 className='font-montserratBold text-xl md:text-[23px] lg:text-[26px] mb-2 md:mb-3 lg:mb-4'>My Stock</h2>
            <div className="w-full mt-4 lg:mt-8">
              <div className="w-full flex justify-between">
                <div className="flex gap-[25px]  md:gap-[100px]">
                  <p className='font-montserratBold'>DATE</p>
                  <p className='font-montserratBold'>PRODUCT</p>
                </div>
                <div className="flex gap-[25px] md:gap-[100px]">
                  <p className='font-montserratBold'>DELIVERY</p>
                  <p className='font-montserratBold'>PRICE</p>
                </div>
              </div>
            </div>
            <div className="border w-full mt-2"></div>

            <div className="flex w-full flex-col pt-3">
              {mystock.map((item, index) => (
                <div key={index} className="flex pt-6 w-full justify-between">
                  <div className="flex gap-[13px] md:gap-[69px] md:items-center items-start">
                    <p className='font-montserrat text-[12px] md:text-sm pt-[30px] md:pt-0'>{item.date}</p>
                    <div className="flex items-start md:items-center gap-3 flex-col md:flex-row">
                      <img src={require("../Images/" + item.img)} className='w-[100px] h-20 object-cover' alt="" />
                      <div>
                        <p className='font-montserrat text-sm '>{item.delivered}</p>
                        <p className='font-montserrat text-sm '>{item.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[160px] md:w-[235px] justify-between md:items-center items-start">
                    <div className="flex items-center flex-col">
                      <p className='font-montserratBold text-sm pt-[30px] md:pt-0'>{item.location}</p>
                      <p className='font-montserratBold text-sm '>{item.delivey}</p>
                    </div>
                    <p className='font-montserratBold text-sm pt-[30px] md:pt-0'>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Panel */}
        <div className={`
          absolute  top-10 lg:top-0 left-0 w-[280px] sm:w-[320px] h-full bg-body
          transform transition-transform duration-300 ease-in-out z-40
          lg:relative lg:w-[34%] lg:transform-none
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center justify-center h-full pb-20">
            <div className="flex flex-col pt-8 items-center justify-center">
              <img src={user} className='h-[80px] w-[80px] object-cover rounded-full mb-3' alt="" />
              <p className='text-sm md:text-[16px] lg:text-[18px] text-white font-montserratBold'>Natasha Parker</p>
              <p className='text-sm text-white font-montserrat'>parkernatasha09@gmail.com</p>
            </div>

            <div className="flex w-[80%] pt-8 justify-between">
              <div className="flex flex-col items-center">
                <p className='font-montserratBold text-white'>Balance</p>
                <p className='font-montserrat text-white'>75</p>
              </div>
              <div className="flex flex-col items-center">
                <p className='font-montserratBold text-white'>Status</p>
                <p className='font-montserrat text-white'>0</p>
              </div>
              <div className="flex flex-col items-center">
                <p className='font-montserratBold text-white'>Activity</p>
                <p className='font-montserrat text-white'>200</p>
              </div>
            </div>

            <div className="mt-4 border w-[80%]"></div>

            <div className="w-[80%]">
              <div className="flex w-full pt-8 justify-between">
                <p className='font-montserratBold text-white'>Delivery Address</p>
                <button onClick={toggleEdit}>
                  <PencilIcon size={20} className='text-white' />
                </button>
              </div>

              <div>
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label className='font-montserratBold text-white'>
                        Name
                        <input
                          type="text"
                          className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                          value={address.name}
                          onChange={(e) => setAddress({ ...address, name: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label className='font-montserratBold text-white'>
                        Street Address
                        <input
                          type="text"
                          className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                          value={address.street}
                          onChange={(e) => setAddress({ ...address, street: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label className='font-montserratBold text-white'>
                        Postcode
                        <input
                          type="text"
                          className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                          value={address.postcode}
                          onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <button className='pt-3 text-white font-montserratBold' type="submit">
                      <Save size={20} />
                    </button>
                  </form>
                ) : (
                  <div className='mt-5 flex flex-col gap-2'>
                    <p className='font-montserrat text-white'>{address.name}</p>
                    <p className='font-montserrat text-white'>{address.street}</p>
                    <p className='font-montserrat text-white'>{address.postcode}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 border w-[80%]"></div>

            <form className="mt-4 flex flex-col w-[80%]">
              <p className='font-montserratBold text-white'>Payment method</p>
              <div className="flex justify-between mt-3">
                <div className="p-2 bg-white text-buttons">
                  <p className='text-[10px] font-montserratBold'>paypal</p>
                </div>
                <input type="email" placeholder='Email' className='w-[80%] pl-[8px] text-sm font-montserrat outline-none text-body' />
              </div>
              <button className='text-sm font-montserratBold w-full mt-2 py-1 bg-white text-body hover:bg-buttons hover:text-white hover:duration-300 hover:transition-all'>
                Continue
              </button>
            </form>

            <div className="mt-4 border w-[80%]"></div>

            <div className="w-[80%]">
              <div className="flex w-full pt-8 justify-between">
                <p className='font-montserratBold text-white'>Billing Address</p>
                <button onClick={toggleEditting}>
                  <PencilIcon size={20} className='text-white' />
                </button>
              </div>

              <div>
                {myEditing ? (
                  <form onSubmit={handleSubmiting}>
                    <div>
                      <label className='font-montserratBold text-white'>
                        Name
                        <input
                          type="text"
                          className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                          value={myaddress.name}
                          onChange={(e) => setMyaddress({ ...myaddress, name: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label className='font-montserratBold text-white'>
                        Street Address
                        <input
                          type="text"
                          className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                          value={myaddress.street}
                          onChange={(e) => setMyaddress({ ...myaddress, street: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label className='font-montserratBold text-white'>
                        Postcode
                        <input
                          type="text"
                          className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                          value={myaddress.postcode}
                          onChange={(e) => setMyaddress({ ...myaddress, postcode: e.target.value })}
                          required
                        />
                      </label>
                    </div>
                    <button className='pt-3 text-white font-montserratBold' type="submit">
                      <Save size={20} />
                    </button>
                  </form>
                ) : (
                  <div className='mt-5 flex flex-col gap-2'>
                    <p className='font-montserrat text-white'>{myaddress.name}</p>
                    <p className='font-montserrat text-white'>{myaddress.street}</p>
                    <p className='font-montserrat text-white'>{myaddress.postcode}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Account;