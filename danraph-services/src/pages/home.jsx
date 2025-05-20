import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../images/danraph-logo.webp"
import img2 from "../images/Danraph-image1.webp"
import img3 from "../images/danraph-image3.webp"
import img4 from "../images/danraph-image2.webp"
import img5 from "../images/Danraph-services4.webp"
import img6 from "../images/Danraph-services5.webp"
import img7 from "../images/Danraph-services6.webp"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
import img8 from "../images/Danraph-services7.webp"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const home = () => {

  return (
    <div style={{ backgroundColor: '#F6F9F6' }} className='h-auto pb-16'>
     <div className='mx-6 hidden sm:flex items-center translate-y-3 justify-between'>
        <div className='flex items-center  gap-6'>
          <div className='max-w-40'>
            <img src={img1} alt="Danraph Logo" className='w-full cursor-pointer' loading="lazy"/>
          </div>
          <div>
            <button className='py-2 px-4 text-base bg-black border-black text-white font-medium rounded-3xl hover:bg-transparent  hover:text-black  border-2  transition duration-500'>Download App</button>
          </div>
        </div>

        <div className='flex items-center gap-5 '>
            <p className='text-base cursor-pointer'>Support</p>
            <Link to="/login"><p className='text-base font-semibold cursor-pointer hover:text-gray-600 transition duration-400 '>Log in</p></Link>
            <Link to="/signup"><button className='bg-blue-800 text-white py-2 text-base border-2 border-blue-800  px-5 rounded-3xl hover:bg-transparent hover:text-blue-800 transition duration-500'>Register</button></Link>
        </div>
      </div>

      <div className='flex sm:hidden items-center justify-between mx-2 '>
       
        <div><p className='cursor-pointer text-base'>Support</p></div>
        <div className='max-w-32'> <img src={img1} alt="Danraph Logo" className='w-full' loading="lazy" /> </div>
        <Link to="/signup"><div><button className='bg-blue-800 text-white py-1 text-sm sm:text-base border-2 border-blue-800  px-5 rounded-3xl hover:bg-transparent hover:text-blue-900 transition duration-500'>Register</button></div></Link>
       
      </div>

      <div className='text-center mt-14'>
        <p className='font-semibold text-sm sm:text-xl'>DANRAPH <br /> E C O C R U I S E L I M I T E D</p>
        <h1 className='text-2xl sm:text-5xl font-bold m-5 sm:m-11'>Keep Up with the Ride</h1>
        <p className='text-sm sm:text-lg  font-normal px-4'>Experience fast, safe, and eco-friendly transportation across campus. Book rides, <br /> track shuttles, and reach your destination effortlessly.</p>
        <button className='py-2 px-4 my-7 text-sm sm:text-lg  bg-blue-800 border-blue-800 text-white font-medium rounded-3xl hover:bg-transparent hover:text-blue-900 border-2  transition duration-500'>Download Danraph App</button>
      </div>



      
      <div className='flex sm:gap-7 gap-7 flex-wrap justify-between small:justify-center m-3 sm:m-5 '>
        <div className='relative text-white bg-black max-w-[390px] rounded-t-[120px]  '>
          <div className='pt-16 px-6'>
            <h2 className=' font-bold text-xl sm:text-3xl' >Seamless Campus Rides, Just a Click Away!</h2> <br />
            <p className='text-sm sm:text-base  '>Request a ride within your university campus in seconds. Safe, fast, and reliable transportation for students, faculty, and staff.</p>
            <button className=' hidden sm:block mb-44 py-2 px-3 rounded-3xl bg-white text-black font-semibold mt-4 border-2 border-white hover:bg-transparent hover:text-white hover:transition hover:duration-500 cursor-pointer'>Download App</button>
            <button className=' block sm:hidden text-xs mb-40 py-2 px-3 rounded-3xl bg-white text-black font-semibold mt-4 border-2 border-white hover:bg-transparent hover:text-white hover:transition hover:duration-500 cursor-pointer'>Get the Swift App</button>  
          </div>
          
      
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2  max-w-[250px]'>
            <img src={img2} alt="Danraph Shuttle" className='w-full' loading="lazy" />
          </div>
        </div>

       

       <div className='relative max-w-[400px] rounded-t-[120px] bg-white h-[410px] sm:h-[469px] shadow-md shadow-gray-600 '>
          <div className='pt-16 px-6'>
            <h2 className='font-bold text-xl sm:text-3xl'>Smart Transport, Hassle-Free Experience!</h2><br />
            <p className='text-sm sm:text-base'>Track shuttles in real-time, manage your ride history, and enjoy a cashless payment system—all in one platform.</p>
          </div>

          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[300px]'>
  <img src={img3} alt="Danraph Service" className='w-full' loading="lazy" />
</div>
       </div>
        
       
       <div className='max-w-[390px] hidden sm:block'>
          <img
  src={img4}
  alt="Danraph Campus"
  className='w-full rounded-t-[120px] h-[400px] sm:h-[466px]'
  loading="lazy"
/>
        </div>
      </div>

     <div>
        <div className='flex-wrap justify-center  lg-custom:justify-center lg-custom:mr-1  flex items-center gap-3 my-12 sm:my-28 mx-2 sm:2xl-[90px] p:justify-center '>

          <div className=' '>
            <div className='flex  gap-8 sm:gap-11 items-center -translate-y-2 md:-translate-y-11'>
              <p className='border border-black text-base sm:text-3xl py-1 sm:py-2 px-4 rounded-full font-semibold'>Students</p>
              <p className='text-sm sm:text-2xl font-semibold'>Staffs</p>
            </div>
            
            <div className='max-w-[850px]  lg:text-left text-center lg:max-w-[560px] lg-custom:max-w-[460px] '> 
            <p className='font-semibold text-[27px] sm:text-[45px] lg-custom:text-[35px] py-5 '>Smooth Rides, On Time</p>
            <p className='text-sm sm:text-lg lg-custom:text-base '>Stay focused on what truly matters—teaching, research, and administrative work—while we take care of your campus commute. Whether you're heading to a lecture hall, faculty office, or an important meeting, our transport system offers a reliable, secure, and efficient way to move around campus without delays or inconvenience.</p>
            </div>
            
          
          </div>

          <div className='max-w-[700px] lg:max-w-[645px] lg-custom:max-w-[640px] lg-custo:max-w-[530px] '>
            <img src={img5} alt="Danraph Service" className='w-full rounded-2xl' loading="lazy" />
          </div>
        </div>
     </div>
 
     <div className='p-3'>
        <div className='max-w-[705px] sm:p-14 pb-4'>
          <h2 className='text-[24px] sm:text-[40px] font-bold pb-[13px]'>DanRalph EcoCruise Products</h2>
          <p className='sm:text-lg text-xs '>Smart, Efficient, and Eco-Friendly Campus Transportation at Your Fingertips.</p>
        </div>
      
        <div className='flex items-start flex-wrap justify-center gap-5'>
        <div className=' max-w-[595px] border border-gray-400 rounded-xl'>
        <img src={img6} alt="Rider/Customer App" className='w-full max-w-[595px] rounded-t-xl' loading="lazy" />
        <div className='max-w-[558px] my-2 mb-4 sm:mb-6 px-[12px] sm:px-[19px]'> 
          <h2 className='text-lg sm:text-2xl  font-medium py-2 sm:py-5'>Rider/Customer App</h2>
          <p className='text-[15px] sm:text-base font-normal underline '>Book rides instantly, track shuttles in real time, and enjoy a cashless, hassle-free campus transport experience.</p>
        </div>
        </div>
          
        <div className=' max-w-[595px] border border-gray-400 rounded-xl lg:mt-28 mt-0 medium:mt-0 '>   
          <img src={img7} alt="Driver App" className='w-full rounded-t-xl' loading="lazy" />
          <div className='max-w-[558px] my-2 mb-4 sm:mb-6 px-[12px] sm:px-[19px]'> 
            <h2 className='text-lg sm:text-2xl  font-medium py-2 sm:py-5'>Driver App</h2>
            <p className='text-[15px] sm:text-base font-normal underline '>Accept ride requests, navigate campus routes, and manage trips efficiently with real-time updates and notifications.</p>
          </div>
        </div>

          
        </div>
     </div>


      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-16 px-2'>
      <div className=' max-w-[595px] border border-gray-400 rounded-xl lg:mt-28 mt-0 medium:mt-0 '>  
        <div>
          <img src={img8} alt="Admin Dashboard" className='w-full rounded-t-xl' loading="lazy" />
        </div> 
        <div className='max-w-[558px] my-2 mb-4 sm:mb-6 px-[12px] sm:px-[19px]'> 
          <h2 className='text-lg sm:text-2xl  font-medium py-2 sm:py-5'>Admin Dashboard</h2>
          <p className='text-[15px] sm:text-base font-normal underline '>Monitor rides, manage users and drivers, schedule shuttles, and optimize campus transport operations with ease.</p>
        </div>
      </div>
 
        <div>
          <div className='max-w-[549px] mt-4 xl:mt-24 foot:mt-4 '>
            <h1 className='font-semibold text-[25px] sm:text-[40px] mb-2'>Log in to see your recent activity</h1>
            <p className='font-normal sm:text-lg text-[15px]'> Stay updated with your latest rides, completed trips, and upcoming bookings. Access your ride history, track ongoing trips, and manage your account seamlessly</p>
          </div>
          
          <Link to="/login"><button className=' py-2 px-4 my-7 text-sm sm:text-lg  bg-blue-800 border-blue-800 text-white font-medium rounded-3xl hover:bg-transparent hover:text-blue-900 border-2  transition duration-500'>Log in to your Accounts</button></Link>
          <Link to="/signup"><p className='sm:text-lg text-[14px] font-medium underline cursor-pointer hover:text-gray-700'>Dont have a Danraph account? Sign up</p></Link>
        </div>
      </div>


        <div className='flex flex-wrap gap-10 p-5 xl:gap-28 foot:mt-[15px] foot:gap-5 xl:mt-[130px] mt-[30px] mb-2 justify-left sm:justify-center items-center sm:items-start'>
          <div className='max-w-[217px]'>
            <img src={img1} alt="Danraph Logo" className='sm:max-w-[131px] max-w-[110px] w-full mb-3' loading="lazy" />
            <p className='font-normal sm:text-[16px] text-[13px]'>Stay informed and in control with easy access to your recent rides, trip history, and account updates.</p>
          </div>

          <div className='min-w-[200px] sm:min-w-[0] mt-0 sm:mt-5'>
            <p className='font-semibold sm:text-[21px] text-[17px] '>Get in Touch</p>
            <p className='font-medium sm:text-base text-sm py-3'>Support@Danraph.ltd</p>
            <p className='font-medium sm:text-base text-sm '>+6221.2002.2012</p>
          </div>

          <div className='min-w-[200px] sm:min-w-[0] mt-0 sm:mt-5'>
            <p className='font-semibold sm:text-[21px] text-[17px]'>Quick Links</p>
            <p className='font-normal sm:text-lg text-base py-3'>Book a Ride</p>
            <p className='font-normal sm:text-lg text-base'>Recent Activities</p>
          </div>
          
          <div className='min-w-[200px] sm:min-w-[0] mt-0 sm:mt-5'>
            <p className='font-semibold sm:text-[21px] text-[17px]'>Support</p>
            <p className='font-normal sm:text-lg text-base py-3'>Contact Us</p>
            <p className='font-normal sm:text-lg text-base pb-3'>Support center</p>
            <p className='font-normal sm:text-lg text-base'>Feedback</p>
          </div>
          
          <div className='min-w-[200px] sm:min-w-[0] mt-0 sm:mt-5'>
            <p className='font-semibold sm:text-[21px] text-[17px]'>Social</p>
            <div className="flex gap-6 py-5">
              <FaFacebookF className="text-black text-base sm:text-lg" />
              <FaTwitter className="text-black text-base sm:text-lg" />
              <FaInstagram className="text-black text-base sm:text-lg" />
              <FaLinkedinIn className="text-black text-base sm:text-lg" />
            </div>
          </div>
      </div>
      
      <div className='h-px bg-black opacity-30 mx-0 sm:mx-16 '></div>
   
      <div className='flex flex-wrap justify-center sm:justify-center lg:justify-between items-center mx-2 sm:mx-16 my-1  '>
        <div>
        <p>© Copyright all reserve by Danraph Ecocruise</p>
        </div>
       
       <div className='flex flex-col items-center'>
       <div className='flex flex-wrap gap-2 sm:gap-3  '>
        <button className=' py-2 px-3 text-[14px] sm:text-[16px] rounded-3xl bg-transparent text-black font-semibold mt-4 border-2 border-black hover:bg-black hover:text-white hover:transition hover:duration-500 cursor-pointer'>Get the Rider App</button>
        <button className=' py-2 px-3 text-[14px] sm:text-[16px] rounded-3xl bg-transparent text-black font-semibold mt-4 border-2 border-black hover:bg-black hover:text-white hover:transition hover:duration-500 cursor-pointer'>Get the Driver App</button>
        </div>
        <div className='flex flex-wrap justify-center gap-7 translate-y-5 text-[12px] sm:text-[15px]  '>
          <p className='cursor-pointer'>Cookies Notice</p>
          <p className='cursor-pointer'>Privacy Notice</p>
          <p className='cursor-pointer'>Terms and Conditions</p>
        </div>
       </div>
       
      </div>
    
 
    </div>
  )
}

export default home
